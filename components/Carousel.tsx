"use client";

import React from "react";

// Top row tech stack
const topRowTech = [
  { src: "databricks.png", name: "Databricks" },
  { src: "docker.png", name: "Docker" },
  { src: "spark-white.png", name: "PySpark" },
  { src: "python.png", name: "Python" },
  { src: "pytorch.png", name: "PyTorch" },
  { src: "numpy.png", name: "Numpy" },
  { src: "postgre.png", name: "PostgreSQL" },
  { src: "mongodb.svg", name: "MongoDB" },
];

// Bottom row tech stack
const bottomRowTech = [
  { src: "aws.png", name: "AWS" },
  { src: "azure.png", name: "Azure" },
  { src: "re.svg", name: "React" },
  { src: "ts.svg", name: "TypeScript" },
  { src: "tail.svg", name: "Tailwind" },
  { src: "kubernetes.png", name: "Kubernetes" },
  { src: "js.png", name: "JavaScript" },
  { src: "java.png", name: "Java" },
  { src: "nodejs.svg", name: "Node.js" }
];

export default function MovingTechCarousel() {
  return (
    <div className="w-full overflow-hidden py-10 relative bg-transparent">
      {/* Title */}
      <h1 className="heading text-2xl md:text-3xl font-bold text-center">
        A preview of{" "}
        <span className="text-purple-300">my tech stack</span>
      </h1>

      {/* Top Row: Right → Left */}
      <div className="scrolling-wrapper overflow-hidden relative mt-30">
        <div className="flex animate-scrollLeft gap-8">
          {topRowTech.concat(topRowTech).map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 h-28 flex flex-col items-center justify-center"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-20 object-contain mb-2"
              />
              <span className="text-sm text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Row: Left → Right */}
      <div className="scrolling-wrapper overflow-hidden relative mt-10 mb-20">
        <div className="flex animate-scrollRight gap-8">
          {bottomRowTech.concat(bottomRowTech).map((item, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-24 h-28 flex flex-col items-center justify-center"
            >
              <img
                src={item.src}
                alt={item.name}
                className="w-full h-20 object-contain mb-2"
              />
              <span className="text-sm text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollLeft {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        @keyframes scrollRight {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scrollLeft {
          display: flex;
          width: max-content;
          animation: scrollLeft 40s linear infinite; /* slower, seamless */
        }

        .animate-scrollRight {
          display: flex;
          width: max-content;
          animation: scrollRight 40s linear infinite; /* slower, seamless */
        }
      `}</style>
    </div>
  );
}
