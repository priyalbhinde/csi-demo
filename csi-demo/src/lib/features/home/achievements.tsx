"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

interface Achievement {
  metric: string;
  value: string;
  prefix?: string;
  postfix?: string;
}

const achievementsList: Achievement[] = [
  {
    metric: "Events",
    value: "10",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Users",
    value: "1000+",
  },
  {
    metric: "Members",
    value: "350+",
  },
  {
    metric: "Years",
    value: "20",
  },
];

const AchievementsSection: React.FC = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-blue-400 sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between shadow-lg shadow-slate-700/30 dark:shadow-slate-400/20">
        {achievementsList.map((achievement, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-slate-900 text-4xl font-bold flex flex-row dark:text-white">
                {achievement.prefix}
                <AnimatedNumbers
                    includeComma
                    animateToNumber={parseInt(achievement.value)}
                    locale="en-US"
                    className="text-slate-900 text-4xl font-bold dark:text-slate-50"
                    />
                {achievement.postfix}
              </h2>
              <p className="text-blue-900 text-base dark:text-blue-400">{achievement.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AchievementsSection;
