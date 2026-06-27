"use server";

import { Resend } from "resend";

// Initialize Resend with your API key
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formData: {
	name: string;
	email: string;
	message: string;
}) {
	try {
		const { name, email, message } = formData;

		const data = await resend.emails.send({
			// Note: If you don't have a verified domain on Resend yet,
			// you MUST use onboarding@resend.dev as the 'from' address for testing.
			from: "Portfolio Contact <contact@riahmad.my>",
			to: "riahmad.swe@gmail.com",
			subject: `New Message from ${name}`,
			replyTo: email,
			text: `Name: ${name}\nEmail: ${email}\n\nMessage Blueprint:\n${message}`,
		});

		if (data.error) {
			return { success: false, error: data.error.message };
		}

		return { success: true, data };
	} catch {
		return {
			success: false,
			error: "Transmission failed due to server error.",
		};
	}
}
