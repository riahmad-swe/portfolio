"use client";

import { useState } from "react";
import {
	Layout,
	Server,
	Database,
	Cloud,
	Users,
	Bot,
	Globe,
} from "lucide-react";

const skillCategories = [
	{
		id: "frontend",
		label: "Frontend",
		icon: <Layout size={16} />,
		skills: [
			{ name: "TypeScript", sub: "Frontend Type Safety", icon: "TS" },
			{ name: "Tailwind CSS", sub: "Modern Design Systems", icon: "🎨" },
			{ name: "Next.js", sub: "Rendering, Caching", icon: "🌐" },
			{ name: "React.js", sub: "Hooks, Context API", icon: "⚛️" },
			{ name: "React Native", sub: "Native / Expo", icon: "📱" },
			{ name: "ShadCN UI", sub: "Component Architecture", icon: "🧩" },
			{ name: "Zod", sub: "Schema Validation", icon: "⚡" },
			{
				name: "TanStack Query",
				sub: "Server State Management",
				icon: "🏝️",
			},
			{ name: "Recharts", sub: "Data Visualization", icon: "📊" },
		],
	},
	{
		id: "backend",
		label: "Backend",
		icon: <Server size={16} />,
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
		icon: <Database size={16} />,
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
		icon: <Bot size={16} />,
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
		icon: <Cloud size={16} />,
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
		icon: <Globe size={16} />,
		skills: [
			{ name: "DSA", sub: "Algorithmic Logic", icon: "📊" },
			{ name: "Git / GitHub", sub: "Version Control", icon: "🐙" },
			{ name: "Jest", sub: "Unit & Integration Testing", icon: "🃏" },
		],
	},
	{
		id: "soft",
		label: "Professional",
		icon: <Users size={16} />,
		skills: [
			{
				name: "Continuous Leaner",
				sub: "Learning with Curiosity",
				icon: "🎓",
			},
			{ name: "CEO / Leadership", sub: "Titonex Company", icon: "📈" },
			{
				name: "Problem Solving",
				sub: "System Architecting, Live Troubleshooting",
				icon: "🏆",
			},
			{
				name: "Team Collaboration",
				sub: "Water Technology Exp",
				icon: "🤝",
			},
		],
	},
];

export function Skills() {
	const [activeTab, setActiveTab] = useState("frontend");

	return (
		<section
			id="skills"
			className="relative px-4 py-16 md:py-28 lg:px-8 overflow-hidden"
		>
			{/* ব্যাকগ্রাউন্ডে সূক্ষ্ম নিওন গ্লো আভা */}
			<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-125 h-125 bg-teal-500/5 blur-[120px] rounded-full pointer-events-none" />

			<div className="mx-auto max-w-7xl relative z-10">
				<div className="flex flex-col items-start mb-14">
					{/* হোভার ইফেক্ট সহ হাইপার-ইন্টারেক্টিভ নিয়ন ব্যাজ */}
					<span className="group inline-flex items-center justify-center px-4 py-1.5 text-xs md:text-sm font-bold tracking-widest text-teal-500 uppercase rounded-full border border-cyan-500/20 bg-cyan-950/10 backdrop-blur-md shadow-[0_0_12px_rgba(6,182,212,0.1)] transition-all duration-300 hover:border-cyan-400/60 hover:bg-cyan-950/30 hover:text-cyan-300 hover:shadow-[0_0_25px_rgba(6,182,212,0.4),inset_0_1px_2px_rgba(6,182,212,0.4)] cursor-default select-none mb-4">
						{/* হোভার করলে এই ডটটি হালকা রিভল্ভ বা স্কেল হবে */}
						<span className="mr-2 size-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#06b6d4] transition-transform duration-500 group-hover:scale-125 group-hover:bg-cyan-300" />
						My Capabilities
					</span>

					<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl select-none">
						<span className="text-neutral-100">Expertise</span>{" "}
						<span className="text-teal-500 drop-shadow-[0_0_12px_rgba(34,211,238,0.3)]">
							& Stack
						</span>
					</h2>
				</div>

				{/* মডার্ন ক্যাপসুল ডাইনামিক ট্যাব ন্যাভিগেশন */}
				<div className="mb-14 flex flex-wrap gap-2.5 p-2 bg-neutral-950/60 border border-neutral-900/90 backdrop-blur-xl rounded-2xl max-w-fit shadow-[inset_0_1px_1px_rgba(255,255,255,0.05)]">
					{skillCategories.map((category) => {
						const isActive = activeTab === category.id;
						return (
							<button
								key={category.id}
								onClick={() => setActiveTab(category.id)}
								className={`relative flex items-center gap-2.5 px-5 py-3 text-sm md:text-base font-semibold tracking-wide transition-all duration-300 rounded-xl cursor-pointer outline-none select-none ${
									isActive
										? "text-teal-400 bg-neutral-900/90 shadow-[0_4px_12px_rgba(0,0,0,0.6)] border border-neutral-800/80"
										: "text-neutral-400 hover:text-neutral-200 hover:bg-neutral-900/30"
								}`}
							>
								{/* আইকন সাইজ ১৬ থেকে বাড়িয়ে ১৮ (size={18}) করা হয়েছে ল্যামডা ফাংশন ছাড়াই মেইন অবজেক্ট থেকে ম্যাপ করার সময় */}
								<span
									className={`transition-all duration-300 ${
										isActive
											? "scale-115 text-teal-400 drop-shadow-[0_0_8px_rgba(20,184,166,0.5)]"
											: "text-neutral-500 group-hover:text-neutral-400"
									}`}
								>
									{/* কারেন্ট কম্পোনেন্টে আইকন বড় করার জন্য CSS ক্লাস পাস করা হয়েছে */}
									<div className="[&>svg]:size-4.5 flex items-center justify-center">
										{category.icon}
									</div>
								</span>

								{category.label}

								{/* বর্তমান ব্রাইট নিয়ন স্টাইলের সাথে ম্যাচ করা গ্লোয়িং পিল ইন্ডিকেটর */}
								{isActive && (
									<span className="absolute -bottom-2.25 left-1/2 -translate-x-1/2 w-10 h-0.75 bg-linear-to-r from-cyan-400 via-teal-500 to-blue-500 shadow-[0_0_12px_#06b6d4,0_0_4px_#14b8a6] rounded-full animate-pulse" />
								)}
							</button>
						);
					})}
				</div>

				{/* স্কিল গ্রিড এরিয়া উইথ রিচ ট্রানজিশন */}
				<div className="min-h-87.5">
					{skillCategories.map((category) => (
						<div
							key={category.id}
							className={`${
								activeTab === category.id ? "grid" : "hidden"
							} grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-in fade-in-50 slide-in-from-bottom-5 duration-500 ease-out`}
						>
							{category.skills.map((skill) => (
								<div
									key={skill.name}
									className="group relative flex items-start gap-4 rounded-2xl border border-zinc-800 bg-zinc-900/25 p-5 backdrop-blur-md transition-all duration-300 hover:border-teal-500/40 hover:bg-neutral-950/50 hover:shadow-[0_10px_40px_rgba(20,184,166,0.25)]"
								>
									{/* কার্ড হোভার গ্লো ইফেক্ট */}
									<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-radial from-teal-500/10 via-blue-500/5 to-transparent rounded-2xl transition-opacity duration-500 pointer-events-none" />

									{/* আইকন বক্স উইথ ডাইনামিক বর্ডার ও গ্লো */}
									<div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-neutral-900 bg-neutral-950/80 text-xl font-bold font-sans text-neutral-400 shadow-inner transition-all duration-300 group-hover:scale-105 group-hover:border-teal-400 group-hover:bg-neutral-900/70 group-hover:text-teal-300 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)]">
										<span className="transition-transform duration-500 group-hover:rotate-360">
											{skill.icon}
										</span>
									</div>

									{/* টেক্সট কন্টেন্ট */}
									<div className="flex flex-col justify-center min-w-0">
										<h4 className="text-base font-semibold text-neutral-200 tracking-wide transition-colors duration-300 group-hover:text-teal-400">
											{skill.name}
										</h4>
										<p className="mt-0.5 text-xs md:text-sm text-neutral-400 truncate transition-colors duration-300 group-hover:text-neutral-200">
											{skill.sub}
										</p>
									</div>
								</div>
							))}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
