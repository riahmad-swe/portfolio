"use client";

import React, { useState } from "react";
import { Mail, Phone, Send, CheckCircle, MessageSquare } from "lucide-react";

const socials = [
	{
		name: "Email",
		value: "riahmad.swe@gmail.com",
		href: "mailto:riahmad.swe@gmail.com",
		icon: <Mail size={18} />,
	},
	{
		name: "Phone/WhatsApp",
		value: "+880 1712 455685",
		href: "tel:+8801712455685",
		icon: <Phone size={18} />,
	},
	{
		name: "Telegram",
		value: "@riahmad_swe",
		href: "https://t.me/riahmad_swe",
		icon: "TG",
	},
	{
		name: "GitHub",
		value: "@riahmad-swe",
		href: "https://github.com/riahmad-swe",
		icon: "GH",
	},
	{
		name: "LinkedIn",
		value: "@riahmad-swe",
		href: "https://linkedin.com/in/riahmad-swe",
		icon: "LI",
	},
	{
		name: "X (Twitter)",
		value: "@r_i_ahmad",
		href: "https://x.com/r_i_ahmad",
		icon: "X",
	},
	{
		name: "Facebook",
		value: "@riahmad.swe",
		href: "https://facebook.com/riahmad.swe",
		icon: "FB",
	},
];

export function Contact() {
	// ফর্ম স্টেট ম্যানেজমেন্ট
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// এখানে আপনার ব্যাকএন্ড বা ফাইবারবেস/ইমেইল সার্ভিস ইন্টিগ্রেট করতে পারবেন
		// ডেমো সাবমিশন ট্র্যাকার (2 Seconds delay)
		await new Promise((resolve) => setTimeout(resolve, 1800));

		setIsSubmitting(false);
		setIsSubmitted(true);
		setFormData({ name: "", email: "", message: "" });

		// ৫ সেকেন্ড পর সাকসেস স্টেট অটো ক্লিয়ার হবে
		setTimeout(() => setIsSubmitted(false), 5000);
	};

	return (
		<section
			id="contact"
			className="relative px-4 py-16 md:py-28 lg:px-8 overflow-hidden"
		>
			{/* ব্যাকগ্রাউন্ড অ্যাম্বিয়েন্ট আভা */}
			<div className="absolute bottom-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[500px] bg-teal-500/5 blur-[140px] rounded-full pointer-events-none" />

			<div className="mx-auto max-w-7xl relative z-10">
				{/* পোর্টফোলিও স্ট্যান্ডার্ড ইউনিক হেডিং */}
				<div className="flex flex-col items-start mb-16">
					<span className="group inline-flex items-center justify-center px-4 py-1.5 text-xs md:text-sm font-bold tracking-widest text-teal-500 uppercase rounded-full border border-teal-500/20 bg-teal-950/10 backdrop-blur-md shadow-[0_0_12px_rgba(20,184,166,0.1)] transition-all duration-300 hover:border-teal-400/60 hover:bg-teal-950/30 hover:text-teal-300 hover:shadow-[0_0_25px_rgba(20,184,166,0.4)] cursor-default select-none mb-4">
						<span className="mr-2 size-2 rounded-full bg-teal-400 shadow-[0_0_8px_#14b8a6] transition-transform duration-500 group-hover:scale-125" />
						Get In Touch
					</span>
					<h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl select-none">
						<span className="text-neutral-100">
							Let&apos;s Build
						</span>{" "}
						<span className="text-teal-400 drop-shadow-[0_0_12px_rgba(20,184,166,0.3)]">
							Together
						</span>
					</h2>
				</div>

				{/* ২ সেকশন স্প্লিট গ্রিড লেআউট */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
					{/* LEFT SIDE: ইন্টারেক্টিভ কন্টাক্ট ও সোশ্যাল ডক (5 Columns) */}
					<div className="lg:col-span-5 space-y-6">
						<div className="flex items-center gap-2.5 text-neutral-300 font-mono text-sm uppercase tracking-widest mb-2">
							<MessageSquare
								size={14}
								className="text-teal-500"
							/>
							<span>Contact Directory</span>
						</div>

						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-3.5">
							{socials.map((social) => (
								<a
									key={social.name}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									className="group flex items-center gap-4 rounded-xl border border-zinc-800 bg-zinc-900/25 p-4 backdrop-blur-md transition-all duration-300 hover:border-teal-500/30 hover:bg-neutral-950/50 hover:shadow-[0_8px_25px_rgba(20,184,166,0.08)]"
								>
									{/* আইকন সেল উইথ রোটেশন ট্রিপ */}
									<div className="flex size-10 shrink-0 items-center justify-center rounded-lg border border-neutral-900 bg-neutral-950 font-mono text-sm font-extrabold text-neutral-400 transition-all duration-300 group-hover:scale-105 group-hover:border-teal-500/30 group-hover:bg-neutral-900/60 group-hover:text-teal-400 group-hover:shadow-[0_0_12px_rgba(20,184,166,0.15)]">
										{typeof social.icon === "string" ? (
											<span className="transition-transform duration-500 group-hover:rotate-[360deg]">
												{social.icon}
											</span>
										) : (
											<span className="transition-transform duration-500 group-hover:scale-110">
												{social.icon}
											</span>
										)}
									</div>

									<div className="min-w-0">
										<p className="text-sm font-bold uppercase tracking-wider text-neutral-400 transition-colors duration-300 group-hover:text-neutral-300">
											{social.name}
										</p>
										<p className="text-sm font-medium text-neutral-300 truncate mt-0.5 group-hover:text-neutral-200">
											{social.value}
										</p>
									</div>
								</a>
							))}
						</div>
					</div>

					{/* RIGHT SIDE: এলিগ্যান্ট গ্লাস-মরফিজম কন্টাক্ট ফর্ম (7 Columns) */}
					<div className="lg:col-span-7">
						<form
							onSubmit={handleSubmit}
							className="relative rounded-2xl border border-neutral-900/90 bg-neutral-950/20 p-6 sm:p-8 backdrop-blur-md shadow-[0_15px_40px_rgba(0,0,0,0.4)] overflow-hidden"
						>
							{/* ফর্ম টপ থ্রেড গ্লো লাইট */}
							<div className="absolute top-0 left-0 right-0 h-[1px] bg-linear-to-r from-transparent via-teal-500/40 to-transparent" />

							<div className="space-y-5">
								{/* ইনপুট ১: নাম */}
								<div className="flex flex-col gap-1.5">
									<label className="text-sm font-bold font-mono uppercase tracking-wider text-neutral-300">
										Your Name
									</label>
									<input
										type="text"
										required
										value={formData.name}
										onChange={(e) =>
											setFormData({
												...formData,
												name: e.target.value,
											})
										}
										placeholder="John Doe"
										className="w-full rounded-xl border border-neutral-900 bg-neutral-950/80 px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 outline-none transition-all duration-300 focus:border-teal-500/40 focus:bg-neutral-950 focus:shadow-[0_0_15px_rgba(20,184,166,0.1)]"
									/>
								</div>

								{/* ইনপুট ২: ইমেইল */}
								<div className="flex flex-col gap-1.5">
									<label className="text-sm font-bold font-mono uppercase tracking-wider text-neutral-300">
										Email Address
									</label>
									<input
										type="email"
										required
										value={formData.email}
										onChange={(e) =>
											setFormData({
												...formData,
												email: e.target.value,
											})
										}
										placeholder="john@example.com"
										className="w-full rounded-xl border border-neutral-900 bg-neutral-950/80 px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 outline-none transition-all duration-300 focus:border-teal-500/40 focus:bg-neutral-950 focus:shadow-[0_0_15px_rgba(20,184,166,0.1)]"
									/>
								</div>

								{/* ইনপুট ৩: মেসেজ */}
								<div className="flex flex-col gap-1.5">
									<label className="text-sm font-bold font-mono uppercase tracking-wider text-neutral-300">
										Message Blueprint
									</label>
									<textarea
										required
										rows={4}
										value={formData.message}
										onChange={(e) =>
											setFormData({
												...formData,
												message: e.target.value,
											})
										}
										placeholder="Let's talk about architecture, integration, or collaborations..."
										className="w-full rounded-xl border border-neutral-900 bg-neutral-950/80 px-4 py-3 text-sm text-neutral-200 placeholder-neutral-600 outline-none transition-all duration-300 resize-none focus:border-teal-500/40 focus:bg-neutral-950 focus:shadow-[0_0_15px_rgba(20,184,166,0.1)]"
									/>
								</div>

								{/* অ্যাকশন সাবমিট বাটন উইথ স্টাইলিশ ট্রানজিশন */}
								<button
									type="submit"
									disabled={isSubmitting || isSubmitted}
									className={`relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold tracking-wide transition-all duration-300 outline-none select-none border ${
										isSubmitted
											? "border-green-500/30 bg-green-950/20 text-green-400 shadow-[0_0_15px_rgba(34,197,94,0.2)]"
											: "border-teal-500/30 bg-teal-950/20 text-teal-400 shadow-[0_0_15px_rgba(20,184,166,0.1)] hover:border-teal-400/50 hover:bg-teal-950/40 hover:text-teal-300 hover:shadow-[0_0_20px_rgba(20,184,166,0.3)] active:scale-[0.99]"
									}`}
								>
									{isSubmitting ? (
										<div className="size-4 animate-spin rounded-full border-2 border-teal-400 border-t-transparent" />
									) : isSubmitted ? (
										<>
											<CheckCircle
												size={16}
												className="animate-bounce"
											/>
											Transmission Successful
										</>
									) : (
										<>
											<Send
												size={15}
												className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
											/>
											Transmit Message
										</>
									)}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
