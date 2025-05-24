"use client";

import { Map } from "@/app/components/MapGoogle";
import { Header } from "./components/Header";
import { LeftSide } from "./components/Left-Side";

export default function Page() {
  return (
    <>
      <div className="flex">
        <div className="w-200 h-svh bg-zinc-950 flex flex-col">
          <Header />
          <div className="flex flex-col items-center mt-9">
            {/* <LeftSide /> */}
          </div>
        </div>
        <Map />
      </div>
    </>
  );
}
