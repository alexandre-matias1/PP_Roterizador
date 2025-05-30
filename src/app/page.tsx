"use client";

import { Map } from "@/app/components/MapGoogle";
import { Header } from "./components/Header";
import { LeftSide } from "./components/Left-Side";

export default function Page() {
  return (
    <>
        <div className="flex h-svh overflow-y-auto">
          <div className="w-200 bg-zinc-950 flex flex-col overflow-y-auto">
            <Header />
            <div className="flex flex-col  mt-5 ">
              <LeftSide />
            </div>
          </div>
          <Map />
        </div>
    </>
  );
}
