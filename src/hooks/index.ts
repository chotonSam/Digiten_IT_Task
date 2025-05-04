import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "./store";

// Custom hook to use the dispatch with the correct type
export const useAppDispatch = () => useDispatch<AppDispatch>();

// Custom hook to use the selector with the correct type
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
