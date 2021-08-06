import React from "react";
import NameForm from "./NameForm";
import Navbar from "./Navbar";
import SketchComponent from "./sketches";

export default function LandingPage() {
  return (
    <div className="h-auto relative bg-gray-800 w-full">
      <div className="h-auto justify-between px-3 md:px-10 2xl:px-20 md:mx-auto flex flex-col items-center">
        <Navbar />

        <div className="flex h-auto justify-between flex-col w-full items-center md:flex-row">
          <div className="flex justify-around flex-col w-full md:justify-around items-center text-center h-full my-4">
            <span className="text-gray-200 text-4xl font-bold w-auto md:w-full">
              Infinite Generative Art
            </span>

            <div className="">
              <SketchComponent />
            </div>
            <div className="hidden md:block w-full sm:mx-0 md:w-full my-4">
              <NameForm />
            </div>
          </div>
        </div>
        <div className="md:hidden w-full sm:w-1/2 md:w-2/5 lg:w-2/5 my-4">
          <NameForm />
        </div>
      </div>
    </div>
  );
}
