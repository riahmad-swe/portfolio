"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, FolderCode } from "lucide-react";
import { projects } from "@/data/projects";

export function Projects() {
	return (
		<section
			id="projects"
			className="relative px-4 py-16 md:py-28 lg:px-8 overflow-hidden"
		>
			{/* ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্ট নিয়ন আভা */}
			<div className="absolute top-1/3 left-10 w-[500px] h-[500px] bg-cyan-500/5 blur-[140px] rounded-full pointer-events-none" />
			<div className="absolute bottom-1/3 right-10 w-[450px] h-[450px] bg-teal-500/5 blur-[130px] rounded-full pointer-events-none" />

			<div className="mx-auto max-w-7xl relative z-10">
				{/* পূর্বের স্টাইলের সাথে ম্যাচ করা হেডিং এরিয়া */}
				<div className="flex flex-col items-start mb-16">
					<span className="group inline-flex items-center justify-center px-4 py-1.5 text-xs md:text-sm font-bold tracking-widest text-teal-400 uppercase rounded-full border border-teal-500/20 bg-teal-950/10 backdrop-blur-md shadow-[0_0_12px_rgba(20,184,166,0.1)] transition-all duration-300 hover:border-teal-400/60 hover:bg-teal-950/30 hover:text-teal-300 hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] cursor-default select-none mb-4">
						<span className="mr-2 size-2 rounded-full bg-teal-400 shadow-[0_0_8px_#14b8a6] transition-transform duration-500 group-hover:scale-125" />
						My Creations
					</span>
					<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl select-none">
						<span className="text-neutral-100">Latest</span>{" "}
						<span className="text-teal-400 drop-shadow-[0_0_12px_rgba(20,184,166,0.3)]">
							Projects
						</span>
					</h2>
					<p className="mt-4 max-w-2xl text-neutral-400 text-base md:text-lg leading-relaxed text-justify">
						A portion of my recent full-stack applications, from
						cold storage ERPs to environmental funding platforms.
					</p>
				</div>

				{/* প্রজেক্টস কন্টেইনার লিস্ট */}
				<div className="flex flex-col gap-10 md:gap-16">
					{projects.map((project, index) => {
						// প্রতিটি বেজোড় (odd) কার্ডের লেআউট ফ্লিপ করার লজিক (Zig-Zag Effect)
						const isEven = index % 2 === 0;

						return (
							<div
								key={project.id}
								className="group relative overflow-hidden rounded-[24px] border border-zinc-800 bg-zinc-900/25 backdrop-blur-md transition-all duration-500 hover:border-teal-500/40 hover:bg-neutral-950/40 hover:shadow-[0_20px_50px_rgba(20,184,166,0.15)]"
							>
								{/* হোভার ব্যাকগ্রাউন্ড লাইট রিফ্লেকশন */}
								<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-linear-to-br from-teal-500/5 via-transparent to-cyan-500/5 rounded-[24px] transition-opacity duration-700 pointer-events-none" />

								<div
									className={`flex flex-col ${isEven ? "lg:flex-row" : "lg:flex-row-reverse"} h-full`}
								>
									{/* ইমেজ এরিয়া উইথ ডাইনামিক হোভার জুম */}
									<div className="relative h-64 sm:h-80 lg:h-auto lg:w-1/2 w-full overflow-hidden">
										{/* ইমেজ ওভারলে শ্যাডো মাস্ক */}
										<div className="absolute inset-0 bg-linear-to-t from-neutral-950/60 via-transparent to-transparent z-10 pointer-events-none" />
										<Image
											src={project.image}
											alt={project.name}
											fill
											className="object-cover transition-transform duration-700 cubic-bezier(0.4, 0, 0.2, 1) group-hover:scale-105 group-hover:rotate-[0.5deg]"
											sizes="(max-w-1024px) 100vw, 50vw"
										/>
									</div>

									{/* কন্টেন্ট এরিয়া */}
									<div className="flex flex-col justify-center p-8 sm:p-10 lg:w-1/2 w-full relative z-20">
										{/* টপ ক্যাটাগরি আইকন ইন্ডিকেটর */}
										<div className="flex items-center gap-2 text-neutral-500 mb-3 text-xs font-mono uppercase tracking-widest transition-colors duration-300 group-hover:text-teal-500/80">
											<FolderCode size={14} />
											<span>Production Ready</span>
										</div>

										<h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-100 tracking-wide transition-colors duration-300 group-hover:text-teal-400">
											{project.name}
										</h3>

										<p className="mt-3.5 text-neutral-400 text-sm md:text-base leading-relaxed text-justify line-clamp-3 transition-colors duration-300 group-hover:text-neutral-300">
											{project.slogan}
										</p>

										{/* মডার্ন টেকনোলজি ব্যাজেস */}
										<div className="mt-6 flex flex-wrap gap-2">
											{project.tech
												.slice(0, 4)
												.map((t) => (
													<span
														key={t}
														className="rounded-lg bg-neutral-900/80 border border-neutral-800/80 px-3 py-1.5 text-[10px] md:text-xs font-bold font-mono tracking-wider text-neutral-400 uppercase transition-all duration-300 group-hover:border-teal-500/20 group-hover:bg-neutral-900/40 group-hover:text-neutral-300"
													>
														{t}
													</span>
												))}
										</div>

										{/* প্রফেশনাল অ্যাকশন লিংক */}
										<div className="mt-8 flex">
											<Link
												href={`/projects/${project.id}`}
												target="_blank"
												className="inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-neutral-900 bg-neutral-950/80 text-sm font-semibold text-neutral-300 transition-all duration-300 hover:border-teal-500/40 hover:bg-neutral-900/60 hover:text-teal-400 hover:shadow-[0_0_15px_rgba(20,184,166,0.15)] group/link"
											>
												Know More
												<ArrowUpRight
													size={16}
													className="transition-transform duration-300 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5"
												/>
											</Link>
										</div>
									</div>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
