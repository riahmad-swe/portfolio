import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";

export function Projects() {
	return (
		<section
			id="projects"
			className="px-4 py-12 md:py-20 lg:px-8"
		>
			<div className="mx-auto max-w-7xl">
				<div className="mb-12">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Latest <span className="text-teal-400">Projects</span>
					</h2>
					<p className="mt-2 text-zinc-300 max-w-xl text-lg">
						A portion of my recent full-stack applications, from cold storage ERPs
						to environmental funding platforms.
					</p>
				</div>

				<div className="flex flex-col gap-4">
					{projects.map((project) => (
						<div
							key={project.id}
							className="group relative overflow-hidden rounded-3xl border border-zinc-800/75 bg-zinc-900/25 transition-all hover:border-teal-900"
						>
							<div className="flex flex-col lg:flex-row h-full">
								<div className="relative h-64 overflow-hidden lg:w-1/2 w-full">
									<Image
										src={project.image}
										alt={project.name}
										fill
										className="object-cover transition-transform duration-500 group-hover:scale-105"
									/>
								</div>

								<div className="flex flex-col justify-center p-8">
									<h3 className="text-2xl font-bold text-teal-500">
										{project.name}
									</h3>
									<p className="mt-3 text-zinc-300 line-clamp-2 text-lg">
										{project.slogan}
									</p>

									<div className="mt-4 flex flex-wrap gap-3">
										{project.tech.slice(0, 3).map((t) => (
											<span
												key={t}
												className="text-sm uppercase tracking-widest font-semibold"
											>
												{t}
											</span>
										))}
									</div>

									<Link
										href={`/projects/${project.id}`}
										target="_blank"
										className="mt-6 inline-flex items-center gap-2 font-semibold text-zinc-100 transition-all hover:text-teal-400"
									>
										Know More <ArrowUpRight size={16} />
									</Link>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
