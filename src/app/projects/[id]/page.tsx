import { projects } from "@/data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { ExternalLink, FolderGit2, ChevronLeft } from "lucide-react";
import Link from "next/link";

export default async function ProjectPage({ params }: { params: Promise<{ id: string }> }) {
	const { id } = await params;

	const project = projects.find(
		(project: {
			id: string;
			name: string;
			image: string;
			slogan: string;
			description: string;
			features: string[];
			challenges: string;
			improvements: string[];
			tech: string[];
			live: string;
			github: string | null;
		}) => project.id === id,
	);

	if (!project) notFound();

	return (
		<div className="min-h-screen py-12 text-zinc-300">
			<div className="mx-auto max-w-5xl px-4 lg:px-8">
				<Link
					href="/#projects"
					className="inline-flex items-center gap-2 text-zinc-400 hover:text-teal-400 mb-8 transition-colors"
				>
					<ChevronLeft size={16} /> Back to projects
				</Link>

				<div className="grid gap-6 lg:grid-cols-2">
					<div className="relative aspect-2/1 overflow-hidden rounded-3xl border border-zinc-800">
						<Image
							src={project.image}
							alt={project.name}
							fill
							className="object-cover"
						/>
					</div>
					<div className="flex flex-col justify-center">
						<h1 className="text-4xl font-bold text-teal-500">{project.name}</h1>
						<p className="mt-4 text-xl text-zinc-400 italic">
							&quot;{project.slogan}&quot;
						</p>

						<div className="mt-6 flex flex-wrap gap-3">
							<a
								href={project.live}
								target="_blank"
								className="flex items-center gap-2 rounded-xl bg-teal-500 px-5 py-2.5 font-bold text-zinc-950 hover:bg-teal-400"
							>
								<ExternalLink size={18} /> Live Demo
							</a>
							{project.github && (
								<a
									href={project.github}
									target="_blank"
									className="flex items-center gap-2 rounded-xl border border-zinc-800 bg-zinc-900 px-5 py-2.5 font-bold text-zinc-100 hover:bg-zinc-800"
								>
									<FolderGit2 size={18} /> GitHub
								</a>
							)}
						</div>
					</div>
				</div>

				<div className="mt-12 grid gap-12 lg:grid-cols-3">
					<div className="lg:col-span-2 space-y-8">
						<section>
							<h2 className="text-xl font-bold mb-2 text-teal-500">
								About the Project
							</h2>
							<p className="leading-relaxed text-zinc-300 text-lg">
								{project.description}
							</p>
						</section>

						<section>
							<h2 className="text-xl font-bold mb-2 text-teal-500">
								Key Features
							</h2>
							<ul className="grid gap-3 sm:grid-cols-2">
								{project.features.map((feature: string) => (
									<li
										key={feature}
										className="flex items-center gap-2 text-zinc-300"
									>
										<span className="size-2 rounded-full bg-teal-500" />{" "}
										{feature}
									</li>
								))}
							</ul>
						</section>

						<div className="grid gap-6 sm:grid-cols-2">
							<section className="rounded-3xl border border-zinc-800 bg-zinc-900/25 p-6">
								<h2 className="text-lg font-bold mb-2 text-teal-500">
									Challenges Faced
								</h2>
								<p className="text-sm leading-relaxed text-zinc-300">
									{project.challenges}
								</p>
							</section>
							<section className="rounded-3xl border border-zinc-800 bg-zinc-900/25 p-6">
								<h2 className="text-lg font-bold mb-2 text-teal-500">
									Future Roadmap
								</h2>
								<p className="text-sm leading-relaxed text-zinc-300">
									{project.improvements.join(". ")}.
								</p>
							</section>
						</div>
					</div>

					<div className="space-y-8">
						<div className="rounded-3xl border border-zinc-800 bg-zinc-900/25 p-6">
							<h2 className="text-lg font-bold mb-4 tracking-widest text-teal-500">
								Tech Stack
							</h2>
							<div className="flex flex-wrap gap-x-4 gap-y-2">
								{project.tech.map((tech: string) => (
									<span
										key={tech}
										className="text-sm font-medium text-zinc-200"
									>
										{tech}
									</span>
								))}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
