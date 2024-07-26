import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./styles.css";
import movieImage from "../assets/rush-hour-movie.jpg";

export default function StarRating({
  noOfStars = 5,
  description = "Rate this movie:",
}) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  function handleClick(getCurrentIndex) {
    setRating(getCurrentIndex);
  }

  function handleMouseEnter(getCurrentIndex) {
    setHover(getCurrentIndex);
  }

  function handleMouseLeave() {
    setHover(rating);
  }

  return (
    <div className="star-rating-container">
      <div className="star-rating">
        <img src={movieImage} alt="Movie" className="movie-img" />
        <h3>{description}</h3>

        {[...Array(noOfStars)].map((_, index) => {
          index += 1;

          return (
            <FaStar
              key={index}
              className={index <= (hover || rating) ? "active" : "inactive"}
              onClick={() => handleClick(index)}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() => handleMouseLeave()}
              size={40}
            />
          );
        })}
      </div>
    </div>
  );
}
