import Image from "next/image";
import React from "react";
import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
  const data = [
    {
      title: " JUN 2023",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-8">
            Did my first internship at Netjets Europe.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
            Developed an automated solution to verify the compliance of
            applications on the Electronic Flight Bag for crew members.
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
      title: "JUN 2024",
      content: (
        <div>
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-8">
            Did my sencond internship this time at Quidgest.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
            Collaborated in a team to enhance the company’s chatbot by
            integrating image-to-database functionality and the ChatGPT API for
            improved interactions.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/quidgest.jpeg"
              alt="quidgest"
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
          <p className="text-neutral-800 dark:text-neutral-200 text-xl md:text-3xl font-bold mb-8">
            Started as an Assistant Researcher at INESC-ID.
          </p>
          <p className="text-neutral-800 dark:text-neutral-200 text-md md:text-lg font-normal mb-8">
            I am developing an oral communication system and a mobile app for
            human-robot interaction, enhancing AI-driven disaster response and
            first responder collaboration.
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
  ];
  return (
    <div className="w-full mt-10" id="experience">
      <h1 className="heading">
        Changelog from{` `}
        <span className="text-purple-300"> my journey</span>
      </h1>
      <Timeline data={data} />
    </div>
  );
}
