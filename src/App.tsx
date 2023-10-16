// import SayHello from "./components/sayHello";
// import Heading from "./components/Heading";
// import Layout from "./components/Layout";
// import Stats from "./components/Stats";

import Input from "./components/Input";

// import Optional from "./components/Optional";
// import Button from "./components/Button";

const App = () => {
  // const obj = {
  //   firstName: "Ahmed",
  //   lastName: "Hossam",
  // };
  // const handelClick = (
  //   event: React.MouseEvent<HTMLButtonElement>,
  //   id: number
  // ) => {
  //   console.log(event.target);
  //   console.log(id);
  // };
  const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  return (
    <>
      {/* <SayHello obj={obj} />; */}
      {/* <Stats status="success" />
      <Layout>
        <Heading>
          <h1>hello</h1>
        </Heading>
      </Layout> */}
      {/* <Optional name="Ahmed" age={20}/> */}
      {/* <Button handelClick={handelClick} /> */}
      <Input handelChange={handelChange} value="" />
    </>
  );
};

export default App;
