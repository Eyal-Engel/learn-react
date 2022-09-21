import { AiOutlinePlus } from "react-icons/ai";
import "./Card.css";

const Card = (props) => {
  const headline = props.cards.headline;
  const addLabel = props.cards.addLabel;
  const image = props.cards.image;
  const url = props.cards.url;

  return (
    <div className="Card">
      <div className="headline">{headline}</div>
      <a href={url} className="add">
        <h4>{addLabel}</h4>
        <AiOutlinePlus
          style={{
            marginTop: "4px",
            marginLeft: "5px",
            fill: "rgb(116, 172, 255)",
          }}
        />
      </a>
      <div className="image_background">
        <img className="cardPhoto" src={image} alt="Card Logo"></img>
      </div>
    </div>
  );
};

export default Card;
