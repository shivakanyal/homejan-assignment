import React, { Component } from "react";
import styles from "./CeleBrityCardBox.module.css";
import CelebrityCard from "../CelebrityCard/CelebrityCard";
import SecondaryHeading from "../SecondaryHeading/SecondaryHeading";

import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 850, itemsToShow: 3 },
  { width: 1000, itemsToShow: 4 },
];
class CelebrityCardBox extends Component {
  state = {
    data: [
      { img: "images/benny.png", singingType: "Folk", name: "Benny Dayal" },
      {
        img: "images/vijay.png",
        singingType: "Bollywood",
        name: "Vijay Yesudas ",
      },
      {
        img: "images/andrea.jpg",
        singingType: "Folk",
        name: "Andrea Jeremiah",
      },
      { img: "images/shilpa.png", singingType: "Folk", name: "Shipla Rao" },
    ],
  };
  render() {
    return (
      <div>
        <SecondaryHeading heading="Upcoming Shows" />
        <div className={styles.celebrityCardsWrapper}>
          <Carousel breakPoints={breakPoints} showArrows={false}>
            {this.state.data.map(({ img, singingType, name }) => (
              <CelebrityCard img={img} singingType={singingType} name={name} />
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default CelebrityCardBox;
