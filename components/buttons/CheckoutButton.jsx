"use client"

import { useCartStore } from "@/store/cart";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react"
import { toast } from "sonner";

export default function CheckoutButton() {
    
    const cart = useCartStore((state) => state.cart)
    const { data: session, status } = useSession()

    const hnaddleCheckOut = () => {
        if (!session?.user) {
            toast.info("login to checkout")
        } else {
            redirectToCheckout()
        }
        
    }


    const redirectToCheckout = async () => {
        try {
            const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

            if (!stripe) throw new Error('Stripe failed to initialize.');

            const checkoutResponse = await fetch('/api/checkout_sessions', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    cart,
                    userId: session?.user?._id, // Add the user session ID to the request body,
                    userEmail: session?.user?.email
                }),
            });

            const { sessionId } = await checkoutResponse.json();

            const stripeError = await stripe.redirectToCheckout({sessionId});

            if (stripeError) {
                console.error(stripeError, "here is error");
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <button
            onClick={() => cart.length > 0 && hnaddleCheckOut()}
            disabled={cart.length === 0}
            className="w-full px-6 py-3 mr-2 text-base font-medium border border-transparent rounded-md shadow-sm bg-almond_green disabled:cursor-not-allowed">
            Checkout
        </button>
    );
}