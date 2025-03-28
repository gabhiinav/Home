"use client"

import Tile from "./Tile";
import { EnvelopeIcon } from "@heroicons/react/24/solid";
import { SiGithub, SiLinkedin } from "@icons-pack/react-simple-icons";
import classNames from "classnames";

export default function ContactTile({ className }: { className?: string }) {
  return (
    <Tile
      className={classNames(
        "flex flex-col justify-between bg-blue-100/20 px-4 hover:-rotate-2",
        className
      )}
    >
      <h1 className="mb-2 text-blue-500/70">Contact</h1>
      <div className="mt-10 flex items-center space-x-5 self-end">
        <a href="https://github.com/gabhiinav">
          <SiGithub className="h-6 w-6 hover:text-purple-500" />
        </a>
        <a href="https://www.linkedin.com/in/abhinav-gupta-1759b428a/">
          <SiLinkedin className="h-6 w-6 hover:text-[#E4405F]" />
        </a>
        <a href="mailto:gabhiinav@gmail.com">
          <EnvelopeIcon className="h-7 w-7 hover:text-green-500" />
        </a>
      </div>
    </Tile>
  );
}