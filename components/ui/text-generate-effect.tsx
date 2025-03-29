"use client";
import React, { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export const TerminalGenerateEffect = ({
  words,
  className,
  speed = 50,
}: {
  words: string;
  className?: string;
  speed?: number;
}) => {
  const processedWords = words.replace(/\\n/g, '\n');
  
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < processedWords.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + processedWords[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, processedWords, speed]);

  const formattedText = displayedText.split('\n').map((line, i) => (
    <React.Fragment key={i}>
      {i > 0 && <br />}
      {line}
    </React.Fragment>
  ));

  return (
    <div
      className={cn(
        "bg-black text-green-500 font-mono text-xl p-4 rounded-lg",
        className
      )}
    >
      <span className="text-white">{">"}</span>
      <span>{formattedText}</span>
      <span className="animate-pulse text-green-500">|</span>
    </div>
  );
};