import {
	Database,
	Figma,
	FileCode,
	Github,
	Languages,
	TabletSmartphone,
} from "lucide-react";
import { ReactNode } from "react";

export type SkillDataType = {
	id: number;
	icon?: ReactNode;
	title: string;
	language: string;
};

const SkillsData: SkillDataType[] = [
	{
		id: 1,
		icon: <Figma className="h-8 w-8" />,
		title: "CUBIX",
		language: "CSI is renowned for hosting flagship events, with CUBIX standing out among them. This engaging event seamlessly blends fun, technology, and logic. After a hiatus of a few years, CUBIX 2023, conducted in an offline mode, drew a sizable crowd. Over two days, participants and organizers experienced a weekend filled with learning and enjoyment through six exciting events: Treasure Hunt, Code Relay, OptiAlgo, Blind Coding, Codepid, and Design It Right.",
	},

	{
		id: 2,
		icon: <Github className="h-8 w-8" />,
		title: "HacKNuthon",
		language: "Computer Society of India, Nirma University have recently organized a National Level Hackathon participated by more than 100 teams from various prestigious colleges of India. Mr. Sandeep Jain, founder of Geeks for Geeks was invited as a chief guest to inaugurate the event virtually. People came up with very innovative problem statements and solution in the field of Artificial Intelligence, Blockchain Technologies, Augmented reality and many more. Many goodies, schwags and cash prizes were distributed among the participants at the end of the event.",
	},
	{
		id: 3,
		icon: <TabletSmartphone className="h-8 w-8" />,
		title: "#INCLUDE",
		language: "Computer society of India,Nirma University organized a session for first year students ‘#include on 18 November 2022 between 4:00pm-6:00pm in C Audi.The session was conducted by notable alumni of our esteemed college,former csi president and current product manager at ebay Mr Alark Patel.The session proved to be very beneficial for all the students.He talked about the current trends in technology and the emerging fields and what all skills need to be developed to ace job interviews.",
	},
	{
		id: 4,
		icon: <FileCode className="h-8 w-8" />,
		title: "GSOC Heist",
		language: "CSI organized GSOC Heist on 26 November 2022 between 4-6 pm in online mode.The session was conducted by Anand Kumar, Mentor at Gsoc 2022 at OpenAstronomy and Yash Punia, Gsoc Mentor 2022 and 2021.The two hour long session provided everyone with in depth knowledge of working of GSOC , it’s pre-requisites and cleared all the myths surrounding it.",
	},
	{
		id: 5,
		icon: <Database className="h-8 w-8" />,
		title: "Know Your Domain",
		language: "CSI, in collaboration with ACM, organized the 'Know Your Domain' event featuring four sessions covering key computer science domains: web technologies, artificial intelligence and machine learning, quant technologies, and cyber security. Ankit Singh led the web development session on January 7th, providing insights into full stack development. Swapnil Patel discussed AI and ML on January 8th, offering valuable insights. Falgun Rathod addressed cyber security's importance and industry requirements on January 9th. Concluding the event, Purvansh Shah covered quant technologies. The sessions benefited around 120 students.",
	},
	{
		id: 6,
		icon: <Languages className="h-8 w-8" />,
		title: "Codigo",
		language: "The contest comprises 5-6 time-bound problem-solving tasks. Submissions undergo verification for originality, and student rankings are determined based on performance. Detailed editorials, exploring topics related to the given problems, are provided every weekend.",
	},
];

export default SkillsData;
