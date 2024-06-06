import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        人工智能的学习资源
      </h1>
      
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/h11.png"
          title="浙江大学胡浩基教授【全套机器学习】公开课"
          description="全网最通俗易懂的AI课程，不愧是顶尖讲师！"
        />
        <ProjectCard
          src="/h3.png"
          title="2022吴恩达机器学习AI课程"
          description="这是吴恩达佬团队在Coursera新开设的机器学习课程."
        />
        <ProjectCard
          src="/h2.png"
          title="【吴恩达亲授】适用于所有人的人工智能课程（中字）"
          description="在本课程中，您将学习：通用AI术语背后的含义，包括神经网络，机器学习，深度学习和数据科学 -人工智能实际上可以做和不能做的事情."
        />
      </div>
    </div>
  );
};

export default Projects;
