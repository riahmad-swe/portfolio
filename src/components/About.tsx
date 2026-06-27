"use client";

import { User, Target, Gamepad2, Brain, CheckCircle2 } from "lucide-react";

export function About() {
	const journey = [
		{
			year: "2021-2022",
			title: "The Spark & Logic Fundamentals",
			desc: "Dived into programming by mastering core logic structures, algorithms, and data handling. Discovered a strong preference for data systems, setting a firm foundation for a career focused entirely on the backend.",
		},
		{
			year: "2023",
			title: "Foundations of Data & Type Safety",
			desc: "Transitioned into structured database management, working heavily with complex relational data systems. Adopted strict type-safe development practices, integrating powerful tools to streamline database workflows and optimize query management.",
		},
		{
			year: "2024",
			title: "Going Full-Stack & Ecosystem Building",
			desc: "Expanded capabilities into high-performance full-stack web applications, utilizing modern frameworks and advanced styling paradigms. Began designing unified software ecosystems, taking full ownership of application architecture from data schemas to server-side rendering.",
		},
		{
			year: "2025",
			title: "Transitioning to High-Performance Backend",
			desc: "Shifted focus toward high-concurrency systems, deep-diving into low-latency backend languages and cloud-native containerization. Mastered container deployment strategies to ensure isolated, repeatable, and production-ready environments across complex applications.",
		},
		{
			year: "2026",
			title: "Scaling Up & System Architecture",
			desc: "Evolved into designing robust, distributed system architectures tailored tightly to the complete software development lifecycle (SDLC). Specializing in cloud automation, microservices management, and orchestrating highly scalable infrastructure across global cloud environments.",
		},
	];

	return (
		<section
			id="about"
			className="relative px-4 py-16 md:py-28 lg:px-8 text-justify overflow-hidden"
		>
			{/* ব্যাকগ্রাউন্ডে অ্যাম্বিয়েন্ট নিয়ন গ্লো লাইট */}
			<div className="absolute top-1/3 right-10 w-[400px] h-[400px] bg-teal-500/5 blur-[130px] rounded-full pointer-events-none" />
			<div className="absolute bottom-1/4 left-10 w-[350px] h-[350px] bg-cyan-500/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="mx-auto max-w-7xl relative z-10">
				{/* পূর্বের স্টাইলের সাথে ম্যাচ করা হেডিং এরিয়া */}
				<div className="flex flex-col items-start mb-14">
					<span className="group inline-flex items-center justify-center px-4 py-1.5 text-xs md:text-sm font-bold tracking-widest text-teal-400 uppercase rounded-full border border-teal-500/20 bg-teal-950/10 backdrop-blur-md shadow-[0_0_12px_rgba(20,184,166,0.1)] transition-all duration-300 hover:border-teal-400/60 hover:bg-teal-950/30 hover:text-teal-300 hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] cursor-default select-none mb-4">
						<span className="mr-2 size-2 rounded-full bg-teal-400 shadow-[0_0_8px_#14b8a6] transition-transform duration-500 group-hover:scale-125" />
						My Timeline
					</span>
					<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl select-none">
						<span className="text-neutral-100">System</span>{" "}
						<span className="text-teal-400 drop-shadow-[0_0_12px_rgba(20,184,166,0.3)]">
							Evolution
						</span>
					</h2>
					<p className="mt-4 max-w-3xl text-neutral-400 text-base md:text-lg text-justify leading-relaxed">
						My journey over the last 5+ years has been a continuous
						evolution from writing my first lines of code to
						architecting complex distributed systems. What began as
						a passion for development has matured into a deep
						expertise in high-performance backend
						engineering—shifting my focus from merely building
						features to designing robust, cloud-native
						infrastructures using Golang, Postgres, and AWS that are
						optimized for the entire software development lifecycle.
					</p>
				</div>

				<div className="grid gap-12 lg:grid-cols-12 items-start">
					{/* বাম পাশের ক্রনিকল টাইমলাইন স্টোরি (7 Columns) */}
					<div className="lg:col-span-7 space-y-10">
						<div className="flex items-center gap-3 text-teal-400 mb-2">
							<div className="p-2 rounded-xl bg-teal-500/10 border border-teal-500/20">
								<User size={20} />
							</div>
							<h3 className="text-xl font-bold tracking-wide text-teal-500">
								The Chronicle
							</h3>
						</div>

						{/* Interactive Timeline Track */}
						<div className="relative space-y-8 pl-2 before:absolute before:left-[19px] before:top-2 before:h-[95%] before:w-[2px] before:bg-linear-to-b before:from-teal-500/40 before:via-neutral-800 before:to-neutral-900">
							{journey.map((step, index) => (
								<div
									key={index}
									className="group relative pl-10 transition-all duration-300"
								>
									{/* Timeline Node Dot with Pulse Glow */}
									<div className="absolute left-[-2.5] top-[-4] z-1 flex size-8 items-center justify-center rounded-full border-2 border-neutral-950 bg-neutral-900 transition-all duration-300 group-hover:border-teal-400 group-hover:bg-teal-950 shadow-[0_0_10px_rgba(0,0,0,0.8)]">
										<div className="size-2.5 rounded-full bg-neutral-600 transition-all duration-300 group-hover:bg-teal-400 group-hover:shadow-[0_0_8px_#14b8a6]" />
									</div>

									<span className="inline-block text-sm font-bold uppercase tracking-widest text-neutral-300 transition-colors duration-300 group-hover:text-teal-400 mb-1">
										{step.year}
									</span>
									<h4 className="text-lg font-bold text-neutral-200 tracking-wide transition-colors duration-300 group-hover:text-white mb-2">
										{step.title}
									</h4>
									<p className="text-sm md:text-base text-neutral-400 leading-relaxed text-justify transition-colors duration-300 group-hover:text-neutral-300">
										{step.desc}
									</p>
								</div>
							))}
						</div>
					</div>

					{/* ডান পাশের ইনফো কার্ড প্যানেল উইথ টেল নিয়ন হোভার (5 Columns) */}
					<div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
						{/* কার্ড ১: Preferred Work */}
						<div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/25 p-6 backdrop-blur-md transition-all duration-300 hover:border-teal-500/40 hover:bg-neutral-950/50 hover:shadow-[0_10px_40px_rgba(20,184,166,0.2)]">
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-r from-teal-500/5 to-transparent rounded-2xl transition-opacity duration-500 pointer-events-none" />

							<div className="flex items-center gap-3 text-teal-400 mb-5">
								<div className="flex size-9 items-center justify-center rounded-xl border border-neutral-900 bg-neutral-950 text-neutral-400 shadow-inner transition-colors duration-300 group-hover:border-teal-500/30 group-hover:bg-neutral-900/50 group-hover:text-teal-400">
									<Target size={18} />
								</div>
								<h4 className="font-bold text-neutral-200 text-base md:text-lg tracking-wide transition-colors duration-300 group-hover:text-neutral-100">
									Preferred Work
								</h4>
							</div>
							<ul className="space-y-3.5 text-sm md:text-base text-neutral-400">
								{[
									"Multi-tenant ERP Systems (FrostVault)",
									"AI-Integrated Platforms (Clinex AI)",
									"Unified Academic Ecosystem & Institutional Management (Edunex)",
								].map((item, idx) => (
									<li
										key={idx}
										className="flex items-start gap-3 transition-colors duration-300 group-hover:text-neutral-300"
									>
										<CheckCircle2
											size={18}
											className="text-teal-500 shrink-0 mt-0.5 shadow-[0_0_10px_rgba(20,184,166,0.2)]"
										/>
										<span>{item}</span>
									</li>
								))}
							</ul>
						</div>

						{/* কার্ড ২: Personality */}
						<div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/25 p-6 backdrop-blur-md transition-all duration-300 hover:border-teal-500/40 hover:bg-neutral-950/50 hover:shadow-[0_10px_40px_rgba(20,184,166,0.2)]">
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-r from-teal-500/5 to-transparent rounded-2xl transition-opacity duration-500 pointer-events-none" />

							<div className="flex items-center gap-3 text-teal-400 mb-4">
								<div className="flex size-9 items-center justify-center rounded-xl border border-neutral-900 bg-neutral-950 text-neutral-400 shadow-inner transition-colors duration-300 group-hover:border-teal-500/30 group-hover:bg-neutral-900/50 group-hover:text-teal-400">
									<Brain size={18} />
								</div>
								<h4 className="font-bold text-neutral-200 text-base md:text-lg tracking-wide transition-colors duration-300 group-hover:text-neutral-100">
									Personality
								</h4>
							</div>
							<p className="text-sm md:text-base text-neutral-400 leading-relaxed text-justify transition-colors duration-300 group-hover:text-neutral-300">
								I operate with a System Architect mindset. I
								enjoy breaking down complex backend engineering
								concepts—like microservices decoupling,
								asynchronous task queues, and data
								consistency—into clean, scalable code
								blueprints. I value highly optimized database
								execution, cloud-native automation, and
								decoupled, resilient software lifecycles.
							</p>
						</div>

						{/* কার্ড ৩: Hobbies */}
						<div className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/25 p-6 backdrop-blur-md transition-all duration-300 hover:border-teal-500/40 hover:bg-neutral-950/50 hover:shadow-[0_10px_40px_rgba(20,184,166,0.2)]">
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-r from-teal-500/5 to-transparent rounded-2xl transition-opacity duration-500 pointer-events-none" />

							<div className="flex items-center gap-3 text-teal-400 mb-4">
								<div className="flex size-9 items-center justify-center rounded-xl border border-neutral-900 bg-neutral-950 text-neutral-400 shadow-inner transition-colors duration-300 group-hover:border-teal-500/30 group-hover:bg-neutral-900/50 group-hover:text-teal-400">
									<Gamepad2 size={18} />
								</div>
								<h4 className="font-bold text-neutral-200 text-base md:text-lg tracking-wide transition-colors duration-300 group-hover:text-neutral-100">
									Hobbies
								</h4>
							</div>
							<div className="flex flex-wrap gap-5">
								{[
									"Knowledge Sharing",
									"Research Science",
									"Travelling",
								].map((h) => (
									<span
										key={h}
										className="rounded-xl bg-neutral-950/80 px-3.5 py-2 text-xs md:text-sm font-medium text-neutral-300 border border-neutral-900 transition-all duration-300 group-hover:border-teal-500/30 group-hover:bg-neutral-900/40 group-hover:text-neutral-200"
									>
										{h}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
