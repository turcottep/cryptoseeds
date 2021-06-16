import React from "react";
import NameForm from "./NameForm";
import Navbar from "./Navbar";

export default function LandingPage() {
  return (
    <div className="h-screen relative bg-coquille w-full">
      <div className="h-screen justify-between px-3 md:px-10 2xl:px-20 md:mx-auto flex flex-col items-center">
        <Navbar />

        <div className="flex h-full justify-between flex-col w-full items-center md:flex-row">
          <div className="flex justify-around flex-col w-full md:justify-around items-center text-center h-full my-4">
            <div className="flex-shrink w-auto md:w-full">
              <img
                className="w-full xl:w-4/5 flex-1 min-w-0 min-h-0"
                draggable="false"
                src="Evolve_title.svg"
              />
            </div>
            <div className="md:hidden flex-shrink w-auto md:w-full min-w-0 min-h-0">
              <img
                className="w-full flex-1 min-w-0 min-h-0"
                draggable="false"
                src="evolution.svg"
              />
            </div>
            <div className="text-center">
              <p className="md:block leading-normal text-gray-600 font-bold text-xl md:text-2xl">
                <span> 10,000 Seeds</span>
                <br />
                <span> 5 Rarity Levels </span>
                <br />
                <div className="relative">
                  <img
                    className="absolute top-0 z-0 w-full xl:w-4/5 flex-1 min-w-0 min-h-0"
                    draggable="false"
                    src="evolution_woosh.svg"
                  />
                  <span className="relative z-20"> 3 Evolutions </span>
                </div>
              </p>
            </div>
            <div className="hidden md:block w-full sm:mx-0 md:w-full my-4">
              <NameForm />
            </div>
          </div>
          <div className="hidden md:block flex-shrink w-auto md:w-full min-w-0 min-h-0">
            <img
              className="w-full flex-1 min-w-0 min-h-0"
              draggable="false"
              src="evolution.svg"
            />
          </div>
        </div>
        <div className="md:hidden w-full sm:mx-0 md:w-2/5 lg:w-2/5 my-4">
          <NameForm />
        </div>
      </div>
    </div>
  );
}
