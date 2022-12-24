import { combineReducers } from "redux";

import { GioHangReducer } from "./GioHangReducer";
import { QuanLySVReducer } from "./QuanLySVRedux";
import { gioHangRedux2 } from "./GiohangRedux2";
import { BaiTapGheReducer } from "./BaiTapGheReducer";
//store tổng ứng dụng
export const rootReducer = combineReducers({
  // nơi sẽ chứa các reducer cho nghiệp vụ (store con)
  GioHangReducer: GioHangReducer,
  QuanLySVReducer,
  gioHangRedux2,
  BaiTapGheReducer,
});
