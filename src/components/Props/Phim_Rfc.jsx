import React from "react";

export default function Phim_Rfc(props) {
  const { phim_input } = props;
  // const phim = props.phim_input;
  return (
    <>
      <div className="card">
        <img className="card-img-top" src={phim_input.hinhAnh} alt />
        <div className="card-body">
          <h4 className="card-title">{phim_input.moTa}</h4>
          <p className="card-text">{phim_input.ngayKhoiChieu}</p>
        </div>
      </div>
    </>
  );
}
