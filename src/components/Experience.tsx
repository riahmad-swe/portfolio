"use client";

import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
	{
		role: "Software Engineer",
		company: "Titonex",
		type: "Self-Employed",
		location: "On-Site | Rajshahi, BD",
		duration: "Feb 2026 - Present",
		desc: "Leading the technical architecture and development of the Titonex ecosystem, including ClinexAI and FrostVault. Orchestrating multi-tenant database schemas and high-performance full-stack architectures.",
		current: true,
	},
	{
		role: "Jr. Web Developer",
		company: "Vocabo Labs",
		type: "Internship",
		location: "Hybrid | Rajshahi, BD",
		duration: "Sep 2025 - Dec 2025",
		desc: "Contributed to EdTech solutions during a 3-month intensive internship. Focused on building responsive frontend components and integrating backend services within a collaborative hybrid environment.",
		current: false,
	},
];

export function Experience() {
	return (
		<section
			id="experience"
			className="px-4 py-12 md:py-20 lg:px-8"
		>
			<div className="mx-auto max-w-4xl">
				<div className="mb-12">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Professional <span className="text-teal-400">Experience</span>
					</h2>
				</div>

				<div className="relative space-y-12 before:absolute before:left-4.25 before:top-2 before:h-[calc(100%-20px)] before:w-0.5 before:bg-zinc-800">
					{experiences.map((exp, idx) => (
						<div
							key={idx}
							className="relative pl-12 group"
						>
							<div
								className={`absolute left-0 top-1.5 h-9 w-9 rounded-full border-4 border-zinc-950 flex items-center justify-center transition-all duration-300 ${
									exp.current
										? "bg-teal-500"
										: "bg-zinc-800 group-hover:bg-zinc-700"
								}`}
							>
								<Briefcase
									size={16}
									className={exp.current ? "text-zinc-950" : "text-zinc-400"}
								/>
							</div>

							<div className="flex flex-col gap-1">
								<div className="flex flex-wrap items-center justify-between gap-2">
									<h3 className="text-lg md:text-xl font-bold text-teal-500 transition-colors">
										{exp.role}
									</h3>
									<span className="flex items-center gap-2 text-sm font-medium text-zinc-300">
										<Calendar size={14} />
										{exp.duration}
									</span>
								</div>

								<div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[15px] font-semibold text-zinc-300">
									<span className="tracking-wider">{exp.company}</span>
									<span className="size-1.5 rounded-full bg-zinc-600 hidden sm:block" />
									<span className="text-zinc-300">{exp.type}</span>
									<span className="size-1.5 rounded-full bg-zinc-600 hidden sm:block" />
									<span className="flex items-center gap-1 text-zinc-3300 font-normal">
										<MapPin size={14} />
										{exp.location}
									</span>
								</div>

								<p className="mt-2 max-w-3xl text-zinc-300 leading-relaxed">
									{exp.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
