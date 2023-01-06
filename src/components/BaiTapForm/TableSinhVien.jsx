import React, { Component } from "react";
import { connect } from "react-redux";

class TableSinhVien extends Component {
  state = {
    keyword: "",
  };
  renderMangSinhVien = () => {
    const filterData = this.props.mangSinhVien.filter((item) => {
      return (
        item.hoTen.toLowerCase().indexOf(this.state.keyword.toLowerCase()) !==
        -1
      );
    });
    return filterData.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSV}</td>
          <td>{item.hoTen}</td>
          <td>{item.sdt}</td>
          <td>{item.email}</td>
          <td>
            <button
              onClick={() =>
                this.props.dispatch({
                  type: "SET_SELECTED_STUDENT",
                  payload: item,
                })
              }
              className="btn btn-primary mr-2"
            >
              Sua
            </button>
            <button
              onClick={() =>
                this.props.dispatch({
                  type: "REMOVE_STUDENT",
                  payload: item,
                })
              }
              className="btn btn-danger"
            >
              Xoa
            </button>
          </td>
        </tr>
      );
    });
  };

  render() {
    console.log(this.props);
    return (
      <div>
        <div className="form-group w-50">
          <input
            type="text"
            placeholder="Search by full name..."
            className="form-control mb-4"
            onChange={(event) => this.setState({ keyword: event.target.value })}
          />
        </div>

        <table className="table">
          <thead>
            <tr className="bg-dark text-white">
              <th>Ma SV</th>
              <th>Ho ten</th>
              <th>SDT</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>{this.renderMangSinhVien()}</tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProp = (state) => {
  return {
    mangSinhVien: state.QuanLySVReducer.mangSV,
  };
};

// const mapDispatchToProp = (dispatch) => {
//   return {
//     xoaSV: (item) => {
//       dispatch({
//         type: "REMOVE_STUDENT",
//         payload: item,
//       });
//     },
//   };
// };

export default connect(mapStateToProp)(TableSinhVien);
