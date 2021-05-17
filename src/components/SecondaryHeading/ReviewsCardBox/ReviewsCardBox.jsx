import SecondaryHeading from "../SecondaryHeading";
import React, { Component } from "react";
import ReviewsCard from "../../ReviewsCard/ReviewsCard";
import styles from "./ReviewsCardBox.module.css";

// import Carousel from "react-multi-carousel";
// import "react-multi-carousel/lib/styles.css";
import Carousel from "react-elastic-carousel";
const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 800, itemsToShow: 3 },
  { width: 900, itemsToShow: 4 },
];
class ReviewsCardBox extends Component {
  state = {
    data: [
      {
        image: "images/testimonial1",
        flag: "images/us.png",
        name: "Hellen Jummy",
        location: "PALO ALTO , CA",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. ",
      },
      {
        image: "images/testimonial2",
        flag: "images/IT.png",
        name: "Hellen Jummy",
        location: "PALO ALTO , CA",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. ",
      },
      {
        image: "images/testimonial3",
        flag: "images/us.png",
        name: "Hellen Jummy",
        location: "PALO ALTO , CA",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vitae in donec in nisi vitae. Vestibulum pellentesque eget laoreet adipiscing. ",
      },
    ],
  };
  render() {
    return (
      <div>
        <SecondaryHeading heading="Reviews" />
        <div className={styles.reviewsBoxWrapper}>
          <Carousel breakPoints={breakPoints} showArrows={false}>
            {this.state.data.map(({ ...props }) => (
              <ReviewsCard {...props} />
            ))}
          </Carousel>
        </div>
      </div>
    );
  }
}

export default ReviewsCardBox;
