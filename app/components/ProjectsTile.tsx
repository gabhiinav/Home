"use client";

import Tile from "./Tile";
import Image from "next/image";
import avatar from "../../public/avatar.png";
import chirp from "../../public/chirp.png"
import { useState } from "react";
import classNames from "classnames";

const items = [
  {
    name: "chirp",
    icon: <Image className="h-11 w-11 rounded-lg" src={chirp} alt="Chirp" />,
    url: "https://chirp-kohl-gamma.vercel.app/",
    title: "Chirp",
    summary: <>Minimal Message Board</>,
  },
  {
    name: "home",
    icon: <Image className="h-11 w-11 rounded-lg" src={avatar} alt="Home" />,
    url: "",
    title: "Home",
    summary: <>Personal Website</>,
  },
];

export default function ProjectsTile({ className }: { className?: string }) {
  const [selectedItem, setSelectedItem] = useState<
    (typeof items)[number] | undefined
  >();

  return (
    <Tile
      className={classNames(
        "flex flex-col justify-between bg-green-100/20 px-4 hover:-translate-y-1",
        className
      )}
    >
      <h1 className="mb-2 text-green-500/60">Projects</h1>
      <div className="mt-2 flex flex-col">
        <div
          className="item-container"
          style={{ maxHeight: "180px", overflowY: "auto" }}
        >
          {items.map((item) => {
            return (
              <a
                key={item.name}
                className="mt-2 flex items-center overflow-hidden rounded-xl border border-gray-400/20 bg-white/40 p-4 hover:opacity-90 dark:border-white/30 dark:bg-black/30 item"
                href={item.url}
              >
                {item.icon}
                <div className="ml-3 flex flex-col">
                  <h2 className="">{item.title}</h2>
                  <p className="text-sm opacity-60">{item.summary}</p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </Tile>
  );
}


