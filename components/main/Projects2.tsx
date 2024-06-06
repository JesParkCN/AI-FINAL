import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects2"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        人工智能的应用场景
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/11.png"
          title="AI电商"
          description="人工智能（AI）在商业超市的应用正变得越来越广泛，它通过提高效率、降低成本、增强顾客体验以及提供数据分析等方式，对零售行业产生深远的影响。"
        />
        <ProjectCard
          src="/44.png"
          title="AI教育"
          description="人工智能（AI）在教育领域的应用日益增多，无论是个性化学习、智能辅导还是虚拟助教，人工智能都时时刻刻的改变了传统的教育模式和传统的学习体验。"
        />
        <ProjectCard
          src="/33.png"
          title="AI医疗"
          description="人工智能（AI）在医疗领域的应用正迅速发展，其中不乏医学影像分析、药物研发，它在改善病人护理、提高医疗效率和促进医学研究方面发挥着重要作用。"
        
        />
      </div>
    </div>
  );
};

export default Projects;
