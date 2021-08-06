import React, { Component } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";

import { range } from "../utils/utils";
import Const from "../utils/constants";
import { Router, useRouter } from "next/router";

const P5Wrapper = dynamic(import("react-p5-wrapper"), {
  ssr: false,
  loading: () => <div className="sketch-holder">Loading...</div>,
});

const titles = ["Attractor", "Spin", "Bounce", "Other"];

class SketchComponent extends Component {
  render() {
    const TOTAL_SKETCHES = 3; //Const.sketchesCount;
    return (
      <main>
        <Head>
          <title>daily p5</title>
        </Head>
        <div>
          <div className="flex flex-col sm:flex-row flex-wrap justify-around">
            {range(TOTAL_SKETCHES).map((i) => {
              const ind = i + 1;
              const sketch = require(`../sketches/d${ind}`).default;
              return (
                <div key={`sketch-${ind}`} className="m-4">
                  <a
                    className="primary-button"
                    onClick={() => console.log("Going to sketch")}
                  >
                    <div className=" rounded-sm">
                      <P5Wrapper sketch={sketch(300, 300)} />
                    </div>
                    <span className="text-gray-200 pt-2 ">
                      {titles[ind - 1]}
                    </span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </main>
    );
  }
}

export default SketchComponent;
