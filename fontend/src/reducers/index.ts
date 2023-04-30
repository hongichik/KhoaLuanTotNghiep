import { combineReducers } from "redux";
import DetailProductReducer from './DetailProductReducer';
import PayProductReducer from "./PayProductReducer";

const rootReducer = combineReducers({
    DetailProductReducer: DetailProductReducer,
    PayProductReducer: PayProductReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
