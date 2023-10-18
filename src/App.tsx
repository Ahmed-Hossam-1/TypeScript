// import SayHello from "./components/sayHello";
// import Heading from "./components/Heading";
// import Layout from "./components/Layout";
// import Stats from "./components/Stats";

import CakeView from "./featchers/cake/CakeView";
import IcecreamView from "./featchers/icecream/IcecreamView";
import UserList from "./featchers/users/UserList";

// import CounterUseRducer from "./components/CounterUseRducer";

// import { useState } from "react";
// import Products from "./components/Products";

// import Input from "./components/Input";
// import Container from "./components/Container";

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
  // const handelChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   console.log(e.target.value);
  // };
  // const [login, setLogin] = useState<boolean>({} as boolean); //Type Assertion

  // const LogIn = () => {
  //   setLogin(!login);
  //   console.log(login);
  // };

  // const productData = [
  //   { id: 1, desc: "This is Product 1", price: 25, name: "iphone 11" },
  //   { id: 2, desc: "This is Product 2", price: 25, name: "iphone 12" },
  //   { id: 3, desc: "This is Product 3", price: 25, name: "iphone 13" },
  //   { id: 4, desc: "This is Product 4", price: 25, name: "iphone 14" },
  // ];
  return (
    <>
      {/* <button onClick={LogIn}>login</button> */}

      {/* <SayHello obj={obj} />; */}
      {/* <Stats status="success" />
      <Layout>
        <Heading>
          <h1>hello</h1>
        </Heading>
      </Layout> */}
      {/* <Optional name="Ahmed" age={20}/> */}
      {/* <Button handelClick={handelClick} /> */}
      {/* <Input handelChange={handelChange} value="" /> */}
      {/* <Container styles={{ border: "1px soild black", padding: "1rem" }} /> */}
      {/* <Products productData={productData} /> */}
      {/* <CounterUseRducer /> */}
      <h1>Hello App</h1>
      <CakeView />
      <IcecreamView />
      <UserList />
    </>
  );
};

export default App;
