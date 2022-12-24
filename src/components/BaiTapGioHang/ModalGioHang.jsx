import React, { Component } from "react";

export default class ModalGioHang extends Component {
  render() {
    let { gioHang, xoaGioHang, tangGiamSl } = this.props;
    return (
      <div>
        <div>
          <div
            className="modal fade"
            id="modelId"
            tabIndex={-1}
            role="dialog"
            aria-labelledby="modelTitleId"
            aria-hidden="true"
          >
            <div className="modal-dialog" role="document">
              <div
                className="modal-content"
                style={{ maxWidth: "900px", width: "900px" }}
              >
                <div className="modal-header">
                  <h5 className="modal-title">Modal title</h5>
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span aria-hidden="true">×</span>
                  </button>
                </div>
                <div className="modal-body">
                  <table className="table">
                    <thead>
                      <tr>
                        <td>Ma SP</td>
                        <td>Hinh anh</td>
                        <td>Ten SP</td>
                        <td>SL</td>
                        <td>Gia</td>
                        <td>Thanh Phan</td>
                      </tr>
                    </thead>
                    <tbody>
                      {gioHang.map((spGioHang, index) => {
                        return (
                          <tr key={index}>
                            <td>{spGioHang.maSP}</td>
                            <td>
                              <img
                                src={spGioHang.hinhAnh}
                                alt="#"
                                width={50}
                                height={50}
                              />
                            </td>
                            <td>{spGioHang.tenSP}</td>
                            <td>
                              <button
                                className="btn btn-primary"
                                onClick={() => tangGiamSl(spGioHang.maSP, true)}
                              >
                                +
                              </button>
                              {spGioHang.soLuong}
                              <button
                                className="btn btn-primary"
                                onClick={() =>
                                  tangGiamSl(spGioHang.maSP, false)
                                }
                              >
                                -
                              </button>
                            </td>
                            <td>{spGioHang.giaBan.toLocaleString()}</td>
                            <td>
                              {(
                                spGioHang.giaBan * spGioHang.soLuong
                              ).toLocaleString()}
                            </td>
                            <td>
                              <button
                                onClick={() => xoaGioHang(spGioHang.maSP)}
                                className="btn btn-danger"
                              >
                                Xoa
                              </button>
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                    <tfoot>
                      <tr>
                        <td colSpan={5}></td>
                        <td>Total:</td>
                        <td>
                          {gioHang.reduce((total, item) => {
                            return (total += item.giaBan * item.soLuong);
                          }, 0)}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-dismiss="modal"
                  >
                    Close
                  </button>
                  <button type="button" className="btn btn-primary">
                    Save
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
