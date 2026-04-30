"use client";

import Image from "next/image";
import { Download, Terminal } from "lucide-react";

export function Hero() {
	return (
		<section
			id="home"
			className="relative flex min-h-[90vh] items-center justify-center overflow-hidden px-4 lg:px-8"
		>
			<div className="mx-auto flex w-7xl flex-col items-center gap-12 lg:flex-row lg:justify-between">
				<div className="flex flex-col items-center text-center lg:items-start lg:text-left">
					<div className="inline-flex items-center gap-2 rounded-full border border-teal-500/20 bg-teal-500/5 px-3 py-1.5 font-medium text-teal-400">
						<Terminal size={16} />
						<span>Available for new opportunities</span>
					</div>

					<h1 className="mt-6 text-4xl font-bold tracking-tight sm:text-6xl">
						Howdy, I am
						<br />
						<span className="text-teal-400">Muhammad Ahnaf</span>
					</h1>

					<p className="mt-4 text-xl font-semibold sm:text-3xl">Software Developer</p>

					<p className="mt-4 max-w-lg text-lg leading-relaxed text-zinc-300">
						Building robust full-stack applications with a focus on performance,
						scalability, and clean user interfaces.
					</p>

					<div className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start">
						<a
							href="/resume.pdf"
							download
							className="inline-flex items-center gap-2 rounded-xl bg-teal-500 px-5 py- font-semibold text-zinc-950 transition-all hover:bg-teal-400 hover:shadow-[0_0_20px_rgba(20,184,166,0.4)]"
						>
							<Download size={18} />
							Download Resume
						</a>

						<a
							href="#projects"
							className="rounded-xl border border-zinc-700 bg-zinc-900 px-5 py-3 font-semibold text-zinc-300 transition-all hover:bg-zinc-800 hover:border-zinc-600"
						>
							View My Work
						</a>
					</div>
				</div>

				<div className="relative">
					<div className="relative z-10 h-64 w-64 overflow-hidden rounded-3xl border-2 border-zinc-800 bg-zinc-900 sm:h-80 sm:w-80 lg:h-100 lg:w-100">
						<Image
							src="/pp.png"
							alt="Neo"
							fill
							className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
							priority
						/>
					</div>

					<div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-3xl border-2 border-teal-700" />
					<div className="absolute -top-4 -left-4 -z-10 h-full w-full rounded-3xl border-2 border-teal-700" />
				</div>
			</div>
		</section>
	);
}
