// type Prop = { name: string };
type Prop = {
  obj: {
    firstName: string;
    lastName: string;
  };
};

const sayHello = ({ obj }: Prop) => {
  return (
    <div>
      <h1>
        Hello {obj.firstName} {obj.lastName}
      </h1>
    </div>
  );
};

export default sayHello;
