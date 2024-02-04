'use server'

import { connectToDatabase } from "@/lib/db";
import User from "@/lib/models/User";

export const subscribeToNewsletter = async (email) => {
    await connectToDatabase();

    try {
        // Verify if user have already subscribe
        const user = await Newsletter.findOne({email: email})
        if (user) return { msg: "your already subscribe to our newsletter" }
        
        const newSubscriber = new Newsletter({email})

        await newSubscriber.save()
        return { msg: "your subscribe to our newsletter" }
  
    } catch (err) {
      console.log('Error getting user with order history:', err);
      redirect(`/errors?error=${err.message}`);
    }
};
  
export const getUserWithOrderHistory = async (userId) => {
  await connectToDatabase();

  try {
    // Find the user by ID and populate the 'orderHistory' array with order details
    const user = await User.findById(userId).populate('orderHistory').exec();

    if (!user)   if (!user) throw new Error('no user')

    return user;
  } catch (err) {
    console.log('Error getting user with order history:', err);
    // Handle other errors
    redirect(`/errors?error=${err.message}`);
  }
};
