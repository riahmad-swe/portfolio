import type { Metadata } from "next";
import { Cause } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Analytics } from "@vercel/analytics/next";
import SmoothScrollProvider from "@/components/SmoothScrollProvider";
import { ScrollToTop } from "@/components/ScrollToTop";

const cause = Cause({
	variable: "--font-cause",
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	// metadataBase দেওয়াটা Next.js 15+ এ বাধ্যতামূলক যদি আপনি relative image path ব্যবহার করেন
	metadataBase: new URL("https://riahmad.my"), // আপনার লাইভ ডোমেইন দিন

	title: {
		default: "Rakibul Islam Ahmad",
		template: "%s | Ahmad", // সাব-পেজগুলোতে অটোমেটিক এই টেক্সট যুক্ত হবে
	},
	description:
		"Architecting high-performance backend ecosystems, robust APIs, and multi-tenant distributed systems.",
	applicationName: "Rakibul Islam Ahmad Portfolio",
	authors: [{ name: "Rakibul Islam Ahmad", url: "https://riahmad.my" }],
	generator: "Next.js",
	keywords: [
		"Software Engineer",
		"Full-Stack Developer",
		"System Architect",
		"Next.js Developer",
		"TypeScript",
		"Postgres",
		"Prisma",
		"Bangladesh",
		"Titonex",
		"Jino AI",
		"Sustho",
		"Gari-X",
		"ClinexAI",
		"RoktoBindu",
	],

	// 🌐 Open Graph (Facebook, LinkedIn, Discord এর জন্য)
	openGraph: {
		title: "Rakibul Islam Ahmad",
		description:
			"Architecting high-performance backend ecosystems and robust APIs.",
		url: "https://riahmad.my",
		siteName: "Rakibul Islam Ahmad Portfolio",
		images: [
			{
				url: "/og-image.png", // public ফোল্ডারে 1200x630 পিক্সেলের একটি ইমেজ রাখবেন
				width: 1200,
				height: 630,
				alt: "Portfolio Banner",
			},
		],
		locale: "en_US",
		type: "website",
	},

	// 🐦 Twitter / X Cards
	twitter: {
		card: "summary_large_image",
		title: "Rakibul Islam",
		description: "Architecting high-performance backend ecosystems.",
		creator: "@r_i_ahmad",
		images: ["/og-image.png"],
	},

	// 🤖 Search Engine Crawlers
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
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
