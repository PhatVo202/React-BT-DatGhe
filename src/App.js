import logo from "./logo.svg";
import "./App.css";
import BaiTapComponent from "./components/Baitap/BaiTapComponent";
import BaiTapTruyenFunction from "./components/Props/BaiTapTruyenFunction/BaiTapTruyenFunction";
import BaiTapGioHang from "./components/BaiTapGioHang/BaiTapGioHang";
import BaiTapGioHangRedux from "./components/BaiTapRedux/BaiTapGioHangRedux";
import BaiTapForm from "./components/BaiTapForm/BaiTapForm";
import BaiTapRedux2 from "./components/BaiTapReduxTes2/BaiTapRedux2";
import BaiTapDatGhe from "./components/BaiTapDatGhe/BaiTapDatGhe";

function App() {
  return (
    <div className="App">
      {/* <BaiTapComponent />
      <BaiTapTruyenFunction />
      <BaiTapGioHang /> */}
      {/* <BaiTapGioHangRedux /> */}
      <BaiTapForm />
      {/* <BaiTapRedux2 /> */}
      {/* <BaiTapDatGhe /> */}
    </div>
  );
}

export default App;
