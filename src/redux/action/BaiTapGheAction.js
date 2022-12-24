import { DAT_GHE, HUY_GHE } from "../types/BaiTapGheType";
export let datGheAction = (ghe) => {
  return {
    type: DAT_GHE,
    ghe,
  };
};

export let huyGheAction = (ghe) => {
  return {
    type: HUY_GHE,
    ghe,
  };
};
