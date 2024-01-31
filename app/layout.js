import { Inter } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/components/providers/AuthProvider";
import SmoothScrolling from "@/components/providers/LennisProvider";
import { Toaster } from "sonner";
import ThemeToggleProviser from "@/components/providers/ThemeToggleProviser";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: 'Electro Shop',
  description: 'Electro Shop',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <SmoothScrolling>
          <AuthProvider>
            <ThemeToggleProviser>
              <Toaster richColors toastOptions={{ classNames: { title: 'text-lg' } }} />
              <div className="px-3 mx-auto max-w-screen-2xl text-light-primary">
                {children}
              </div>
            </ThemeToggleProviser>
          </AuthProvider>
        </SmoothScrolling>
      </body>
    </html>
  );
}
