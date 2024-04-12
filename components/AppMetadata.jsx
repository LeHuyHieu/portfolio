const author = "Jack Lee";
const description =
	"A skilled web developer hailing from Vietnam, I boast years of expertise in crafting captivating websites. Fluent in languages like PHP, CSS, HTML, JavaScript, and well-versed in frameworks such as Laravel, Vue.js, Angular.";
const url = "https://portfolio-eight-lime-43.vercel.app";
export const AppMetadata = {
	metadataBase: new URL("https://portfolio-eight-lime-43.vercel.app/"),
	title: {
		default: `Portfolio | ${author}`,
		template: `%s | ${author}`
	},
	description: description,
	icons: {
		icon: "/favicon.png"
	},
	keywords: [
		"Jack Lee",
		"Jack Lee - software developer",
		"Frontend developer",
		"Flutter developer",
		"Portfolio website",
		"Frontend Developer Portfolio"
	],
	creator: author,
	authors: [{ name: author, url: url }],
	colorScheme: "dark",
	openGraph: {
		title: `${author} | Portfolio`,
		description: description,
		url: url,
		siteName: `${author} | Portfolio`,
		images: [
			{
				url: "https://portfolio-eight-lime-43.vercel.app/screenshot.png",
				width: 800,
				height: 600,
				alt: "My personal portfolio website"
			},
			{
				url: "https://portfolio-eight-lime-43.vercel.app/screenshot.png",
				width: 1800,
				height: 1600,
				alt: "My personal portfolio website"
			}
		],
		locale: "en-US",
		type: "website"
	}
};
