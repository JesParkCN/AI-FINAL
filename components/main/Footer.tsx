import React from "react";
import {
    
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
  RxAccessibility,
  RxMobile,
  RxNotionLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] ">
        <div className="w-full flex flex-col items-center justify-center m-auto">
            <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">所在单位</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <FaYoutube />
                        <span className="text-[15px] ml-[6px]">山东理工职业学院</span>    
                    </p>
                    
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <span className="text-[15px] ml-[6px]">信息工程学院</span>    
                    </p>
                </div>
                
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">联系我们</div>
                   <p className="flex flex-row items-center my-[15px] cursor-pointer">
                   <RxMobile />
                        <span className="text-[15px] ml-[6px]">100****0000</span>    
                    </p>
                    
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                  
                        <span className="text-[15px] ml-[6px]">sdlgzy@hmail.com</span>    
                    </p>
                </div>
                <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                    <div className="font-bold text-[16px]">制作团队</div>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <RxAccessibility />  
                        <span className="text-[15px] ml-[6px]">盛聿铭</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                    <RxAccessibility />
                        <span className="text-[15px] ml-[6px]">李丙轩</span>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxAccessibility />
                        <span className="text-[15px] ml-[6px]">梁家豪</span>    
                    </p>
                </div>
            </div>

            <div className="mb-[20px] text-[15px] text-center">
                &copy; 山东理工职业学院信息工程学院 制作
            </div>
        </div>
    </div>
  )
}

export default Footer