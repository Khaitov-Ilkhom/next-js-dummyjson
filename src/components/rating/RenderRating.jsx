import {AiFillStar, AiOutlineStar} from "react-icons/ai";

const RenderRating = ({rate}) => {
  if (rate > 5) {
    rate = 5;
  }

  const fullStars = Math.floor(rate);
  const emptyStars = 5 - fullStars;

  const stars = Array.from({ length: fullStars }, (_, index) => (
      <AiFillStar key={`full-${index}`} className="fill-amber-500" />
  ));
  const starsE = Array.from({ length: emptyStars }, (_, index) => (
      <AiOutlineStar key={`empty-${index}`} className="fill-amber-500" />
  ));

  return (
      <div className="starsWrapper flex items-center gap-2 mt-1">
        <div className="flex items-center gap-1 w-24">
          {stars} {starsE}
        </div>
      </div>
  );
}
export default RenderRating