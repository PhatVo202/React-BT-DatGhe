import React, { Component } from "react";
import sanpham from "../../data/sanpham.json";
import ItemSanPham from "./ItemSanPham";

export default class SanPham extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sanPhamChiTiet: sanpham[0],
    };
  }

  renderProduct = () => {
    return sanpham.map((item) => {
      return <ItemSanPham item={item} detailProduct={this.detailProduct} />;
    });
  };

  detailProduct = (sp) => {
    this.setState({
      sanPhamChiTiet: sp,
    });
  };

  render() {
    const { sanPhamChiTiet } = this.state;
    return (
      <>
        <div className="container">
          <div class="row">{this.renderProduct()}</div>
          <div className="row">
            <div className="col-5">
              <h1>{sanPhamChiTiet.name}</h1>
              <img src={sanPhamChiTiet.img} alt="" width={250} height={250} />
            </div>
            <div className="col-7">
              <table className="table">
                <h1>Cau hinh</h1>
                <tr>
                  <th>Screen:</th>
                  <th>{sanPhamChiTiet.screen}</th>
                </tr>
                <tr>
                  <th>backCamera</th>
                  <th>{sanPhamChiTiet.backCamera}</th>
                </tr>
                <tr>
                  <th>frontCamera</th>
                  <th>{sanPhamChiTiet.frontCamera}</th>
                </tr>
                <tr>
                  <th>type</th>
                  <th>{sanPhamChiTiet.type}</th>
                </tr>
                <tr>
                  <th>price</th>
                  <th>{sanPhamChiTiet.price}</th>
                </tr>
              </table>
            </div>
          </div>
        </div>
      </>
    );
  }
}
