import Image from "next/image";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import TechStack from "./TechStack";
function Hero() {
  return (
    <>
      <div className="md:flex flex-row-reverse items-center max-w-6xl mx-auto ">
        <Image
          src="/moshood.jpg"
          height={400}
          width={400}
          alt="Moshood pic"
          className="block mx-auto rounded-full"
        />

        <div className="">
          <h1 className="text-slate-950 text-4xl md:text-5xl font-bold text-center py-5">
            Full-Stack Developer
          </h1>
          <p className="text-center font-medium -leading-8 py-4 w-[95%] mx-auto tracking-tight text-[18px] md:text-[30px] max-w-lg md:max-w-none">
            Hi, I'm <span className="font-extrabold">Moshood Shabi </span> . A
            passionate Web Developer based in Gwagwalada, Nigeria.
          </p>
          <div className="flex gap-4  w-full mx-auto justify-center">
            <Link
              href="https://linkedin.com/in/moshood-shabi-ba620919a"
              target="_blank"
              className="text-slate-950 text-[30px] hover:text-gray-400 duration-300"
            >
              <FaLinkedin />
            </Link>
            <Link
              href="https://github.com/shabimoshood07"
              target="_blank"
              className="text-slate-950 text-[30px] hover:text-gray-400 duration-300"
            >
              <FaGithub />
            </Link>
          </div>
        </div>
      </div>
      <TechStack />
    </>
  );
}

export default Hero;
