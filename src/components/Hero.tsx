"use client";
import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import TechStack from "./TechStack";
import { motion } from "framer-motion";
function Hero() {
  return (
    <>
      {/* <motion.div
        className="w-10 h-10 bg-red-600"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 180, 180, 0],
          borderRadius: ["0%", "0%", "50%", "50%", "0%"],
        }}
        transition={{
          duration: 2,
          ease: "easeInOut",
          times: [0, 0.2, 0.5, 0.8, 1],
          repeat: Infinity,
          repeatDelay: 1,
        }}
      /> */}
      <div className=" max-w-6xl mx-auto  flex justify-stretch flex-col">
        <div className="md:flex flex-row-reverse items-center md:pt-10">
          {/* <motion.div
            className="w-[350px] h-[350px] overflow-hidden absolute bg-red-600"
            animate={{
              // scale: [1, 2, 2, 1, 1],
              scale: [1, .5, 1, 1, 1],
              rotate: [0, 0, 180, 180, 0],
              borderRadius: ["0%", "0%", "50%", "50%", "0%"],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              times: [0, 0.2, 0.5, 0.8, 1],
              repeat: Infinity,
              repeatDelay: 1,
            }}
          >
            <Image
              src="/moshood.jpg"
              height={350}
              width={350}
              alt="Moshood pic"
              className="relative top-0 left-0 w-full h-full  object-cover"
            />
          </motion.div> */}

            <Image
              src="/moshood.jpg"
              height={300}
              width={300}
              alt="Moshood pic"
              className="rounded-full block mx-auto  object-cover border-b-4  border-red-600 text-red-700 "
            />
          {/* <div className="h-[350px] w-[350px] block mx-auto rounded-full relative overflow-hidden">
            <Image
              src="/moshood.jpg"
              height={500}
              width={500}
              alt="Moshood pic"
              className="absolute top-0 left-0 w-full h-full  object-cover"
            />
          </div> */}

          <div className="">
            <h1 className="text-slate-950 text-4xl md:text-5xl font-bold text-center pt-2">
              Full-Stack Developer
            </h1>
            <p className="text-center font-medium -leading-8 py-4 w-[95%] mx-auto tracking-tight text-[17px] md:text-[30px] max-w-lg md:max-w-none">
              Hi 🖐, I&apos;m{" "}
              <span className="font-extrabold">Moshood Shabi </span> . A
              passionate Web Developer based in Gwagwalada, Nigeria.
            </p>
            <div className="flex gap-4  w-full mx-auto justify-center">
              <Link
                href="https://linkedin.com/in/moshood-shabi-ba620919a"
                target="_blank"
                className="text-slate-950 text-[30px] hover:text-red-500 duration-300"
              >
                <FaLinkedin />
              </Link>
              <Link
                href="https://github.com/shabimoshood07"
                target="_blank"
                className="text-slate-950 text-[30px] hover:text-red-500 duration-300"
              >
                <FaGithub />
              </Link>
            </div>
          </div>
        </div>

        <TechStack />
      </div>
    </>
  );
}

export default Hero;
