"use client";

import { useEffect, useRef, useState } from "react";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";

export default function HomePage() {
	useEffect(() => {
		// ১. ব্রাউজারের ওল্ড স্ক্রল মেমোরি রিস্টোরেশন ডিজেবল করার কমান্ড
		if (typeof window !== "undefined" && window.history.scrollRestoration) {
			window.history.scrollRestoration = "manual";
		}

		// ২. পেজ রিফ্রেশ হওয়া মাত্রই কোনো ল্যাগ ছাড়া একদম টপে পুশ করার লজিক
		window.scrollTo({
			top: 0,
			behavior: "instant",
		});
	}, []);

	const [readingProgress, setReadingProgress] = useState<number>(0);
	const pageRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleScroll = () => {
			if (!pageRef.current) return;

			const element = pageRef.current;
			const { top, height } = element.getBoundingClientRect();
			const windowHeight = window.innerHeight;

			// Total scrollable distance within the article element itself
			const scrollableDistance = height - windowHeight;

			// If the article is shorter than the viewport, it's already fully "read"
			if (scrollableDistance <= 0) {
				setReadingProgress(100);
				return;
			}

			// 'top' becomes negative as we scroll down.
			// We calculate the percentage of the scrollable distance covered.
			let progress = (-top / scrollableDistance) * 100;

			// Clamp the value strictly between 0 and 100
			progress = Math.min(100, Math.max(0, progress));

			setReadingProgress(progress);
		};

		// Passive listener for better scrolling performance
		window.addEventListener("scroll", handleScroll, { passive: true });
		handleScroll(); // Trigger once on mount to set initial state

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<div
			ref={pageRef}
			className="relative min-h-screen bg-neutral-950 text-neutral-100 antialiased selection:bg-teal-500/20 selection:text-teal-300"
		>
			<div className="fixed top-16 left-0 w-full h-1 bg-neutral-950 z-100 pointer-events-none">
				<div
					className="relative h-full bg-linear-to-r from-transparent via-teal-500 to-teal-400 transition-[width] duration-100 ease-linear"
					style={{ width: `${readingProgress}%` }}
				>
					{readingProgress > 0 && (
						<div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center justify-center">
							{/* 1. Core White Star/Meteor Head */}
							<div className="relative z-10 h-2 w-2 rounded-full bg-teal-200" />

							{/* 2. Pulsing Sparkle Ring */}
							<div className="absolute h-3 w-3 rounded-full bg-yellow-300/60 animate-ping" />

							{/* 3. Trailing Neon Flare */}
							<div className="absolute right-0 h-4 w-12 -translate-y-1/2 top-1/2 bg-linear-to-r from-transparent to-yellow-400 blur-xs -z-10 rounded-full animate-pulse" />
						</div>
					)}
				</div>
			</div>

			<main className="relative z-10">
				<Hero />
				<About />
				<Skills />
				<Projects />
				<Experience />
				<Contact />
			</main>
		</div>
	);
}
