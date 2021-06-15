import React from "react";
import NameForm from "./NameForm";
import Navbar from "./Navbar";

export default function LandingPage() {
  return (
    <div className="h-screen relative bg-coquille w-full">
      <div className="h-screen justify-between px-3 md:px-10 2xl:px-20 md:mx-auto flex flex-col items-center">
        <Navbar />

        <div className="flex h-full justify-evenly md:justify-between flex-col w-full items-center md:flex-row">
          <div className="flex justify-between flex-col w-full md:justify-around items-center text-center md:h-full my-4">
            <div className="flex-shrink w-auto md:w-full">
            <img
              className="w-full flex-1 min-w-0 min-h-0"
              draggable="false"
              src="Evolve_title.svg"
            />
              {/* <h1 className="md:block leading-normal text-gray-600 text-4xl md:text-3xl xl:text-3xl "> */}
                {/* <img draggable="false" className="w-full" src="title.svg" /> */}
                {/* <span> The First NFT that </span>
                <br />
                <span> Evolves </span>
              </h1> */}
            </div>
            <div className="flex-shrink w-auto md:w-full min-w-0 min-h-0">
            <img
              className="w-full flex-1 min-w-0 min-h-0"
              draggable="false"
              src="plants.svg"
            />
          </div>
            <div className="text-center">
              <p className="md:block leading-normal text-gray-600 text-2xl md:text-3xl xl:text-3xl ">
                <span> 10,000 Seeds</span>
                <br />
                <span> 5 Rarity Levels </span>
                <br />
                <span> 3 Evolutions </span>
                <br />
                <span> 1 Pot Of Seeds </span>
              </p>
            </div>
            <div className="hidden w-full md:visible md:w-1/2 lg:w-4/5 my-4">
              <NameForm />
            </div>
          </div>
        </div>
        <div className="md:hidden w-full sm:mx-0 md:w-2/5 lg:w-2/5 my-4">
          <NameForm />
        </div>
      </div>
    </div>
  );
}
