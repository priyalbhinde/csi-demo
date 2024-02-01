import { mailLink, LinkedInUrl, } from "@/core/constants";
import Email from "@/lib/Icons/social/Email";
import LinkedIn from "@/lib/Icons/social/LinkedIn";
import { ReactNode } from "react";

export type ContactDataType = {
	id: number;
	social: string;
	username: string;
	link: string;
	image: ReactNode;
};

const ContactData: ContactDataType[] = [
	{
		id: 1,
		social: "LinkedIn",
		username: "csi",
		link: LinkedInUrl,
		image: (
			<LinkedIn
				className="fill-black dark:fill-white h-6 w-6"
				aria-label="LinkedIn"
			/>
		),
	},
	{
		id: 2,
		social: "Email",
		username: "csi.it@nirmauni.ac.in",
		link: mailLink,
		image: (
			<Email
				className="fill-black dark:fill-white h-6 w-6"
				aria-label="Email"
			/>
		),
	},
];

export default ContactData;
