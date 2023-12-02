import { buttonProps } from "@/interfaces/IShared";

const Button = ({ text, onClick, aria }: buttonProps) => {
  return (
    <button
      className="bg-primary py-1 px-4 rounded-lg hover:bg-primary/80 duration-500 inline-block text-white"
      onClick={onClick}
      aria-label={aria}
    >
      {text}
    </button>
  );
};

export default Button;
