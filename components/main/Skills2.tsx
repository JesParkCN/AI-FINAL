import {
    Backend_skill,
    Frontend_skill,
    Full_stack,
    Skill_data,
  } from "@/constants";
  import React from "react";
  import SkillDataProvider from "../sub/SkillDataProvider";
  import SkillText2 from "../sub/SkillText2";
  
  const Skills = () => {
    return (
      <section
        id="skills"
        className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
        style={{ transform: "scale(0.9" }}
      >
        <SkillText2 />
  
       
  
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Frontend_skill.map((image, index2) => (
            <SkillDataProvider
              key={index2}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index2}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Backend_skill.map((image, index2) => (
            <SkillDataProvider
              key={index2}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index2}
            />
          ))}
        </div>
        <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
          {Full_stack.map((image, index2) => (
            <SkillDataProvider
              key={index2}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index2}
            />
          ))}
        </div>
        
  
        <div className="w-full h-full absolute">
          <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
            <video
              className="w-full h-auto"
              preload="false"
              playsInline
              loop
              muted
              autoPlay
              src=""
            />
          </div>
        </div>
      </section>
    );
  };
  
  export default Skills;
  