export type HeaderDataType = {
	title: string;
	link: string;
	target: string;
};

const HeaderData: HeaderDataType[] = [
	{
		title: "Blogs",
		link: "blogs",
		target: "_self",
	},
	{
		title: "Contact",
		link: "contact",
		target: "_self",
	},
	{
		title: "Board Members",
		link: "board",
		target: "_blank",
	},
	{
		title: "Roadmap",
		link: "roadmap",
		target: "_self",
	},
];

export default HeaderData;
