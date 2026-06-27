"use client";

import { Briefcase, Calendar, MapPin, Building2 } from "lucide-react";

const experiences = [
	{
		role: "Software Engineer",
		company: "Titonex",
		type: "Self-Employed",
		location: "On-Site | Rajshahi, BD",
		duration: "Sep 2025 - Present",
		desc: "Leading the technical architecture and development of the Titonex ecosystem, including Sustho, ClinexAI, Edunex and FrostVault. Orchestrating multi-tenant database schemas and high-performance full-stack architectures.",
		current: true,
	},
	{
		role: "Founder & CEO",
		company: "Water Technology",
		type: "Full-time",
		location: "Onsite | Rajshahi, BD",
		duration: "Jan 2017 - Present",
		desc: "Water Technology provides engineered water purification and treatment solutions, including RO plants, softener plants, DM plants, iron removal systems, pool filtration, and wastewater treatment. Serving residential, commercial, industrial, and healthcare sectors with reliable, customized solutions.",
		current: false,
	},
];

export function Experience() {
	return (
		<section
			id="experience"
			className="relative px-4 py-16 md:py-28 lg:px-8 overflow-hidden"
		>
			{/* ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্ট আভা */}
			<div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-112.5 h-125 bg-teal-500/5 blur-[130px] rounded-full pointer-events-none" />

			<div className="mx-auto max-w-5xl relative z-10">
				{/* পোর্টফোলিও স্ট্যান্ডার্ড হেডিং এরিয়া */}
				<div className="flex flex-col items-start mb-16">
					<span className="group inline-flex items-center justify-center px-4 py-1.5 text-sm md:text-sm font-bold tracking-widest text-teal-500 uppercase rounded-full border border-teal-500/20 bg-teal-950/10 backdrop-blur-md shadow-[0_0_12px_rgba(20,184,166,0.1)] transition-all duration-300 hover:border-teal-500/60 hover:bg-teal-950/30 hover:text-teal-500 hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] cursor-default select-none mb-4">
						<span className="mr-2 size-2 rounded-full bg-teal-500 shadow-[0_0_8px_#14b8a6] transition-transform duration-500 group-hover:scale-125" />
						My Track Record
					</span>
					<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl select-none">
						<span className="text-neutral-100">Professional</span>{" "}
						<span className="text-teal-400 drop-shadow-[0_0_12px_rgba(20,184,166,0.3)]">
							Experience
						</span>
					</h2>
				</div>

				{/* ডাইনামিক ভার্টিকাল টাইমলাইন ট্র্যাক */}
				<div className="relative space-y-10 pl-2 before:absolute before:left-7 before:top-8 before:h-[90%] before:w-0.5 before:bg-linear-to-b before:from-teal-500/50 before:via-neutral-700/80 before:to-neutral-900">
					{experiences.map((exp, idx) => (
						<div
							key={idx}
							className="group relative pl-15 transition-all duration-300"
						>
							{/* টাইমলাইন আইকন মেমব্রেন উইথ গ্লো */}
							<div
								className={`absolute left-0 top-7 z-20 flex size-11 items-center justify-center rounded-xl border transition-all duration-500 shadow-[0_0_15px_rgba(0,0,0,0.6)] ${
									exp.current
										? "border-teal-500/40 bg-teal-950 text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.2)] group-hover:border-teal-400 group-hover:shadow-[0_0_22px_rgba(20,184,166,0.45)]"
										: "border-neutral-700 bg-neutral-900 text-neutral-300 group-hover:border-neutral-300 group-hover:text-neutral-300"
								}`}
							>
								<Briefcase
									size={16}
									className="transition-transform duration-300 group-hover:scale-110"
								/>
							</div>

							{/* মেইন গ্লাস মরফিজম কন্টেন্ট কার্ড */}
							<div className="relative rounded-2xl border border-zinc-800 bg-zinc-900/25 p-6 md:p-8 backdrop-blur-md transition-all duration-300 hover:border-teal-500/30 hover:bg-neutral-950/40 hover:shadow-[0_15px_40px_rgba(20,184,166,0.12)]">
								{/* হোভার রেডিয়াল লাইট ইফেক্ট */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-r from-teal-500/5 to-transparent rounded-2xl transition-opacity duration-500 pointer-events-none" />

								<div className="flex flex-col gap-3 relative z-10">
									{/* প্রথম লাইন: রোল এবং ডিউরেশন */}
									<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 border-b border-neutral-900/60 pb-3">
										<h3 className="text-xl md:text-2xl font-extrabold tracking-wide text-neutral-100 transition-colors duration-300 group-hover:text-teal-400">
											{exp.role}
										</h3>

										<span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold font-mono text-neutral-300 bg-neutral-900/80 border border-neutral-800 px-3 py-1 rounded-lg max-w-fit shadow-inner">
											<Calendar
												size={13}
												className="text-teal-500/80"
											/>
											{exp.duration}
										</span>
									</div>

									{/* দ্বিতীয় লাইন: কোম্পানী, টাইপ এবং লোকেশন মেটাডেটা */}
									<div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-sm md:text-sm font-bold text-neutral-400">
										<span className="flex items-center gap-1.5 text-neutral-200 bg-neutral-900/40 px-2.5 py-1 rounded-md border border-neutral-900">
											<Building2
												size={13}
												className="text-neutral-400"
											/>
											{exp.company}
										</span>

										<span className="size-1 rounded-full bg-neutral-300 hidden sm:block" />

										<span className="px-2 py-0.5 rounded-md bg-neutral-900/30 text-neutral-300 font-medium">
											{exp.type}
										</span>

										<span className="size-1 rounded-full bg-neutral-300 hidden sm:block" />

										<span className="flex items-center gap-1 font-normal text-neutral-300 group-hover:text-neutral-200 transition-colors duration-300">
											<MapPin
												size={13}
												className="text-neutral-300 group-hover:text-teal-500/70"
											/>
											{exp.location}
										</span>

										{/* বর্তমান এক্টিভ রোলের জন্য ব্লিঙ্কিং লাইভ ইন্ডিকেটর */}
										{exp.current && (
											<span className="ml-auto inline-flex items-center gap-1.5 text-[12px] font-bold font-mono tracking-widest uppercase bg-teal-500/10 text-teal-500 border border-teal-500/30 px-2 py-0.5 rounded-md animate-pulse">
												<span className="size-1.5 rounded-full bg-teal-500 shadow-[0_0_6px_#14b8a6]" />
												Live Status
											</span>
										)}
									</div>

									{/* তৃতীয় লাইন: কাজের ডেসক্রিপশন */}
									<p className="mt-2 text-sm md:text-base text-neutral-300 leading-relaxed text-justify transition-colors duration-300 group-hover:text-neutral-300">
										{exp.desc}
									</p>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
