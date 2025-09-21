import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
  {
    title: "JUN 2023",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-4">
          Internship at Netjets Europe
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
          Developed an automated solution to verify compliance of applications on the Electronic Flight Bag for crew members, improving efficiency and reducing manual checks.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/netjets.jpeg"
            alt="netjets"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "SEP 2024",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-4">
          Software Engineer at Brands&Ninjas (via Junitec)
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
          Developed a full-stack mobile application as part of a 4-developer team. Utilized agile methodologies with JIRA for project management, ensuring timely delivery and robust functionality.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/brands.png"
            alt="brands"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "JAN 2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-4">
          Assistant Researcher at INESC-ID
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
          Developing an oral communication system and mobile app for human-robot interaction to enhance AI-driven disaster response and support first responder collaboration.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/carma.jpeg"
            alt="carma"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "JUL 2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-4">
          Summer Internship at Sky Portugal
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
          Developed a version of Peacock using Apple’s new Liquid Glass (WWDC 2025) and shipped a feature to production. Collaborated in an Agile tvOS team of 8 developers, leveraging SwiftUI, UIKit, Xcode, tvOS, and Git for version control.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/sky.jpeg"
            alt="sky"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "SEP 2025",
    content: (
      <div>
        <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-4">
          Data Engineer at McKinsey & Company
        </p>
        <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-4">
          Designing and maintaining scalable data pipelines, optimizing workflows, and supporting advanced analytics projects. Working with <strong>PySpark</strong>, <strong>SQL</strong>, <strong>Azure</strong>, <strong>Databricks</strong>, and <strong>Oracle</strong> to deliver impactful, data-driven solutions while continuing to integrate my full-stack development expertise.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/mckinsey.webp"
            alt="mckinsey"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
];


  return (
    <div className="w-full mt-10" id="experience">
      <h1 className="heading">
        Changelog from <span className="text-purple-300">my journey</span>
      </h1>
      <Timeline data={data} />
    </div>
  );
}
