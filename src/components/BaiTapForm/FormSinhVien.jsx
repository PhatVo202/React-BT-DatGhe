import React, { Component } from "react";
import { connect } from "react-redux";

class FormSinhVien extends Component {
  constructor(props) {
    super(props);
    this.formRef = React.createRef();
  }
  state = {
    values: {
      maSV: "",
      hoTen: "",
      sdt: "",
      email: "",
    },
    errors: {
      maSV: "",
      hoTen: "",
      sdt: "",
      email: "",
    },
  };

  handleSubmit = (e) => {
    e.preventDefault();

    if (!e.target.checkValidity()) {
      return;
    }

    if (this.props.selectedUser) {
      this.props.dispatch({
        type: "UPDATE_STUDENT",
        payload: this.state.values,
      });
    } else {
      this.props.dispatch({
        type: "ADD_STUDENT",
        payload: this.state.values,
      });
    }
  };

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({
      values: {
        ...this.state.values,
        [name]: value,
      },
    });
  };

  handleBlur = (e) => {
    let message = "";
    const { validity, title, name } = e.target;
    const { valueMissing, patternMismatch } = validity;

    if (valueMissing) {
      message = `${title} is required`;
    }
    if (patternMismatch) {
      message = `${title} is invalid partern`;
    }

    this.setState({
      errors: {
        ...this.state.errors,
        [name]: message,
      },
    });
    // if(!validity){
    //   message =
    // }
  };

  static getDerivedStateFromProps(nextProps, currentState) {
    if (
      nextProps.selectedUser &&
      currentState.values.maSV !== nextProps.selectedUser.maSV
    ) {
      //chuyển giá trị của props thành state
      currentState.values = nextProps.selectedUser;
    }
    return currentState;
  }

  render() {
    const {
      maSV = "",
      hoTen = "",
      sdt = "",
      email = "",
    } = this.state.values || {};
    return (
      <div className="card mb-5">
        <div className="card-header bg-dark text-white">
          <h3>Thong tin sinh vien</h3>
        </div>
        <div className="card-body">
          <form noValidate ref={this.formRef} onSubmit={this.handleSubmit}>
            <div className="row">
              <div className="col-6">
                <div action="" className="form-group">
                  <p>Ma SV:</p>
                  <input
                    value={maSV}
                    title="Ma SV"
                    type="text"
                    className="form-control"
                    name="maSV"
                    required
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  <p className="text-danger">{this.state.errors.maSV}</p>
                </div>
              </div>
              <div className="col-6">
                <div action="" className="form-group">
                  <p> Ho ten:</p>
                  <input
                    value={hoTen}
                    title="Name"
                    type="text"
                    required
                    className="form-control"
                    name="hoTen"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
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
                    value={sdt}
                    type="number"
                    title="Number"
                    required
                    name="sdt"
                    className="form-control"
                    // required
                    // pattern="^(0|[1-9][0-9]*)$"
                    // name="sdt"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  <p className="text-danger">{this.state.errors.sdt}</p>
                </div>
              </div>
              <div className="col-6">
                <div action="" className="form-group">
                  <p> Email:</p>
                  <input
                    value={email}
                    type="email"
                    title="Email"
                    required
                    className="form-control"
                    name="email"
                    pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                    onChange={this.handleChange}
                    onBlur={this.handleBlur}
                  />
                  <p className="text-danger">{this.state.errors.email}</p>
                </div>
              </div>
            </div>
            <div className="row ">
              <div className="col-12 text-right">
                <button
                  disabled={!this.formRef.current?.checkValidity()}
                  className="btn btn-success"
                >
                  Them Sinh Vien
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedUser: state.QuanLySVReducer.selectedUser,
  };
};

export default connect(mapStateToProps)(FormSinhVien);
