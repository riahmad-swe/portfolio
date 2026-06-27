"use client";

import Link from "next/link";
import { Terminal, Cpu } from "lucide-react";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="relative bg-neutral-950/40 backdrop-blur-xl mt-20 overflow-hidden">
			<div className="h-px w-full absolute left-0 top-0 bg-linear-to-r from-zinc-800 via-teal-400/40 to-zinc-800"></div>

			{/* ব্যাকগ্রাউন্ডে একটি সূক্ষ্ম নিয়ন আভা */}
			<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-37.5 bg-teal-500/5 blur-[80px] rounded-full pointer-events-none" />

			<div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-12 gap-8 pb-8 border-b border-neutral-900/60">
					{/* কলাম ১: ব্র্যান্ডিং ও ভিশন (5 Columns) */}
					<div className="md:col-span-5 space-y-4">
						<div className="flex items-center gap-2.5 text-neutral-100 font-extrabold text-xl tracking-wide select-none">
							<div className="flex size-8 items-center justify-center rounded-lg border border-teal-500/30 bg-teal-950/40 text-teal-400 shadow-[0_0_10px_rgba(20,184,166,0.2)]">
								<Cpu size={16} />
							</div>
							<span>
								Titonex<span className="text-teal-400">.</span>
							</span>
						</div>
						<p className="text-sm text-neutral-400 max-w-sm leading-relaxed text-justify">
							Architecting invisible infrastructure, robust APIs,
							and multi-tenant distributed systems optimized for
							the complete software development lifecycle.
						</p>

						{/* ১০০% এরর-ফ্রি কাস্টম SVG সোশ্যাল লিংকস */}
						<div className="flex items-center gap-5 pt-2">
							{/* GitHub */}
							<a
								href="https://github.com/riahmad-swe"
								target="_blank"
								rel="noopener noreferrer"
								className="flex size-8 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-950 text-neutral-400 transition-all duration-300 hover:border-teal-400/30 hover:bg-neutral-600/50 hover:text-teal-400 hover:shadow-[0_0_10px_rgba(20,184,166,0.15)]"
							>
								<svg
									className="size-4 fill-current"
									viewBox="0 0 24 24"
								>
									<path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.1.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.65.7 1.03 1.6 1.03 2.69 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" />
								</svg>
							</a>

							{/* LinkedIn */}
							<a
								href="https://linkedin.com/in/riahmad-swe"
								target="_blank"
								rel="noopener noreferrer"
								className="flex size-8 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-950 text-neutral-400 transition-all duration-300 hover:border-teal-400/30 hover:bg-neutral-900/50 hover:text-teal-400 hover:shadow-[0_0_10px_rgba(20,184,166,0.15)]"
							>
								<svg
									className="size-4 fill-current"
									viewBox="0 0 24 24"
								>
									<path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
								</svg>
							</a>

							{/* X (Twitter) */}
							<a
								href="https://x.com/r_i_ahmad"
								target="_blank"
								rel="noopener noreferrer"
								className="flex size-8 items-center justify-center rounded-lg border border-neutral-700 bg-neutral-950 text-neutral-400 transition-all duration-300 hover:border-teal-400/30 hover:bg-neutral-900/50 hover:text-teal-400 hover:shadow-[0_0_10px_rgba(20,184,166,0.15)]"
							>
								<svg
									className="size-3.5 fill-current"
									viewBox="0 0 24 24"
								>
									<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
								</svg>
							</a>
						</div>
					</div>

					{/* কলাম ২: কোর ইকোসিস্টেম/প্রজেক্টস (4 Columns) */}
					<div className="md:col-span-4 space-y-3">
						<h4 className="text-sm font-bold font-mono uppercase tracking-widest text-neutral-400">
							Ecosystem Blueprints
						</h4>
						<ul className="space-y-2 text-sm font-medium">
							{[
								{
									name: "ClinexAI - Healthcare Management",
									href: "#projects",
								},
								{
									name: "EduNex - Education Management",
									href: "#projects",
								},
								{
									name: "FrostVault - Multi-tenant ERP",
									href: "#projects",
								},
								{
									name: "Jino - Agentic AI Chatbot",
									href: "#projects",
								},
							].map((project, i) => (
								<li key={i}>
									<Link
										href={project.href}
										className="text-neutral-500 transition-colors duration-300 hover:text-teal-400 flex items-center gap-1.5 group"
									>
										<span className="size-1 rounded-full bg-neutral-800 transition-colors duration-300 group-hover:bg-teal-500" />
										{project.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					{/* কলাম ৩: নেভিগেশন (3 Columns) */}
					<div className="md:col-span-3 space-y-3">
						<h4 className="text-sm font-bold font-mono uppercase tracking-widest text-neutral-400">
							Navigation
						</h4>
						<ul className="space-y-2 text-sm font-medium">
							{[
								{ name: "Home Base", href: "#home" },
								{ name: "Expertise Stack", href: "#skills" },
								{ name: "System Evolution", href: "#about" },
								{ name: "Contact Terminal", href: "#contact" },
							].map((nav, i) => (
								<li key={i}>
									<Link
										href={nav.href}
										className="text-neutral-500 transition-colors duration-300 hover:text-teal-400"
									>
										{nav.name}
									</Link>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* ফুটার ফুটার বটম লাইন */}
				<div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 text-xs font-medium text-neutral-400 select-none">
					<div className="flex items-center gap-2">
						<Terminal
							size={14}
							className="text-teal-500/70"
						/>
						<span>
							&copy; {currentYear} Rakibul Islam. All rights
							reserved.
						</span>
					</div>

					{/* সিস্টেম লাইভ স্ট্যাটাস ইন্ডিকেটর */}
					<div className="inline-flex items-center gap-1.5 bg-neutral-950/80 border border-neutral-900 px-3 py-1.5 rounded-xl shadow-inner">
						<span className="relative flex h-2 w-2">
							<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
							<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500 shadow-[0_0_8px_#10b981]" />
						</span>
						<span className="font-mono text-[10px] tracking-wider uppercase text-neutral-400">
							Core Engine Operational
						</span>
					</div>
				</div>
			</div>
		</footer>
	);
}
