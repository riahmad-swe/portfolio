"use client";

import Image from "next/image";
import { Terminal, FileText } from "lucide-react"; // FileText আইকনটি যুক্ত করা হয়েছে

export function Hero() {
	return (
		<section
			id="home"
			className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 lg:px-8"
		>
			{/* ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্ট গ্লো */}
			<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-500/5 blur-[150px] rounded-full pointer-events-none" />

			<div className="mx-auto flex w-7xl flex-col items-center gap-12 lg:flex-row lg:justify-between relative z-10">
				<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
					<div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-3 py-1.5 font-medium text-teal-400">
						<Terminal size={16} />
						<span>Available for new opportunities</span>
					</div>

					<h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
						Howdy, I am
						<br />
						<span className="text-teal-400">Rakibul Islam</span>
					</h1>

					<p className="mt-4 text-xl font-semibold sm:text-3xl">
						Software Developer
					</p>

					<p className="mt-4 max-w-lg text-lg leading-relaxed text-zinc-300">
						Building the invisible infrastructure that powers modern
						applications. Expert in system design, robust APIs, and
						cloud-native automation.
					</p>

					{/* বাটন গ্রুপ এরিয়া */}
					<div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
						<a
							href="#projects"
							className="rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 font-semibold text-zinc-300 transition-all hover:bg-zinc-800 hover:border-zinc-600 cursor-pointer select-none"
						>
							View My Work
						</a>

						{/* ২. নতুন রেজিউমি (Resume) বাটন উইথ নিয়ন গ্লো অ্যান্ড ট্রানজিশন */}
						<a
							href="/resume.pdf" // আপনার public ফোল্ডারে resume.pdf ফাইলটি রাখলে এই পাথ কাজ করবে
							target="_blank"
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 rounded-xl border border-teal-500/30 bg-teal-950/20 px-5 py-3 font-semibold text-teal-400 backdrop-blur-md shadow-[0_0_15px_rgba(20,184,166,0.1)] transition-all duration-300 hover:border-teal-400 hover:bg-teal-950/40 hover:text-teal-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] cursor-pointer select-none"
						>
							<FileText size={18} />
							Resume
						</a>
					</div>
				</div>

				{/* প্রোফাইল ইমেজ কন্টেইনার */}
				<div className="relative">
					<div className="relative z-10 h-64 w-64 overflow-hidden rounded-3xl border-2 border-zinc-800 bg-zinc-900 sm:h-80 sm:w-80 lg:h-100 lg:w-100">
						<Image
							src="/profile.jpg"
							alt="Neo"
							fill
							className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
							priority
						/>
					</div>

					{/* ৩. ফিক্সড সেলফ-ক্লোজিং ব্যাক-লেয়ার বর্ডার ডিভস (/> দিয়ে এরর মুক্ত করা হয়েছে) */}
					<div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border-2 border-teal-700/40 hover:border-teal-400/70 transition-colors duration-500 pointer-events-none" />
					<div className="absolute -top-4 -left-4 -z-10 h-full w-full rounded-3xl border-2 border-teal-700/40 hover:border-teal-400/70 transition-colors duration-500 pointer-events-none" />
				</div>
			</div>
		</section>
	);
}
