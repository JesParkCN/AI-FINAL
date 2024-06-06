"use client";
import Image from "next/image";//引入图片组件
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
const HeroContent = () => {
  return (
    <motion.div
    id="about-me"
    initial="Hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        <motion.div
        variants={slideInFromTop}
        className='Welcome-box py-[8px] px-[4px] border border-[#3b82f6] opacity-[0.9]' //外边框颜色,下面是图标颜色
        >
                <SparklesIcon className='text-[#3b82f6] mr-[10px] h-5 w-5' />          
                <h1 className='Welcome-text text-[13px]'>Artificial Intelligence</h1>
        </motion.div> 
      <motion.div
      variants={slideInFromLeft(0.5)}
      className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
      >
        一个关于
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-700'>人工智能</span>
        的科普网站
        </motion.div>
        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
            人工智能（Artificial Intelligence），英文缩写为AI。是新一轮科技革命和产业变革的重要驱动力量，是研究、开发用于模拟、延伸和扩展人的智能的理论、方法、技术及应用系统的一门新的技术科学。
        </motion.p>
        <motion.a
        variants={slideInFromLeft(1)}
        className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
        >
          了解更多
        </motion.a>
      </div>
      <motion.div
      variants={slideInFromRight(0.8)}
      className='w-full h-full flex justify-center items-center'
      >
        <Image 
        src="/mainIconsdark.png" 
        alt="" 
        height={50} 
        width={650}/>
      </motion.div>
    </motion.div>
  )
}

export default HeroContent
