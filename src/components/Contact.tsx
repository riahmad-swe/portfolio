"use client";

import { Mail, Phone } from "lucide-react";

const socials = [
	{
		name: "Email",
		value: "mahnaf.swe@gmail.com",
		href: "mailto:mahnaf.swe@gmail.com",
		icon: <Mail size={24} />,
	},
	{
		name: "Phone",
		value: "+880 1710 243940",
		href: "tel:+8801710243940",
		icon: <Phone size={24} />,
	},
	{
		name: "WhatsApp",
		value: "+880 1710 243940",
		href: "https://wa.me/8801710243940",
		icon: "WA",
	},
	{ name: "Telegram", value: "@ahnafswe", href: "https://t.me/ahnafswe", icon: "TG" },
	{ name: "GitHub", value: "@ahnafswe", href: "https://github.com/ahnafswe", icon: "GH" },
	{
		name: "LinkedIn",
		value: "@ahnafswe",
		href: "https://linkedin.com/in/ahnafswe",
		icon: "LI",
	},
	{ name: "X (Twitter)", value: "@mahnaf_swe", href: "https://x.com/mahnaf_swe", icon: "X" },
	{ name: "Facebook", value: "@ahnafswe", href: "https://facebook.com/ahnafswe", icon: "FB" },
	{
		name: "Discord",
		value: "@ahnafswe",
		href: "https://discord.com/users/ahnafswe",
		icon: "DC",
	},
];

export function Contact() {
	return (
		<section
			id="contact"
			className="px-4 py-12 md:py-20 lg:px-8"
		>
			<div className="mx-auto max-w-5xl">
				<div className="mb-12 flex flex-col items-center text-center">
					<h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
						Get in <span className="text-teal-400">Touch</span>
					</h2>
					<p className="mt-2 max-w-lg text-zinc-300 text-lg">
						Reach out for architectural consultations, technical collaborations, or
						professional inquiries.
					</p>
				</div>

				<div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
					{socials.map((social) => (
						<a
							key={social.name}
							href={social.href}
							target="_blank"
							rel="noopener noreferrer"
							className="group"
						>
							<div className="flex size-12 items-center justify-center rounded-[10px] bg-teal-500/10 text-teal-400 group-hover:bg-teal-500/20 transition-colors">
								{typeof social.icon === "string" ? (
									<span className="font-bold text-lg">{social.icon}</span>
								) : (
									social.icon
								)}
							</div>

							<div className="mt-3 flex flex-row justify-between gap-4">
								<p className="font-bold tracking-widest0">{social.name}</p>
								<p className="text-zinc-200 font-medium">{social.value}</p>
							</div>
						</a>
					))}
				</div>
			</div>
		</section>
	);
}
