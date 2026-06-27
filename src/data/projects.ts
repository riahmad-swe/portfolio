export const projects = [
	{
		id: "water-technology",
		name: "Water Technology",
		image: "/projects/water-technology.png",
		slogan: "Water purification & treatment ecosystem",
		description:
			"An enterprise-grade, full-stack digital catalog engineered to transform 9-year offline legacy into a centralized platform. It seamlessly bridges residential purifiers and complex industrial WTP/ETP plants, offering users transparent pricing, real-time comparisons, and highly optimized server-side filtering.",
		features: [
			"Dynamic Advanced Filtering & Pagination",
			"Real-Time Product Comparison Engine",
			"Transparent Price Breakdown",
			"Custom Project Budget Estimator",
			"Knowledge Base & Blog Ecosystem",
		],
		challenges:
			"Resolving infinite re-rendering loops in React's useEffect during complex filter synchronization, bypassing URL string-parsing traps in backend pagination logic, and maintaining glassmorphic UI scaling across dynamic image aspect ratios.",
		improvements: [
			"Interactive engagement featuring product reviews and article comments",
			"Personalized user dashboard for tracking orders, warranty claims, and returns",
			"Advanced admin analytics for tracking user engagement",
		],
		tech: [
			"Next.js",
			"TypeScript",
			"Tailwind CSS",
			"Express.js",
			"PostgreSQL",
			"Prisma ORM",
			"TanStack Query",
			"Zod",
		],
		live: "https://water.titonex.com",
		github: null,
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
		id: "frostvault",
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
		tech: [
			"Next.js",
			"Tailwind CSS",
			"Prisma",
			"PostgreSQL",
			"Better-Auth",
			"Zod",
		],
		live: "https://bcs.titonex.com",
		github: null,
	},
];
