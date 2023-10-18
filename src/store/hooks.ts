import { useSelector, useDispatch, TypedUseSelectorHook } from "react-redux";
import { RootState, Dispatch } from "./Store";

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = useDispatch<Dispatch>;
