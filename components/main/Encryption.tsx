"use client";
import React from "react";

import { motion } from "framer-motion";
import { slideInFromTop } from "@/utils/motion";
import Image from "next/image";

const Encryption = () => {
  return (
    <div className="flex flex-row relative items-center justify-center min-h-screen w-full h-full" id="jiami">
      <div className="absolute w-auto h-auto top-0 z-[5]">
        <motion.div
          
          variants={slideInFromTop}
          className="text-[40px] font-medium text-center text-gray-200"
        >
          关于
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            {" "}
          人工智能
          {" "}
          </span>
          的使用体验
        </motion.div>
        <div className="cursive text-[20px] font-medium text-center text-gray-300">
        人工智能（AI）的使用体验取决于多种因素，包括人工智能的安全性、学习能力、用户界面、准确性、交互性等。
        </div>
      </div>

      <div className="flex flex-col items-center justify-center translate-y-[-50px] absolute z-[20] w-auto h-auto">
        <div className="flex flex-col items-center group cursor-pointer w-auto h-auto">
         
          <Image
            src="/yhty.png"
            alt="Lock Main"
            width={1280}
            height={720}
            className=" z-10"
          />
        </div>
      </div>
      <div className="absolute z-[20] bottom-[10px] px-[5px]">
       
      </div>
    </div>
  );
};

export default Encryption;
