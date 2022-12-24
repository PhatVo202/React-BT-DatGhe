const stateDefault = {
  mangSV: [
    {
      maSV: 1,
      hoTen: "Nguyen Van A",
      sdt: "0929440642",
      email: "9a10voletruongphat@gmail.com",
    },
  ],
};

export const QuanLySVReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_SINH_VIEN":
      {
        const mangSvUpdate = [...state.mangSV, action.sinhVien];
        state.mangSV = mangSvUpdate;
        return { ...state };
      }
      break;

    default:
      {
        return { ...state };
      }
      break;
  }
};
