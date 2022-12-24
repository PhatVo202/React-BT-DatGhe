//Khoi tao gia tri ban dau cua Store
const stateGioHang = {
  gioHang: [],
};

export const GioHangReducer = (state = stateGioHang, action) => {
  switch (action.type) {
    case "THEM_SAN_PHAM": {
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
    case "XOA_SAN_PHAM": {
      let gioHangCapNhat = [...state.gioHang];
      gioHangCapNhat.splice(action.index, 1);
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "XOA_MASP": {
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex((sp) => sp.maSP === action.maSP);
      gioHangCapNhat.splice(index, 1);
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
    case "TANG_GIAM_SL": {
      let gioHangCapNhat = [...state.gioHang];
      let index = gioHangCapNhat.findIndex((sp) => sp.maSP === action.item);
      if (action.isFlag) {
        gioHangCapNhat[index].soLuong += 1;
      } else if (gioHangCapNhat[index].soLuong > 1) {
        gioHangCapNhat[index].soLuong -= 1;
      } else if (window.confirm("Ban co muon xoa SP?")) {
        gioHangCapNhat.splice(index, 1);
      }
      state.gioHang = gioHangCapNhat;
      return { ...state };
    }
  }
  return { ...state };
};
