"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
	{ name: "Home", href: "#hero" },
	{ name: "About", href: "#about" },
	{ name: "Skills", href: "#skills" },
	{ name: "Projects", href: "#projects" },
	{ name: "Experience", href: "#experience" },
	{ name: "Contact", href: "#contact" },
];

export function Navbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className="fixed top-0 z-50 w-full border-b border-white/5 bg-[#111112]/60 backdrop-blur-md">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex h-14 items-center justify-between gap-4">
					<div>
						<Link href="#home">
							<Image
								src="/logo.png"
								alt="Logo"
								width={32}
								height={32}
								className="h-8 w-auto"
							/>
						</Link>
					</div>

					<div className="hidden md:block">
						<div className="flex items-baseline space-x-8">
							{navLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="hover:text-teal-400 transition-colors duration-200 font-medium"
								>
									{link.name}
								</Link>
							))}
						</div>
					</div>

					<div className="flex md:hidden">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="inline-flex items-center justify-center rounded-md p-2 text-zinc-300 hover:bg-zinc-900 hover:text-teal-400 focus:outline-none transition-colors duration-200"
						>
							{isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
						</button>
					</div>
				</div>
			</div>

			{isOpen && (
				<div className="md:hidden bg-[#111112] border-b border-white/5">
					<div className="p-2">
						{navLinks.map((link) => (
							<Link
								key={link.name}
								href={link.href}
								onClick={() => setIsOpen(false)}
								className="block rounded-md px-3 py-2 text-base font-medium hover:bg-zinc-900 hover:text-teal-400 transition-colors"
							>
								{link.name}
							</Link>
						))}
					</div>
				</div>
			)}
		</nav>
	);
}
