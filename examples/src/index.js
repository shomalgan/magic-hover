/***  examples/src/index.js ***/
import React from "react";
import { render } from "react-dom";
import MagicHover from "../../src";
import styles from "./index.css";
const shadow = {
  max: 40,
  reverse: true,
  perspective: 2000,
  scale: { x: 1, y: 1, z: 1 },
  rotate: -1,
  translate: { x: 15, y: 15 }
};
const options = {
  max: 40,
  reverse: true,
  perspective: 1000,
  scale: { x: 1, y: 1, z: 1 },
  rotate: 5,
  translate: { x: 0, y: 0 }
};
const options2 = {
  max: 40,
  rotate: 1,
  perspective: 1000,
  scale: { x: 1, y: 1, z: 1 },
  translate: { x: 10, y: 10 }
};

const simple = {
  max: 40,
  reverse: true,
  perspective: 1000,
  scale: { x: 1, y: 1, z: 1 },
  rotate: 0,
  translate: { x: 0, y: 0 }
};
const App = () => (
  <div className="App">
    <div className={"wrap"}>
      <MagicHover options={shadow} className={"shadow"}>
        <MagicHover options={options} className={"box"}>
          <MagicHover options={options2} className={"inner"}>
           NESTED SAMPLE
          </MagicHover>
        </MagicHover>
      </MagicHover>
    </div>
    <div className={"wrap"}>
      <MagicHover options={simple} className={"simple-box"}>
        SIMPLE
      </MagicHover>
    </div>
    <div className={'footer'}>Ahmad Esmaeilzadeh-<a href="https://www.linkedin.com/in/ahmad-esmaeilzadeh-68802a98/">Linkedin</a></div>
  </div>
);
render(<App />, document.getElementById("root"));
