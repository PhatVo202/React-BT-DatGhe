import { DAT_GHE, HUY_GHE } from "../types/BaiTapGheType";
const state_Default = {
  danhSachGheDangDat: [],
};

export const BaiTapGheReducer = (state = state_Default, action) => {
  switch (action.type) {
    case DAT_GHE:
      {
        const data = [...state.danhSachGheDangDat];
        let index = data.findIndex(
          (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
        );
        if (index !== -1) {
          data.splice(index, 1);
        } else {
          data.push(action.ghe);
        }
        state.danhSachGheDangDat = data;
        return { ...state };
      }
      break;
    case HUY_GHE:
      {
        const data = [...state.danhSachGheDangDat];
        let index = data.findIndex(
          (gheDangDat) => gheDangDat.soGhe === action.ghe.soGhe
        );

        data.splice(index, 1);
        state.danhSachGheDangDat = data;
        return { ...state };
      }
      break;

    default:
      break;
  }
  return { ...state };
};
