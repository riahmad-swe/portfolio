import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: "https://riahmad.my",
			lastModified: new Date(),
			changeFrequency: "yearly",
			priority: 1,
		},
		// ডাটাবেজ থেকে ডায়নামিক ইউআরএল ফেচ করেও এখানে ম্যাপ করে দিতে পারেন
	];
}
