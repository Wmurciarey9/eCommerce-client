import { ArrowLeftOutlined, ArrowRightOutlined, InsertEmoticon } from "@mui/icons-material";
import { useRef, useState } from "react";
import { sliderItems } from "../../data";
import "./slider.scss";

export const Slider = () => {
  const [slideNumber, setSlideNumber] = useState(0);

  const listRef = useRef();

  const handleClick = (direction) => {
    if (direction === "left") {
      setSlideNumber(slideNumber > 0 ? slideNumber - 1 : 2);
      listRef.current.style.transform = `translateX(${slideNumber * -100}vw)`;
    } else {
      setSlideNumber(slideNumber > 0 ? slideNumber - 1 : 2);
      listRef.current.style.transform = `translateX(${slideNumber * -100}vw)`;
    }
  };

  return (
    <div className="slider">
      <div className="arrow arrowLeft" direction="left" onClick={() => handleClick("left")}>
        <ArrowLeftOutlined onClick={() => handleClick("left")} />
      </div>
      <div className="content" ref={listRef}>
        {sliderItems.map((item) => (
          <div className="slide" style={{ backgroundColor: item.bg }} key={item.id}>
            <div className="imgContainer">
              <img src={item.img} alt="" />
            </div>
            <div className="infoContainer">
              <h1 className="title">{item.title}</h1>
              <p className="description">{item.desc}</p>
              <button>SHOP NOW</button>
            </div>
          </div>
        ))}
      </div>
      <div className="arrow arrowRight" direction="right" onClick={() => handleClick("right")}>
        <ArrowRightOutlined className="sliderArrow right" onClick={() => handleClick("right")} />
      </div>
    </div>
  );
};
