import React, { Component } from "react";
import DemoProps from "../Props/DemoProps";
import ChangeColorCar from "./ChangeColorCar";
import Content from "./Content";
import Footer from "./Footer";
import Header from "./Header";
import ProductList from "./ProductList";
import RenderArray from "./RenderArray";
import RenderPhim from "./RenderPhim";
import Slider from "./Slider";

export default class BaiTapComponent extends Component {
  render() {
    return (
      <div>
        {/* <Header />
        <Slider />
        <ProductList />
        <Content /> */}
        <ChangeColorCar />
        <RenderArray />
        <RenderPhim />
        <DemoProps />
      </div>
    );
  }
}
