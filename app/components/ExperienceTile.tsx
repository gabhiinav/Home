"use client"

import Tile from "./Tile";
import Image from "next/image";
import classNames from "classnames";
import Avatar from "../../public/avatar.png";
import iSchoolConnect from "../../public/ischoolconnect.png"

const items = [
  {
    name: "",
    icon: (
      <Image
        className="h-11 w-11 rounded-lg"
        src={iSchoolConnect}
        alt="iSC"
      />
    ),
    title: "iSchoolConnect",
    summary: <>2024-2024</>,
  },
];

export default function BlogTile({ className }: { className?: string }) {
  return (
    <Tile
      className={classNames(
        "flex flex-col justify-between bg-orange-100/20 px-4 hover:rotate-2",
        className
      )}
    >
      <h1 className="mb-2 text-orange-500/60">Experience</h1>
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
