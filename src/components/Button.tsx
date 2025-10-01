interface IButton {
  onClick: () => void;
}

const Button = ({ onClick }: IButton) => {
  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-8 rounded-lg"
      onClick={onClick}
    >
      <span>Login</span>
    </button>
  );
};

export default Button;
