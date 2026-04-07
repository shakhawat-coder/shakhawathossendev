import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Providers } from "./providers";
import SmoothScrolling from "@/components/SmoothScrolling";
import FloatingSocials from "@/components/FloatingSocials";

export const metadata = {
    title: "Shakhawat Hossen - Frontend Developer Portfolio",
    description: "A passionate frontend developer creating responsive, accessible, and visually refined web interfaces. Specialized in React, Next.js, and Tailwind CSS.",
    keywords: "frontend developer, web developer, React, Next.js, Tailwind CSS, portfolio",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className="bg-white dark:bg-gray-900/80 dark:text-white transition-colors duration-300" suppressHydrationWarning>
                <Providers>
                    <SmoothScrolling>
                        <Navbar />
                        {children}
                        <FloatingSocials />
                        <Footer />
                    </SmoothScrolling>
                </Providers>
            </body>
        </html>
    );
}
