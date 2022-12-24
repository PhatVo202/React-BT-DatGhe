import React, { Component } from "react";
import { connect } from "react-redux";

class FormSinhVien extends Component {
  state = {
    values: {
      maSV: "",
      hoTen: "",
      sdt: "",
      email: "",
    },
    errors: {
      maSV: "a",
      hoTen: "b",
      sdt: "",
      email: "",
    },
  };

  renderButton = () => {
    return (
      <button type="submit" className="btn btn-success text-right">
        Them sinh vien
      </button>
    );
  };

  handleChange = (e) => {
    //lấy giá trị mội lần value input thay đổi bởi người dùng
    let tagInput = e.target;
    let { name, value, type, pattern } = tagInput;

    //tao ra bien hung gia tri error
    let errorMessage = "";

    //Kiểm tra bất kì rong
    if (value.trim() === "") {
      errorMessage = name + " " + "Khong dc de trong";
    }

    //Kiem tra email
    if (type === "number" || type === "email") {
      const regular = new RegExp(pattern);
      if (!regular.test(value)) {
        errorMessage = name + " Khong dung dinh dang";
      }
    }

    //kiem tra number
    if (type === "number") {
      const regular = new RegExp(pattern);
      if (!regular.test(value)) {
        errorMessage = name + " Khong dung dinh dang";
      }
    }

    //tao ra bien value, error sau khi cap nhat
    let values = { ...this.state.values, [name]: value };
    let errors = { ...this.state.errors, [name]: errorMessage };

    //thay doi lai gia tri de render lai giao dien
    this.setState({
      values: values,
      errors: errors,
    });
  };

  handleSubmit = (e) => {
    //do type submit nen browser tu load lai trang
    e.preventDefault(); //can su kien submit load lai trang
    this.props.themSinhVien(this.state.values);
  };

  render() {
    return (
      <div className="card mb-5">
        <div className="card-header bg-dark text-white">
          <h3>Thong tin sinh vien</h3>
        </div>
        <div className="card-body">
          <form onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div action="" className="form-group">
                  <p>Ma SV:</p>
                  <input
                    type="text"
                    className="form-control"
                    name="maSV"
                    value={this.state.values.maSV}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.maSV}</p>
                </div>
              </div>
              <div className="col-6">
                <div action="" className="form-group">
                  <p> Ho ten:</p>
                  <input
                    type="text"
                    className="form-control"
                    name="hoTen"
                    value={this.state.values.hoTen}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.hoTen}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-6">
                <div action="" className="form-group">
                  <p>SDT:</p>
                  <input
                    type="number"
                    className="form-control"
                    pattern="^(0|[1-9][0-9]*)$"
                    name="sdt"
                    value={this.state.values.sdt}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.sdt}</p>
                </div>
              </div>
              <div className="col-6">
                <div action="" className="form-group">
                  <p> Email:</p>
                  <input
                    type="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    className="form-control"
                    name="email"
                    value={this.state.values.email}
                    onChange={this.handleChange}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-12 text-right">{this.renderButton()}</div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    themSinhVien: (sinhVien) => {
      const action = {
        type: "THEM_SINH_VIEN",
        sinhVien,
      };
      dispatch(action);
    },
  };
};

export default connect(null, mapDispatchToProps)(FormSinhVien);
