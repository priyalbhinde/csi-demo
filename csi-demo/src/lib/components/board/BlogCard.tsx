import { WorksDataType } from "@/core/data/WorksData";
import BoardData, { BoardDataType } from "@/core/data/BoardData";
import { ExternalLink } from "lucide-react";
import { AppMotionA } from "../motion/AppMotion";

const BoardCard = ({ boardData }: { boardData: BoardDataType }) => {
	return (
		<>
			<AppMotionA
				href={boardData.linkedin}
				target="_blank"
				rel="noreferrer"
				initial={{ opacity: 0, translateY: "10px" }}
				whileInView={{ opacity: 1, translateY: 0 }}
				viewport={{ once: true }}
				transition={{
					duration: 0.3,
					delay: boardData.id * 0.1,
				}}
				className="py-10 sm:py-8 px-6 sm:px-10 md:px-8 min-h-full flex flex-col gap-4 bg-inverseSurface text-black dark:bg-altBackground dark:text-white hover:bg-blue-200 dark:hover:bg-blue-800 rounded-md shadow-md text-left transition-all duration-400 hover:shadow-xl group foldWorkCard"
			>
				<span className="flex justify-between items-center mt-5">
					<h2 className="text-2xl font-semibold leading-6">
						{boardData.name}
					</h2>
					<ExternalLink
						className={`h-5 w-5 lg:invisible lg:group-hover:visible`}
					/>
				</span>
				<p className="text-lg text-justify">{boardData.mail}</p>
				<p className="text-lg">{boardData.git}</p>
				<p className="text-lg">{boardData.linkedin}</p>
			</AppMotionA>
		</>
	);
};

export default BoardCard;
