import type { Metadata } from "next";
import { Cause } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/react";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { ScrollToTop } from "@/components/ScrollToTop";

const cause = Cause({
	variable: "--font-cause",
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Rakibul Islam",
	description: "Personal Portfolio of Rakibul Islam",
	icons: {
		icon: "/logo.png",
	},
};

// Next.js 16/15+ স্ট্যান্ডার্ড অনুযায়ী Props-এর টাইপ ডিফাইন করে এক্সপোর্ট করা হলো
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${cause.variable} bg-background text-foreground antialiased`}
		>
			<body>
				<SmoothScrollProvider>
					<Navbar />
					<main className="py-16">{children}</main>
					<Footer />
					<ScrollToTop />
				</SmoothScrollProvider>
				<Analytics />
			</body>
		</html>
	);
}
