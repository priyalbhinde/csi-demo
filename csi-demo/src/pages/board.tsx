import BoardData from "@/core/data/BoardData";
import { BlobImage } from "@/lib/blobanimation/BlobAnimation";
import Header from "@/lib/common/Header";
import MotionButton from "@/lib/components/buttons/MotionButton";
import BoardCard from "@/lib/components/board/BlogCard";
import { motion } from "framer-motion";
import Head from "next/head";

interface BoardMemberCardProps {
	imagePath: string;
	shiftDown: boolean;
	name: string;
	position: string;
	github: string;
	instagram: string;
	linkedin: string;
}

const board = () => {
	return (
		<>
			<Head>
				<title>Board Members</title>
				<meta name="title" content="Recent Works & Contributions" />
			</Head>
			<Header />
			<main className="py-8 flex flex-col justify-center items-center text-center">
				<motion.h2
					initial={{ opacity: 0, translateY: "30px" }}
					whileInView={{ opacity: 1, translateY: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.5 }}
					className="font-extrabold text-2xl py-5 text-black dark:text-white md:text-4xl heading"
				>
					Recents Board Members
				</motion.h2>

				<section className="grid sm:grid-cols-2 gap-4 lg:gap-6 xl:gap-8  mx-4 sm:mx-12 lg:mx-20 xl:mx-32 2xl:mx-40 my-10">
					{BoardData.map((data, id) => (
						<BoardCard key={id} boardData={data} />
					))}
				</section>
				<span
					className={`w-96 h-96 mt-[40rem] right-0 lg:block hidden pointer-events-none absolute -z-50`}
				>
					<BlobImage />
				</span>
			</main>
		</>
	);
};

export default board;
