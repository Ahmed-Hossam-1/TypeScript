import { Product } from "../types/app";

type ProductProps = {
  productData: Product[];
};

function Products(props: ProductProps) {
  return (
    <div>
      {props.productData.map((pro, i) => (
        <div key={i}>
          <h1>{pro.name}</h1>
          <h1>{pro.desc}</h1>
          <h1>{pro.id}</h1>
          <h1>{pro.price}</h1>
          <h1>=========</h1>
        </div>
      ))}
    </div>
  );
}

export default Products;
