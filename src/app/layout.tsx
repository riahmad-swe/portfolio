import type { Metadata } from "next";
import { Cause } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const cause = Cause({
	variable: "--font-cause",
	weight: ["200", "300", "400", "500", "600", "700", "800"],
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Muhammad Ahnaf",
	description: "Personal Portfolio of Muhammad Ahnaf",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html
			lang="en"
			className={`${cause.variable} bg-background text-foreground h-full antialiased`}
		>
			<body>
				<Navbar />
				<main className="py-16">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
