"use client";

import { User, Target, Gamepad2, Brain, CheckCircle2 } from "lucide-react";

export function About() {
	const journey = [
		{
			year: "2023",
			title: "The Spark",
			desc: "Started at 11. Explored Scratch, Python Turtle, and the basics of the web.",
		},
		{
			year: "2024",
			title: "Foundations",
			desc: "Mastered C, C++, and DSA while tackling Problem Solving on CodeForces, HackerRank and LeetCode.",
		},
		{
			year: "2025",
			title: "Going Full-Stack",
			desc: "Learned the MERN stack, React Native, and interned at Vocabo Labs.",
		},
		{
			year: "2026",
			title: "Scaling Up",
			desc: "Mastering TS, Next.js, Postgres, and moving into DevOps/Golang.",
		},
	];

	return (
		<section
			id="about"
			className="px-4 py-12 md:py-20 lg:px-8"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mb-12">
					<h2 className="text-3xl font-bold tracking-tight text-teal-400 sm:text-4xl">
						Evolution
					</h2>
					<p className="mt-2 max-w-2xl text-zinc-300 text-lg">
						A journey from curious 11-year-old explorer to a Software Engineer
						building multi-tenant ecosystems.
					</p>
				</div>

				<div className="grid gap-12 lg:grid-cols-12">
					<div className="lg:col-span-7 space-y-8">
						<div>
							<div className="flex items-center gap-3 text-teal-400 mb-2">
								<User size={24} />
								<h3 className="text-xl font-bold text-zinc-100">The Story</h3>
							</div>
							<p className="text-zinc-300 leading-relaxed">
								My path began in 2023, sparked by my father&apos;s encouragement
								to explore the technology realm. What started as &quot;having
								fun&quot; with Scratch Jr and Python Turtle quickly evolved into
								a serious obsession with software architecture. Today, I&apos;m
								the CTO of Titonex, managing a suite of AI and management
								services.
							</p>
						</div>

						<div className="relative space-y-8 before:absolute before:left-2.75 before:h-full before:w-0.5 before:bg-zinc-800">
							{journey.map((step, index) => (
								<div
									key={index}
									className="relative pl-10"
								>
									<div className="absolute left-0 top-1.5 h-6 w-6 rounded-full border-4 border-zinc-950 bg-teal-500" />
									<span className="text-xs font-bold uppercase tracking-widest text-teal-500">
										{step.year}
									</span>
									<h4 className="text-lg font-semibold text-zinc-100">
										{step.title}
									</h4>
									<p className="text-sm text-zinc-300">{step.desc}</p>
								</div>
							))}
						</div>
					</div>

					<div className="lg:col-span-5 space-y-6">
						<div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
							<div className="flex items-center gap-3 text-teal-400 mb-4">
								<Target size={20} />
								<h4 className="font-semibold text-zinc-100">Preferred Work</h4>
							</div>
							<ul className="space-y-3 text-sm text-zinc-300">
								<li className="flex gap-2">
									<CheckCircle2
										size={16}
										className="text-teal-500 shrink-0"
									/>{" "}
									Multi-tenant ERP Systems (FrostVault)
								</li>
								<li className="flex gap-2">
									<CheckCircle2
										size={16}
										className="text-teal-500 shrink-0"
									/>{" "}
									AI-Integrated Platforms (Clinex AI)
								</li>
								<li className="flex gap-2">
									<CheckCircle2
										size={16}
										className="text-teal-500 shrink-0"
									/>{" "}
									Scalable FinTech & Payment Gateways
								</li>
							</ul>
						</div>

						<div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
							<div className="flex items-center gap-3 text-teal-400 mb-4">
								<Brain size={20} />
								<h4 className="font-semibold text-zinc-100">Personality</h4>
							</div>
							<p className="text-sm text-zinc-300">
								I operate with an **Expert/Trainer** mindset. I enjoy breaking
								down complex concepts—like static vs. dynamic rendering—into
								digestible video lessons. I value modern, uncluttered aesthetics
								and high-performance code.
							</p>
						</div>

						<div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 p-6">
							<div className="flex items-center gap-3 text-teal-400 mb-4">
								<Gamepad2 size={20} />
								<h4 className="font-semibold text-zinc-100">Hobbies</h4>
							</div>
							<div className="flex flex-wrap gap-2">
								{["Knowledge Sharing", "Playing Soccer", "Travelling"].map(
									(h) => (
										<span
											key={h}
											className="rounded-lg bg-zinc-800 px-3 py-1 text-xs text-zinc-300 border border-zinc-700"
										>
											{h}
										</span>
									),
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
