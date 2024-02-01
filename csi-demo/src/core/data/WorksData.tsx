import { FolderGit, Code2Icon, RocketIcon } from "lucide-react";
import { ReactNode } from "react";

export type WorksDataType = {
	id: number;
	icon: ReactNode;
	title: string;
	desc: string;
	role: string;
	lang: string;
	link: string;
};

const WorksData: WorksDataType[] = [
	{
		id: 1,
		title: "Animation effects while typing in Vscode",
		icon: <RocketIcon/>,
		desc: "Vscode stands out as an exceptional IDE, significantly enhancing productivity through the seamless integration of new extensions. During my recent exploration, I encountered a captivating animation effect while typing in Vscode, elevating the overall user experience to a professional level. Leveraging such impressive typing animations adds a cool factor and contributes to heightened productivity.",
		role: "@Stavan",
		lang: "#vscode #productivity",
		link: "https://dev.to/shahstavan/animation-effects-while-typing-in-vscode--5a52",
	},
	{
		id: 2,
		title: "Terminal Animation for your website using Typed.js",
		icon: <Code2Icon />,
		desc: "Frequently, when encountering intriguing elements like animations or transitions, there's a desire to understand their practical implementation. I've observed that numerous developers incorporate Terminal Animations into their websites. Here, I aim to assist beginner web developers in seamlessly integrating these animations into their projects.",
		role: "@Stavan",
		lang: "#javascript #web-dev",
		link: "https://dev.to/shahstavan/terminal-animation-for-your-website-using-typed-js-2hcl",
	},
	{
		id: 3,
		title: "NumPy library in Python and it's functions.",
		icon: <Code2Icon />,
		desc: "NumPy, short for Numerical Python, serves as the fundamental library for numeric and scientific computing. Originating from Numeric, developed by Jim Hugunin, and Numarray, which offered additional functionalities, NumPy was established in 2005 by Travis Oliphant. It seamlessly integrated the features of Numarray into the Numeric package. This open-source project has seen contributions from numerous individuals.",
		role: "@Stavan",
		lang: "#python #coding #numpy",
		link: "https://dev.to/shahstavan/numpy-library-in-python-and-its-functions-5fh2",
	},
	{
		id: 4,
		title: "Wonders Of World Cup — Realtime Streaming",
		icon: <Code2Icon />,
		desc: "The highly anticipated World Cup has commenced amid enthusiastic anticipation, marking the pinnacle match of the year. This event prompts individuals to reassess preceding occurrences and review their insurance coverage (eliciting a heightened emotional response). Fortunate attendees seize a once-in-a-lifetime opportunity to witness the live spectacle, while others transform their homes into mini stadiums. The nation unites as a singular entity, collectively observing 22 men engaging in a fierce battle on the field.",
		role: "@CSI",
		lang: "#knowledge #computer-science",
		link: "https://medium.com/@csi.it/wonders-of-world-cup-realtime-streaming-447c5775b5fd",
	},
	];

export default WorksData;
