import Image from "next/image";
import React from "react";

interface Props {
  src: string;
  title: string;
  description: string;
  children?: React.ReactNode; 
}

const ProjectCard = ({ src, title, description, children }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61]">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
      </div>
       {/* 子元素插槽 */}
       {children && (
        <div className="project-actions">
          {children}
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
