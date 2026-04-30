export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="border-t border-zinc-900 bg-zinc-900/25 py-8">
			<div className="mx-auto max-w-7xl px-4 text-center">
				<p className="text-zinc-400">
					© {currentYear} Muhammad Ahnaf. All rights reserved.
				</p>
			</div>
		</footer>
	);
}
