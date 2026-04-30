export const projects = [
	{
		id: "ecoforge",
		name: "EcoForge",
		image: "/projects/ecoforge.png",
		slogan: "Pitching and funding environmental solutions.",
		description:
			"EcoForge is a sophisticated crowdfunding and community platform dedicated to environmental sustainability. It bridges the gap between green innovators and conscious investors, allowing users to pitch ideas, engage in community discussions, and secure funding for high-impact eco-projects.",
		features: [
			"Community-driven pitching",
			"Secure funding via SSLCommerz",
			"Real-time discussion forums",
			"Eco-impact tracking",
		],
		challenges:
			"Implementing a multi-step funding flow with secure payment verification while maintaining a seamless user experience was complex. Balancing real-time data updates for project funding goals required precise TanStack Query implementation.",
		improvements: [
			"AI-based project risk assessment",
			"Integration with global green-energy APIs",
			"Mobile app version using React Native",
		],
		tech: [
			"TypeScript",
			"Next.js",
			"Express.js",
			"Prisma",
			"PostgreSQL",
			"Better-Auth",
			"SSLCommerz",
		],
		live: "https://ecoforge.onrender.com",
		github: "https://github.com/ahnafswe/ecoforge-frontend",
	},
	{
		id: "clinexai",
		name: "Clinex AI",
		image: "/projects/clinexai.png",
		slogan: "Modern healthcare management platform.",
		description:
			"An intelligent, all-in-one healthcare ERP designed to digitize medical operations. From patient registration to complex billing and diagnostic reports, Clinex AI streamlines hospital workflows through a modern, data-driven interface.",
		features: [
			"Automated Appointment Scheduling",
			"Dynamic Billing & Collections",
			"Diagnostic Report Management",
			"Comprehensive Expense Analytics",
		],
		challenges:
			"Managing complex relational data for medical records while ensuring strict data privacy and HIPAA-style security. Designing the dashboard with Tremor to remain readable despite high data density was a significant UI challenge.",
		improvements: [
			"RAG-powered medical history search",
			"Automated lab result analysis",
			"Telemedicine video integration",
		],
		tech: [
			"Next.js",
			"Express.js",
			"PostgreSQL",
			"Google OAuth",
			"Zod",
			"TanStack Query",
			"Tremor",
		],
		live: "https://clinexai.titonex.com",
		github: null,
	},
	{
		id: "cold-storage",
		name: "FrostVault",
		image: "/projects/frostvault.png",
		slogan: "Potato cold storage management.",
		description:
			"A specialized ERP for the agricultural logistics sector. This platform manages the lifecycle of long-term potato storage, tracking chamber temperatures, inventory levels, and storage duration to ensure optimal freshness.",
		features: [
			"Chamber Temperature Monitoring",
			"Inventory Lifecycle Tracking",
			"Automated Storage Billing",
			"Client Management Portal",
		],
		challenges:
			"Developing a robust inventory system that handles thousands of units with different storage dates and rates. Optimizing Prisma queries for high-volume storage reports was critical for performance.",
		improvements: [
			"IoT integration for real-time sensor data",
			"Predictive spoilage alerts using AI",
			"Automated invoice generation via WhatsApp",
		],
		tech: ["Next.js", "Tailwind CSS", "Prisma", "PostgreSQL", "Better-Auth", "Zod"],
		live: "https://bcs.titonex.com",
		github: null,
	},
	{
		id: "fortepath",
		name: "FortePath",
		image: "/projects/fortepath.png",
		slogan: "Connecting learners to expert tutors.",
		description:
			"A dual-sided marketplace that simplifies educational networking. FortePath allows students to discover specialized tutors and book sessions instantly, while providing tutors with professional tools to manage their schedule and student progress.",
		features: [
			"Instant Tutor Booking",
			"Session Tracking & Management",
			"Tutor Professional Profiles",
			"Automated Scheduling Notifications",
		],
		challenges:
			"Handling the synchronization of schedules between two different user types (Tutor/Student) while preventing double-bookings. Integrating HeroUI components with a custom theme required extensive Tailwind configuration.",
		improvements: [
			"In-platform video calling",
			"AI-driven tutor recommendations",
			"Progress tracking with visual charts",
		],
		tech: ["TypeScript", "Next.js", "Better-Auth", "Prisma", "HeroUI", "Express.js"],
		live: "https://fortepath.vercel.app",
		github: "https://github.com/ahnafswe/fortepath-frontend",
	},
];
