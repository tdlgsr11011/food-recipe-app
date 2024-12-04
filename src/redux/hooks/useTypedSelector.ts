import { TypedUseSelectorHook, useSelector } from "react-redux";
import { IRootState } from "../store";

const useTypedSelector: TypedUseSelectorHook<IRootState> = useSelector;

export default useTypedSelector;
