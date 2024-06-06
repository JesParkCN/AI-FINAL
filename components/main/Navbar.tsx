import { Socials } from "@/constants";
import Image from "next/image";
import React from "react"; 

const Navbar = () => {
  return (
    
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#4775ff94]/50 bg-[#03001417] backdrop-blur-md z-50 px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <a
          href="#about-me"
          className="h-auto w-auto flex flex-row items-center"
        > 
          

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
            人工智能
          </span>
        </a>

        <div className="w-[800px] h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#4775ff94] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200">
            <a href="#about-me" className="cursor-pointer">
              首页
            </a>
            <a href="#skills" className="cursor-pointer">
              发展历程
            </a>
            <a href="#projects2" className="cursor-pointer">
              应用场景
            </a>
            <a href="#about-me2" className="cursor-pointer">
              前沿技术
            </a>
            <a href="#jiami" className="cursor-pointer">
              使用体验
            </a>
            <a href="#projects" className="cursor-pointer">
              学习资源
            </a>
          </div>
        </div>

        <div className="flex flex-row gap-5">
          {Socials.map((social) => (
            <Image
              src={social.src}
              alt={social.name}
              key={social.name}
              width={24}
              height={24}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
