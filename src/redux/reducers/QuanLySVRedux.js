const stateDefault = {
  mangSV: [
    {
      maSV: 1,
      hoTen: "Thai",
      sdt: "0929440643",
      email: "thai@gmail.com",
    },
    {
      maSV: 2,
      hoTen: "Nguyen Van B",
      sdt: "0929440642",
      email: "9a10voletruongphat@gmail.com",
    },
  ],
  selectedUser: null,
};

export const QuanLySVReducer = (state = stateDefault, action) => {
  const { type, payload } = action;
  switch (type) {
    case "ADD_STUDENT":
      {
        const mangSvUpdate = [...state.mangSV, payload];
        state.mangSV = mangSvUpdate;
      }
      break;
    case "SET_SELECTED_STUDENT":
      {
        state.selectedUser = payload;
      }
      break;

    case "UPDATE_STUDENT":
      {
        state.mangSV = state.mangSV.map((item) =>
          item.maSV === payload.maSV ? payload : item
        );
      }
      break;
    case "REMOVE_STUDENT":
      {
        // const mangSvUpdate = [...state.mangSV];
        // let index = mangSvUpdate.findIndex((sv) => sv.maSV === payload.maSV);
        // mangSvUpdate.splice(index, 1);
        // state.mangSV = mangSvUpdate;

        state.mangSV = state.mangSV.filter((item) =>
          item.maSV === payload.maSV ? false : true
        );
      }
      break;
    default:
      {
      }
      break;
  }
  return { ...state };
};
