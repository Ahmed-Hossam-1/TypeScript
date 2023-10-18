import { order, reStoced } from "./CakeSlice";
import { RootState } from "../../store/Store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

function CakeView() {
  const cakenum = useAppSelector((state: RootState) => state.cake.numberOfCake);
  const dispatch = useAppDispatch();
  return (
    <>
      <div>number of cake - {cakenum}</div>
      <button onClick={() => dispatch(order())}>Order cake</button>
      <button onClick={() => dispatch(reStoced(5))}>Restock cakes</button>
    </>
  );
}

export default CakeView;
