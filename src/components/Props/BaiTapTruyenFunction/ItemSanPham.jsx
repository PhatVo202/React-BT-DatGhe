import React, { Component } from "react";

export default class ItemSanPham extends Component {
  render() {
    let { item } = this.props;
    return (
      <>
        <div className="col-4">
          <div className="card">
            <img
              className="card-img-top img-fluid"
              src={item.img}
              alt
              width={250}
              height={300}
            />
            <div className="card-body">
              <h4 className="card-title">{item.name}</h4>
              <p className="card-text">{item.desc}</p>
              <button
                onClick={() => this.props.detailProduct(item)}
                className="btn btn-primary"
              >
                Detail
              </button>
            </div>
          </div>
        </div>
      </>
    );
  }
}
