"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, Terminal } from "lucide-react";

const navLinks = [
	{ name: "Home", href: "/#hero" },
	{ name: "About", href: "/#about" },
	{ name: "Skills", href: "/#skills" },
	{ name: "Projects", href: "/#projects" },
	{ name: "Experience", href: "/#experience" },
	{ name: "Contact", href: "/#contact" },
];

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 w-full border-b border-teal-500/15 bg-neutral-950/75 backdrop-blur shadow-[0_10px_40px_rgba(0,0,0,0.6),0_1px_0_rgba(20,184,166,0.1)] transition-all duration-300">
			{/* টপ নিয়ন গ্লো লাইন */}
			<div className="absolute top-0 left-0 right-0 h-[1.5px] bg-linear-to-r from-transparent via-teal-400/40 to-transparent pointer-events-none shadow-[0_1px_10px_#14b8a6]" />

			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* গ্রিড/ফ্লেক্স লেআউট: লোগো বামে, মেনু সেন্টারে, এবং ডান পাশ ব্যালেন্সড */}
				<div className="flex h-16 items-center justify-between">
					{/* LEFT: লোগো এরিয়া */}
					<div className="flex shrink-0">
						<Link
							href="/#home"
							className="group relative flex items-center justify-center rounded-xl p-1 transition-transform duration-300 active:scale-95"
						>
							<div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-teal-400/20 blur-lg rounded-full transition-opacity duration-300 pointer-events-none" />
							<Image
								src="/logo.png"
								alt="Logo"
								width={38}
								height={38}
								className="h-9.5 w-auto relative z-10 filter brightness-125 drop-shadow-[0_0_12px_rgba(20,184,166,0.4)] transition-transform duration-500 group-hover:rotate-[8deg]"
								priority
							/>
						</Link>
					</div>

					{/* CENTER: বড় স্ক্রিন, ল্যাপটপ এবং ট্যাবলেটের জন্য একদম মাঝখানে মেনু */}
					<div className="hidden md:flex flex-1 justify-center">
						<div className="flex items-center space-x-1.5 font-mono rounded-full border border-neutral-800/60 bg-neutral-950 backdrop-blur px-4 py-1.5 drop-shadow-[0_0_4px_rgba(20,184,166,0.6)]">
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="group relative px-4 py-2 text-sm lg:text-base font-extrabold tracking-wide text-neutral-200 transition-all duration-300 hover:text-white select-none"
								>
									{/* ব্যাকগ্রাউন্ড ক্যাপসুল হোভার এফেক্ট (স্ট্রং গ্লো) */}
									<span className="absolute inset-0 scale-90 opacity-0 rounded-full bg-teal-500/10 border border-teal-400/30 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 shadow-[0_0_20px_rgba(20,184,166,0.15)] -z-10" />

									<span className="relative z-10 flex items-center gap-1.5">
										<span className="text-xs text-teal-400 font-normal transition-colors duration-300 group-hover:text-teal-400/60">
											/
										</span>
										{link.name}
									</span>
								</Link>
							))}
						</div>
					</div>

					{/* RIGHT: ডেস্কটপে ব্যালেন্স রাখার জন্য একটি ফ্যান্টম ডিভ এবং মোবাইলে হ্যামবার্গার */}
					<div className="flex items-center justify-end md:w-10">
						<div className="flex md:hidden">
							<button
								onClick={() => setIsOpen(!isOpen)}
								className="inline-flex items-center justify-center rounded-xl p-2.5 text-neutral-200 border border-neutral-800/40 bg-neutral-900/40 hover:bg-neutral-900/80 hover:border-teal-500/40 hover:text-teal-400 focus:outline-none transition-all duration-200 cursor-pointer shadow-md active:scale-95"
							>
								{isOpen ? (
									<X className="size-5.5" />
								) : (
									<Menu className="size-5.5" />
								)}
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* মোবাইল ড্রপডাউন প্যানেল (হাই ভিজিবিলিটি গ্লাস মরফিজম) */}
			<div
				className={`md:hidden absolute top-16 left-0 right-0 border-b border-teal-500/20 bg-neutral-950/95 backdrop-blur-3xl transition-all duration-300 origin-top ${
					isOpen
						? "opacity-100 scale-y-100 visible shadow-[0_20px_40px_rgba(0,0,0,0.7),0_10px_30px_rgba(20,184,166,0.1)]"
						: "opacity-0 scale-y-95 invisible pointer-events-none"
				}`}
			>
				<div className="p-3 space-y-1.5">
					{navLinks.map((link) => (
						<Link
							key={link.name}
							href={link.href}
							onClick={() => setIsOpen(false)}
							className="flex items-center gap-3.5 rounded-xl px-4 py-3.5 text-base font-extrabold font-mono tracking-wide text-neutral-200 hover:bg-teal-950/30 hover:border-teal-500/30 border border-transparent hover:text-teal-400 hover:shadow-[inset_0_1px_2px_rgba(20,184,166,0.1)] transition-all duration-200"
						>
							<Terminal
								size={15}
								className="text-neutral-600 group-hover:text-teal-400 shrink-0"
							/>
							{link.name}
						</Link>
					))}
				</div>
			</div>
		</nav>
	);
}
