'use client'
import {
    IconBrandReact,
    IconBrandMongodb,
    IconBrandTypescript,
    IconBrandTailwind,
    IconBrandNextjs,
    IconBrandGit,
    IconServer2,
    IconBrandFigma,
    IconBrandFramer,
    IconBrandHtml5,
    IconBrandCss3


} from "@tabler/icons-react";
import SlideIn from "./SlideIn";
import { motion } from "framer-motion";

const About = () => {
    const technologies = [
        { logo: <IconBrandHtml5 size={24} className="text-blue-600" />, name: "Html" },
        { logo: <IconBrandFigma size={24} className="text-teal-500" />, name: "Figma" },
        { logo: <IconBrandFramer size={24} className="text-green-500" />, name: "Framer" },
    ];
    const technologies2 = [
        { logo: <IconBrandReact size={24} className="text-blue-500" />, name: "React" },
        { logo: <IconBrandFigma size={24} className="text-black" />, name: "Figma" },
        { logo: <IconBrandCss3 size={24} className="text-blue-600" />, name: "Css" },
        { logo: <IconBrandHtml5 size={24} className="text-teal-500" />, name: "Html" },
        { logo: <IconBrandFramer size={24} className="text-orange-600" />, name: "Framer" },

    ];
    // Animation variants for each skill
    const skillVariants = {
        hidden: { opacity: 0, y: 50 }, // Starting state
        visible: { opacity: 1, y: 0 }, // Ending state
    };


    return (
        <SlideIn direction='bottom'>
            <section className="px-8 md:px-16 lg:px-32 mb-24">
                <div className="container mx-auto flex flex-col items-center md:flex-row">
                    {/* Description */}
                    <div className="text-center md:text-left">
                        <h2 className="text-3xl text-center font-semibold mb-4 text-gray-800">About <span className="text-yellow-400">Me</span> </h2>
                        <p className="font-light">
                            With over 2 years of experience as a <span className="font-semibold">Front-end developer</span> , I have had a deep passion for creating and building things. My journey into
                            software engineering was driven by my love for creation, which began with drawing. This creative inclination naturally
                            led me to explore the world of technology and software development.
                        </p>
                        <p className="font-light mt-5">
                            I specialize in both <span className="font-semibold">Designs </span> and <span className="font-semibold">Frontend </span> development, having worked extensively in both areas. I thrive on the continuous learning
                            process that the tech world offers and relish the opportunity to apply new knowledge to solve real-world problems. Tech, for me, is more
                            than just a profession, it is a hobby and a source of joy.
                        </p>
                        <p className="font-light mt-5">
                            In addition to my technical skills, I am a highly social person and have always found myself in leadership roles, guiding teams and
                            fostering collaboration.
                        </p>
                        <p className="font-light mt-5">
                            I am always excited to take on new challenges and build innovative solutions that make a difference. Let's connect and see how we can
                            create something amazing together!
                        </p>

                        {/* Experience */}
                        <div className="mt-24">
                            <h3 className="text-xl font-semibold mb-4 text-gray-800">Work Experience</h3>
                            <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 text-gray-600">
                                <li>
                                    <h4 className="text-xl font-bold">Designer At The Arch Podium</h4>
                                    <span className="text-sm text-gray-500">Feb 2023 - March 2025</span>
                                    <p className="mt-2 text-md font-light">
                                       I Oversaw the completion	of effective research to determine	user requirements,as well as designing wireframes and	prototypes,	as	well as	developing new	features for existing products.
                                        <span className="block mt-2 font-semibold">Technologies Used <span aria-hidden="true">→</span></span>
                                    </p>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                                        {technologies.map((tech, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex flex-col items-center"
                                                variants={skillVariants} // Apply the animation variants
                                                initial="hidden" // Initial animation state
                                                whileInView="visible" // Animation state when the element is in view
                                                viewport={{ once: true, amount: 0.2 }} // Controls when the element should animate
                                                transition={{ duration: 0.5, delay: index * 0.1 }} // Duration and delay for a staggered effect
                                            >
                                                <button
                                                    key={index}
                                                    className="flex flex-col items-center justify-center p-3 rounded-md  transition-transform transform  focus:outline-none"
                                                >
                                                    <span className="text-lg">{tech.logo}</span>
                                                    <span className="mt-1 text-xs text-gray-700">{tech.name}</span>
                                                </button>
                                            </motion.div>
                                        ))}
                                    </div>
                                </li>
                                <li>
                                    <h4 className="text-xl font-bold">Frontend Developer, BTDTHUB</h4>
                                    <span className="text-sm text-gray-500">June 2025 - Present</span>
                                    <p className="mt-2 text-md font-light">
                                        I maintain and over see the offical website,i also make required updates and patches to the website,i also oversee the backend as wel as data collection and encryption.
                                        <span className="block mt-2 font-semibold">Technologies Used <span aria-hidden="true">→</span></span>
                                    </p>
                                    <div className="flex flex-wrap justify-center md:justify-start gap-4 mt-2">
                                        {technologies2.map((tech, index) => (
                                            <motion.div
                                                key={index}
                                                className="flex flex-col items-center"
                                                variants={skillVariants} // Apply the animation variants
                                                initial="hidden" // Initial animation state
                                                whileInView="visible" // Animation state when the element is in view
                                                viewport={{ once: true, amount: 0.2 }} // Controls when the element should animate
                                                transition={{ duration: 0.5, delay: index * 0.1 }} // Duration and delay for a staggered effect
                                            >
                                                <button
                                                    key={index}
                                                    className="flex flex-col items-center justify-center p-3 rounded-md transition-transform transform  focus:outline-none"
                                                >
                                                    <span className="text-lg">{tech.logo}</span>
                                                    <span className="mt-1 text-xs text-gray-700">{tech.name}</span>
                                                </button>
                                            </motion.div>
                                        ))}
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </SlideIn>
    );
};

export default About;
