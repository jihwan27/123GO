import { useState } from "react";
import { Carousel } from "react-bootstrap";
import styles from "../../styles/main/main-slide.module.css";

function MainSlide() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };

  return (
    <div className={styles.main_slide}>
    <Carousel activeIndex={index} onSelect={handleSelect} className={styles.main_slide_body}>      
      <Carousel.Item className={styles.main_slide_item}>
        <img
          src="/logo192.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.main_slide_item}>
        <img
          src="/logo192.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className={styles.main_slide_item}>
        <img
          src="/logo192.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default MainSlide;