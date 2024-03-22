import whitebg from "../assets/whitebg.jpg";
import { TypeAnimation } from "react-type-animation";
import { FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";
import profilepic from "../assets/profilepic.png";

const Main = () => {
  return (
    <div id="main">
      <img
        className="w-full h-screen object-cover scale-x-[-1]}"
        src={whitebg}
        alt="white background"
      />
      <div className="w-full h-screen absolute top-0 left-0 bg-white/70">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-center items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-blue-950">
            I am Miguel Cañate
          </h1>
          <img
            className="w-6/12 p-3 m-3 rounded-r-full hover:rounded-2xl"
            src={profilepic}
            alt="profile picture"
            // style={{
            //   maskImage:
            //     "linear-gradient(to bottom, transparent, rgba(0,0,0,1.0) 30px, rgba(0,0,0,0.5) 95%, transparent 100%)",
            // }}
          />
          <h2 className="flex sm:text 3xl text-2xl pt-4 text-gray-800">
            I`m a
            <TypeAnimation
              sequence={[
                // Same substring at the start will only be typed out once, initially
                "Developer 👨🏽‍💻",
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                "Team Enthusiast 🐱‍👤🐱‍🐉 ",
                2000,
                "Tech seeker 📡 ",
                2000,
                "Deejay 🎛",
                2000,
              ]}
              wrapper="span"
              cursor={true}
              speed={30}
              style={{ fontSize: "1em", paddingLeft: "5px" }}
              repeat={Infinity}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <a
              href="https://github.com/MiguelCagnate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="cursor-pointer" size={25} />
            </a>
            <a
              href="https://www.linkedin.com/in/miguelcbarreneche/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn className="cursor-pointer" size={25} />
            </a>
            <a
              href="https://www.instagram.com/milobembe/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram className="cursor-pointer" size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
