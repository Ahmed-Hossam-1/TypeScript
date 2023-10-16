type Props = { children: JSX.Element };

const Heading = (props: Props) => {
  return (
    <div>
      <h1>{props.children}</h1>
    </div>
  );
};

export default Heading;
