import Hero from "@/lib/features/home/hero";
import SkillsSection from "@/lib/features/home/skills";
import AchievementsSection from "@/lib/features/home/achievements";
import Head from "next/head";

const Home = () => {
	return (
		<>
			<Head>
				<title>CSI</title>
				<meta name="title" content="Computer Society of India" />
			</Head>

			<Hero />
			<AchievementsSection />
			<SkillsSection />
			
		</>
	);
};

export default Home;
