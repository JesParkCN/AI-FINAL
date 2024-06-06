"use client";
import Image from "next/image";//引入图片组件
import React from 'react'
import {motion} from 'framer-motion'
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion'
import { SparklesIcon } from '@heroicons/react/16/solid'
const HeroContent = () => {
  return (
    
    <motion.div
    initial="Hidden"
    animate="visible"
    className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'
    >
      <motion.div
      variants={slideInFromRight(0.8)}
      className='w-full h-full flex justify-center items-center'
      >
        <Image 
        src="/mainIconsdark.png" 
        alt="work icons" 
        height={130} 
        width={1000}/>
      </motion.div>
      <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
        
      <motion.div
      variants={slideInFromLeft(0.5)}
      className='flex flex-col gap-6 mt-6 text-6xl text-bold text-white max-w-[600px] w-auto h-auto'
      >
        
      <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-violet-700'>人工智能的前沿技术</span>
        
        </motion.div>
        <motion.p
        variants={slideInFromLeft(0.8)}
        className='text-lg text-gray-400 my-5 max-w-[600px]'
        >
            人工智能（AI）是一个快速发展的领域，不断涌现出新的技术和应用。包括自然语言处理、语音识别和图像处理、计算机视觉、自动驾驶技术、医疗诊断、社交媒体分析、大模型技术、合成数据等。
        </motion.p>
        <motion.a
        variants={slideInFromLeft(1)}
        className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]'
        >
          了解更多
        </motion.a>
      </div>
      
    </motion.div>
  )
}

export default HeroContent
