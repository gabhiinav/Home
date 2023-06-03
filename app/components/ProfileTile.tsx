"use client"

import Tile from "./Tile";
import Image from "next/image";
import {
  ArrowPathRoundedSquareIcon,
} from "@heroicons/react/24/solid";
import avatar from "../../public/avatar.png";
import Gradient from "./Gradient";
import FlippableTile from "./FlippableTile";
import { useCallback, useState } from "react";
import classNames from "classnames";

export default function ProfileTile({ className }: { className?: string }) {
  const [flipped, setFlipped] = useState(false);

  const toggle = useCallback(() => {
    setFlipped(!flipped);
  }, [flipped]);

  return (
    <FlippableTile
      className={classNames("relative", className)}
      front={
        <Tile className="flex h-full flex-col items-center justify-center bg-indigo-200/10 py-40 sm:py-20">
          <Image className="h-16 w-16 rounded-full" src={avatar} alt="Avatar" />
          <p className="relative mt-2 items-end text-xl">
            Abhinav
          </p>

          <p className="mt-2 opacity-60">Web / iOS Developer</p>

          <button
            className="absolute right-5 bottom-5 rounded-full border border-gray-400/20 bg-white/40 p-3 dark:border-white/30 dark:bg-black/40"
            onClick={() => toggle()}
          >
            <ArrowPathRoundedSquareIcon className="h-5 w-5 opacity-60" />
          </button>
        </Tile>
      }
      back={
        <Tile className="flex h-full flex-col items-center justify-center bg-violet-200/10">
          <div>
            <p>CS Student.</p>

            <p className="mt-3"></p>
            <p className=""></p>

            <p className="mt-3"></p>
            <p className=""></p>
            <p className=""></p>
            <p className=""></p>

            <p className="mt-3"></p>
            <p className=""></p>
            <p className=""></p>

            <p className="mt-3"></p>
            <p className=""></p>
          </div>

          <button
            className="absolute right-5 bottom-5 rounded-full border border-gray-400/20 bg-white/30 p-3 dark:border-white/30 dark:bg-black/40"
            onClick={() => toggle()}
          >
            <ArrowPathRoundedSquareIcon className="h-5 w-5 opacity-60" />
          </button>
        </Tile>
      }
      flipped={flipped}
    >
      <Gradient className="bottom-0 right-0 h-36 w-16 bg-green-500/50 duration-500 dark:bg-amber-400/50" />
    </FlippableTile>
  );
}
