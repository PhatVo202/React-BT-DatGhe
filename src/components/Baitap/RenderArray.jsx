import React, { Component } from "react";

export default class RenderArray extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mangSanPham: [
        { maSP: 1, tenSP: "iphone X", gia: 1000 },
        { maSP: 2, tenSP: "iphone Xs", gia: 2000 },
        { maSP: 3, tenSP: "iphone Xs Max", gia: 3000 },
      ],
    };
  }
  renderProduct = () => {
    return this.state.mangSanPham.map((item, index) => {
      return (
        <tr key={index}>
          <td>{item.maSP}</td>
          <td>{item.tenSP}</td>
          <td>{item.gia}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <>
        <div className="container">
          <h1 className="bg-dark text-center text-white">San Pham</h1>
          <table className="table">
            <thead>
              <th>Ma San Pham</th>
              <th>Ten San Pham</th>
              <th>Gia San Pham</th>
            </thead>
            <tbody>{this.renderProduct()}</tbody>
          </table>
        </div>
      </>
    );
  }
}
