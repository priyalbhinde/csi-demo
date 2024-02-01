import { GithubIcon, LinkedinIcon, MailIcon } from "lucide-react";
import { ReactNode } from "react";

export type BoardDataType = {
	id: number;
	name: string;
    icon_git: ReactNode;
    icon_mail: ReactNode;
    icon_linkedin: ReactNode;
	role: string;
	mail: string;
	git: string;
    linkedin: string;
};

const BoardData: BoardDataType[] = [
	{
		id: 1,
		name: "Mohit Jethwani",
		icon_git: <GithubIcon/>,
        icon_linkedin: <LinkedinIcon/>,
        icon_mail: <MailIcon/>,
		role: "President",
		mail: "21bce154@nirmauni.ac.in",
        git:"https://github.com/mohit-jethwani49",
        linkedin:"https://www.linkedin.com/in/mohit-jethwani-354964235/"
	},
    {
		id: 2,
		name: "Manav Pandya",
		icon_git: <GithubIcon/>,
        icon_linkedin: <LinkedinIcon/>,
        icon_mail: <MailIcon/>,
		role: "Vice-President",
		mail: "21bce143@nirmauni.ac.in",
        git:"https://github.com/Manav7603",
        linkedin:"https://www.linkedin.com/in/manav-pandya-01833a225/"
	},
    {
		id: 3,
		name: "Rajat Vanzara",
		icon_git: <GithubIcon/>,
        icon_linkedin: <LinkedinIcon/>,
        icon_mail: <MailIcon/>,
		role: "President",
		mail: "21bce154@nirmauni.ac.in",
        git:"https://github.com/mohit-jethwani49",
        linkedin:"https://www.linkedin.com/in/mohit-jethwani-354964235/"
	},
		];

export default BoardData;
