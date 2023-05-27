"use client"

import Tile from "./Tile";
import {
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiSwift,
  SiPython,
  SiPostgresql,
} from "@icons-pack/react-simple-icons";
import { motion } from "framer-motion";
import classNames from "classnames";
import { useState } from "react";

const items = [
  {
    name: "react",
    icon: <SiReact className="h-7 w-7" />,
    summary: "Along with Next.js for Full-Stack.",
  },
  {
    name: "typescript",
    icon: <SiTypescript className="h-6 w-6" />,
    summary: "Go-to language.",
  },
  {
    name: "tailwindcss",
    icon: <SiTailwindcss className="h-6 w-6" />,
    summary: "Go-to CSS tool.",
  },
  {
    name: "swift",
    icon: <SiSwift className="h-6 w-6" />,
    summary: "For Apple Development. Often with SwiftUI.",
  },
  {
    name: "python",
    icon: <SiPython className="h-6 w-6" />,
    summary: "Dabbling in ML/AI. Usually with Tensorflow.",
  },
  {
    name: "postgresql",
    icon: <SiPostgresql className="h-6 w-6" />,
    summary: "",
  },
];

export default function SkillsTile({ className }: { className?: string }) {
  const [selectedItem, setSelectedItem] = useState<
    (typeof items)[number] | undefined
  >();

  return (
    <Tile
      className={classNames(
        "flex flex-col justify-between bg-red-100/20 px-4 hover:-translate-y-1",
        className
      )}
    >
      <h1 className="mb-2 text-red-500/60">Skills</h1>
      <div className="flex items-center space-x-4 px-16">
        {items.map((item) => {
          const selected = selectedItem?.name === item.name;

          return (
            <div
              key={item.name}
              className={classNames(
                "relative cursor-pointer transition-colors",
                `hover:text-${item.name}`,
                {
                  "text-white": selected,
                  "hover:text-white": selected,
                }
              )}
              onClick={() => {
                setSelectedItem(selected ? undefined : item);
              }}
            >
              {selected && (
                <motion.div
                  className={classNames(
                    "absolute -inset-1 -z-10 rounded",
                    `bg-${item.name}`
                  )}
                  layoutId="selected-background"
                />
              )}
              {item.icon}
            </div>
          );
        })}
      </div>
      <div className="mt-3 overflow-hidden rounded-xl border border-gray-400/20 bg-white/40 p-4 dark:border-white/30 dark:bg-black/30 sm:h-24">
        <p className="opacity-70 transition-all">
          {selectedItem?.summary ?? <>Click for Summary.</>}
        </p>
      </div>
    </Tile>
  );
}
