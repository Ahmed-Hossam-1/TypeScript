import { order, reStoced } from "./icecram";
import { useState } from "react";
import { RootState } from "../../store/Store";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

function IcecreamView() {
  const [quantity, setQuantity] = useState<string>("1");

  const icenum = useAppSelector(
    (state: RootState) => state.icecream.numberOfIccream
  );
  const dispatch = useAppDispatch();
  return (
    <>
      <div>number of icecream - {icenum}</div>
      <input
        type="number"
        value={quantity}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setQuantity(e.target.value)
        }
      />
      <button onClick={() => dispatch(order(+quantity))}>Order icecream</button>
      <button onClick={() => dispatch(reStoced(+quantity))}>
        Restock icecream
      </button>
    </>
  );
}

export default IcecreamView;
