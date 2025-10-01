interface IInput {
  placeholder: string;
  id: string;
  type: string;
  event?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({ placeholder, id, type, event }: IInput) => {
  return (
    <input
      placeholder={placeholder}
      id={id}
      type={type}
      className="px-4 border border-gray-300 rounded-md h-10 w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
      onChange={event}
    />
  );
};

export default Input;
