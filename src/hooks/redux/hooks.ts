import { useDispatch, useSelector, TypedUseSelectorHook } from "react-redux";
import type {RootState, AppDisptach} from "../../store"

export const useAppDispatch = () => useDispatch<AppDisptach>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector