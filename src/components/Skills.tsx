"use client";

import { useState } from "react";
import { Layout, Server, Database, Cloud, Users, Bot, Globe } from "lucide-react";

const skillCategories = [
	{
		id: "frontend",
		label: "Frontend",
		icon: <Layout size={18} />,
		skills: [
			{ name: "TypeScript", sub: "Frontend Type Safety", icon: "TS" },
			{ name: "Tailwind CSS", sub: "Modern Design Systems", icon: "🎨" },
			{ name: "Next.js", sub: "Rendering, Caching", icon: "🌐" },
			{ name: "React.js", sub: "Hooks, Context API", icon: "⚛️" },
			{ name: "React Native", sub: "Native / Expo", icon: "📱" },
			{ name: "ShadCN UI", sub: "Component Architecture", icon: "🧩" },
			{ name: "Zod", sub: "Schema Validation", icon: "⚡" },
			{ name: "TanStack Query", sub: "Server State Management", icon: "🏝️" },
			{ name: "Recharts", sub: "Data Visualization", icon: "📊" },
		],
	},
	{
		id: "backend",
		label: "Backend",
		icon: <Server size={18} />,
		skills: [
			{ name: "TypeScript", sub: "Backend Type Safety", icon: "TS" },
			{ name: "Node.js", sub: "Runtime", icon: "🟢" },
			{ name: "Express.js", sub: "Backend Framework", icon: "EX" },
			{ name: "Golang", sub: "High-Perf Concurrency", icon: "GO" },
			{ name: "Python", sub: "Scripting, Automation", icon: "🐍" },
			{ name: "C / C++", sub: "Algorithmic Core", icon: "👾" },
			{ name: "Better Auth", sub: "Advanced Security", icon: "🛡️" },
			{ name: "JWT & OTP", sub: "Secure Authentication", icon: "🔑" },
			{ name: "SSLCommerz", sub: "Payment Integration", icon: "💳" },
			{ name: "Firebase Auth", sub: "Cloud Identity", icon: "🔥" },
		],
	},
	{
		id: "database",
		label: "Database",
		icon: <Database size={18} />,
		skills: [
			{ name: "PostgreSQL", sub: "Relational DBMS", icon: "🐘" },
			{ name: "Prisma", sub: "Type-safe ORM", icon: "💎" },
			{ name: "MySQL", sub: "Relational DBMS", icon: "🐬" },
			{ name: "MongoDB", sub: "NoSQL Architecture", icon: "🍃" },
			{ name: "Supabase", sub: "BaaS, Realtime", icon: "⚡" },
			{ name: "Convex / Neon", sub: "Edge Databases", icon: "☁️" },
		],
	},
	{
		id: "ai",
		label: "AI Systems",
		icon: <Bot size={18} />,
		skills: [
			{ name: "RAG", sub: "Knowledge Retrieval", icon: "🧠" },
			{ name: "MCP Servers", sub: "Context Engineering", icon: "🔌" },
			{ name: "ElevenLabs", sub: "Audio Synthesis", icon: "🎙️" },
			{ name: "Cognitive Logic", sub: "LLM Agentic Flow", icon: "🤖" },
		],
	},
	{
		id: "devops",
		label: "DevOps",
		icon: <Cloud size={18} />,
		skills: [
			{ name: "Docker", sub: "Containerization", icon: "🐳" },
			{ name: "Nginx", sub: "Reverse Proxy, Load Balancing", icon: "⚙️" },
			{ name: "CI/CD", sub: "GitHub Actions", icon: "🚀" },
			{ name: "AWS", sub: "Cloud Infrastructure", icon: "☁️" },
			{ name: "Vercel / Netlify", sub: "Web Hosting", icon: "🔺" },
			{ name: "Render", sub: "Backend Hosting", icon: "☁️" },
		],
	},
	{
		id: "others",
		label: "Others",
		icon: <Globe size={18} />,
		skills: [
			{ name: "DSA", sub: "Algorithmic Logic", icon: "📊" },
			{ name: "Git / GitHub", sub: "Version Control", icon: "🐙" },
			{ name: "Jest", sub: "Unit & Integration Testing", icon: "🃏" },
		],
	},
	{
		id: "soft",
		label: "Professional",
		icon: <Users size={18} />,
		skills: [
			{ name: "Continuous Leaner", sub: "Learning with Curiosity", icon: "🎓" },
			{ name: "CTO / Leadership", sub: "Titonex Company", icon: "📈" },
			{ name: "Problem Solving", sub: "CForces, HRank, LCode", icon: "🏆" },
			{ name: "Team Collaboration", sub: "Vocabo Labs Exp", icon: "🤝" },
		],
	},
];

export function Skills() {
	const [activeTab, setActiveTab] = useState("frontend");

	return (
		<section
			id="skills"
			className="px-4 py-12 md:py-20 lg:px-8"
		>
			<div className="mx-auto max-w-7xl">
				<h2 className="mb-8 text-3xl font-bold tracking-tight text-teal-400 sm:text-4xl">
					Skills
				</h2>

				<div className="mb-10 flex flex-wrap gap-2 border-b border-zinc-800/75">
					{skillCategories.map((category) => (
						<button
							key={category.id}
							onClick={() => setActiveTab(category.id)}
							className={`relative flex items-center gap-2 px-4 py-3 text-sm font-medium transition-all duration-300 outline-none ${activeTab === category.id ? "text-teal-400" : "text-zinc-300 hover:text-teal-200"}`}
						>
							{category.icon}
							{category.label}
							{activeTab === category.id && (
								<div className="absolute bottom-0 left-0 h-0.5 w-full bg-teal-500 shadow-[0_0_8px_rgba(20,184,166,0.6)]" />
							)}
						</button>
					))}
				</div>

				<div>
					{skillCategories.map((category) => (
						<div
							key={category.id}
							className={`${activeTab === category.id ? "grid" : "hidden"} grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 animate-in fade-in slide-in-from-bottom-2 duration-500`}
						>
							{category.skills.map((skill) => (
								<div
									key={skill.name}
									className="group flex flex-col items-center justify-center rounded-[20px] border border-zinc-800/75 bg-zinc-900/25 p-6 text-center transition-all hover:border-teal-900 hover:bg-zinc-900/50"
								>
									<div className="mb-3 flex size-12 items-center justify-center rounded-xl bg-teal-500/10 text-2xl group-hover:scale-110 transition-transform duration-300 group-hover:bg-teal-500/20">
										{skill.icon}
									</div>
									<h4 className="text-lg md:text-xl font-semibold text-zinc-200">
										{skill.name}
									</h4>
									<p className="max-md:text-sm mt-1 text-zinc-400">
										{skill.sub}
									</p>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
