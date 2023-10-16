type Props = {
  handelChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
};

function Input({ handelChange, value }: Props) {
  return <input type="text" value={value} onChange={handelChange} />;
}

export default Input;
