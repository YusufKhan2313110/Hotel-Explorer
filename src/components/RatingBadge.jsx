function RatingBadge({ rating }) {
  return (
    <span className="bg-yellow-400 text-black px-3 py-1 rounded-full font-bold">
      ⭐ {rating}
    </span>
  );
}

export default RatingBadge;