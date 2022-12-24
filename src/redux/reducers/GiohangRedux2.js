const stateDefaultCart = {
  gioHang: [],
};

export const gioHangRedux2 = (state = stateDefaultCart, action) => {
  switch (action.type) {
    case "THEM_SAN_PHAM":
      {
        let gioHangCapNhat = [...state.gioHang];
        let index = gioHangCapNhat.findIndex(
          (sp) => sp.maSP === action.spGioHang.maSP
        );
        if (index !== -1) {
          gioHangCapNhat[index].soLuong += 1;
        } else {
          gioHangCapNhat.push(action.spGioHang);
        }
        state.gioHang = gioHangCapNhat;
        return { ...state };
      }
      break;
    case "XOA_SAN_PHAM":
      {
        let gioHangCapNhat = [...state.gioHang];
        let index = gioHangCapNhat.findIndex(
          (sp) => sp.maSP === action.spXoa.maSP
        );
        gioHangCapNhat.splice(index, 1);
        state.gioHang = gioHangCapNhat;
        return { ...state };
      }
      break;

    case "TANG_GIAM_SL": {
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex(
        (sp) => sp.maSP === action.spTangGiam.maSP
      );
      if (action.isFlag) {
        gioHangCapNhat[index].soLuong += 1;
      } else if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      } else if (window.confirm("Ban co chac xoa san pham")) {
        gioHangCapNhat.splice(index, 1);
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }

    default:
      {
        return { ...state };
      }
      break;
  }
};
