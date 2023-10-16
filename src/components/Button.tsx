type ButtonProps = {
  handelClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

function Button({ handelClick }: ButtonProps) {
  return (
    <>
      <button onClick={(event) => handelClick(event, 5)}>Click</button>
    </>
  );
}

export default Button;
