interface ICardInfo {
  id: number;
  paragraph: string;
  details: string;
}

const Card = ({ id, paragraph, details }: ICardInfo) => {
  return (
    <div className="flex flex-col justify-center items-center space-y-4 h-1/3 bg-red-500 w-1/3 rounded-xl">
      <h1 className="text-2xl font-semibold">ID: {id}</h1>
      <div className="flex justify-center items-center gap-4    ">
        <p className="text-2xl font-semibold">{paragraph}</p>
        <p className="text-2xl font-semibold">{details}</p>
      </div>
    </div>
  );
};

export default Card;
