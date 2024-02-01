import Image from "next/image";
/* import { NextSeo } from "next-seo";
 */
/* import FadeRight from "@/animation/FadeRight";
import FadeUp from "@/animation/FadeUp";
 */
import { AnimatePresence } from "framer-motion";
import ShowCaseList from "@/lib/components/roadmap/roadmap";
import { ROADMAP } from "@/core/data/roadmap";
import heroProfileImg from "@/public/images/heroProfile.png";
//import { siteMetadata } from "@/data/siteMetaData.mjs";

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
				<title>Cubix Roadmap</title>
			</Head>
			<Header />
			<main className="py-8 flex flex-col text-center">
			
                <ShowCaseList title="Cubix Events" details={ROADMAP} />
			
			</main>
		</>
	);
};

export default board;


/* export default function About() {
  return (
    <>
    </>
  );
}
 */