type Props = {
  name: string;
  age?: number;
};

function Optional({ name, age }: Props) {
  return (
    <div>
      <h1>
        my name is {name} age is {age}
      </h1>
    </div>
  );
}

export default Optional;
