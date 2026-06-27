"use client";

import { useEffect, useState } from "react";
import { useLenis } from "lenis/react";

export function ScrollToTop() {
	const [isVisible, setIsVisible] = useState(false);
	const lenis = useLenis();

	useEffect(() => {
		if (!lenis) return;

		const handleScroll = ({ scroll }: { scroll: number }) => {
			if (scroll > 200) {
				setIsVisible(true);
			} else {
				setIsVisible(false);
			}
		};

		lenis.on("scroll", handleScroll);

		return () => {
			lenis.off("scroll", handleScroll);
		};
	}, [lenis]);

	const scrollToTop = () => {
		lenis?.scrollTo(0, {
			duration: 1.2,
			immediate: false,
		});
	};

	return (
		<div
			className={`fixed right-6 bottom-6 z-50 transition-all duration-500 cubic-bezier(0.4, 0, 0.2, 1) ${
				isVisible
					? "translate-y-0 opacity-100 visible"
					: "translate-y-6 opacity-0 invisible pointer-events-none"
			}`}
		>
			{/* 1. background glowing effect*/}
			<div className="absolute inset-0 -z-10 rounded-full bg-cyan-700 opacity-30 blur-md animate-[pulse_2s_infinite]" />

			{/* 2. Interactive button*/}
			<button
				onClick={scrollToTop}
				aria-label="Scroll to top"
				className="flex h-12 w-12 cursor-pointer items-center justify-center rounded-full bg-linear-to-blue from-cyan-400 via-blue-500 to-indigo-600 text-white shadow-[0_0_30px_rgba(6,182,212,0.85)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_45px_rgba(6,182,212,1)] hover:from-cyan-300 hover:to-blue-400 active:scale-95"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					strokeWidth={3}
					stroke="currentColor"
					className="h-5 w-5 transition-transform duration-300 hover:-translate-y-1"
				>
					<path
						strokeLinecap="round"
						strokeLinejoin="round"
						d="M4.5 10.5 12 3m0 0 7.5 7.5M12 3v18"
					/>
				</svg>
			</button>
		</div>
	);
}
