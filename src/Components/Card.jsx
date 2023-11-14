const Card = ({ tittle, text, image }) => {
  return (
    <div className="h-72 w-80 flex flex-col gap-6">
      <img src={image} alt="img" className="h-12 w-14" />
      <text className="font-bold">
        {tittle}
      </text>
      <text className="text-gray-600">
        {text}
      </text>
    </div>
  );
};

export default Card;
