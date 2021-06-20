import { Page1Style } from "../Styles/Page1Style";
import { Parallax } from "react-parallax";

export default function Page1() {
  return (
    <Parallax
      bgImage="./images/sky.png"
      strength={-300}
    >
    <Parallax
      bgImage="./images/landscape.png"
      strength={-300}
      bgImageStyle={{opacity: 1}}
    >
        <div style={Page1Style.title}>Trekk</div>
    </Parallax>
    </Parallax>
  );
}
