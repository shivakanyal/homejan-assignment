import Circle from "../Circle/Circle";
import styles from "./CircleBox.module.css";
import { Component } from "react";
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },

  { width: 500, itemsToShow: 2, itemsToScroll: 2 },
  { width: 700, itemsToShow: 3, itemsToScroll: 2 },
  { width: 898, itemsToShow: 4 },
];
class CircleBox extends Component {
  state = {
    CircleData: [
      {
        number: 0,
        label: "Label",
        image: "../../assets/images/Vector.png",
      },
      { number: 0, label: "Label", image: "images/Calendar.png" },
      { number: 0, label: "Label", image: "images/Calendar.png" },
      { number: 0, label: "Label", image: "images/Calendar.png" },
    ],
  };
  render() {
    return (
      <div className={styles.circleContainer}>
        <Carousel
          breakPoints={breakPoints}
          showArrows={false}
          autoTabIndexVisibleItems={false}
        >
          {this.state.CircleData.map(({ number, label, image }) => (
            <Circle number={number} label={label} image={image} />
          ))}
        </Carousel>
      </div>
    );
  }
}
export default CircleBox;
