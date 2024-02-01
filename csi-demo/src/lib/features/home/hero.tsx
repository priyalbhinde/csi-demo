import MotionChevronDownIcon from "@/lib/Icons/hero/MotionChevronDownIcon";
import Waves from "@/lib/Icons/hero/Waves";
import Header from "@/lib/common/Header";
import { AppMotionH2, AppMotionP } from "@/lib/components/motion/AppMotion";

const Hero = () => {
	return (
		<>
			<main className="bg-inverseHighlight dark:bg-highlight">
				<Header />
				<section className="px-4 md:px-8 xl:px-32 2xl:px-52 py-8 gap-5 flex flex-col justify-center text-center items-center dark:text-white">
					<AppMotionH2
						initial={{ opacity: 0, translateY: "24" }}
						whileInView={{ opacity: 1, translateY: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="text-3xl md:text-5xl lg:text-6xl font-extrabold"
					>
						Computer Society Of India
						
					</AppMotionH2>
					<h2 className="text-2xl text-blue-800 font-medium uppercase dark:text-blue-400">Institute of Technology, Nirma University</h2>
					<AppMotionP
						initial={{ opacity: 0, translateY: "30px" }}
						whileInView={{ opacity: 1, translateY: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.5 }}
						className="font-light fold:text-lg lg:w-11/12 lg:tracking-wider"
					>
						Established in 2004, the Student Chapter of the Computer Society of India (CSI) is actively engaged in hosting technical, social, and cultural events. Our portfolio includes programming and quiz competitions, seminars on emerging technologies, language learning sessions, workshops, conventions, and technical talks. We consistently organize educational and professional development programs, catering to IT professionals, researchers, and students.
						<br />
						<p className="pt-6 font-bold text-base tracking-wide ">Faculty Advisor: Prof Tejal Upadhyay</p>
						<p className="pt-2 font-bold text-base tracking-wide ">Student Coordinator: Mohit Jethwani</p>
					</AppMotionP>

					<MotionChevronDownIcon />
				</section>
			</main>
			<Waves />
		</>
	);
};

export default Hero;
