# Mgic Hover (React Component)

Transform perspective and tilt effect for nested react components.
* [DEMO](https://shomalgan.github.io/magic-hover/) - See two examples

## Getting Started

First!
```
npm i magic-hover --save
```




## How to Use

Folow the example!

```
import MagicHover from "magic-hover";
import styles from "./style.css";

const options = {
  max: 40,
  reverse: true,
  perspective: 1000,
  scale: { x: 1, y: 1, z: 1 },
  rotate: 0,
  translate: { x: 0, y: 0 }
};
const App = () => (
  <div className="App">
    <MagicHover options={options} className={"simple-box"}>
    SIMPLE!
    </MagicHover>
  </div>
);
render(<App />, document.getElementById("root"));

```
Create your style.css file.

```
.simple-box {
    align-items: stretch;
    background: #004661;
    height: 228px;
    width: 254px;
    border-radius: 5px;
    position: relative;
    color: #fff;
    box-shadow: -2px 2px 2px rgba(0, 0, 0, 0.11);
    text-align: center;
    padding: 100px 0 0 0;
    margin-top: 27px;
}

```



## Authors

* **Ahmad Esmaeilzadeh**  - [Linkdin](https://www.linkedin.com/in/ahmad-esmaeilzadeh-68802a98/)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
