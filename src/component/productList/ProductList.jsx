import React, { Component } from "react";
import data from "../../data.json";
import ProductItem from "./ProductItem";
import ProdCart from "../productCart/ProdCart";
class ProductList extends Component {
  state = {
    arrGioHang: [
      {
        id: 1,
        name: "Adidas Prophere",
        alias: "adidas-prophere",
        price: 350,
        quantity: 995,
        soLuong: 1,
        image: "https://svcy3.myclass.vn/images/adidas-prophere.png",
      },
    ],
  };
  xoaHetSP = ()=>{
    this.setState({
      arrGioHang: [

      ]
    })
  }
  tangGiamSoLuong = (id, soluong) => {
    let spGh = this.state.arrGioHang.find((item) => item.id === id);
    if( spGh ){
      spGh.soLuong += soluong
        if(spGh.soLuong <1 ){
          if(window.confirm('Bạn hết tiền hả ?')){
            this.xoaSanPham(spGh.id)
            return
          } else{
            spGh.soLuong -= soluong;
          }
        }
    }
    this.setState({
      arrGioHang: this.state.arrGioHang,
    })
  };
  xoaSanPham = (idSp) => {
    let index = this.state.arrGioHang.findIndex((item) => item.id === idSp.id);
    if (index !== -1) {
      this.state.arrGioHang.splice(index, 1);
    }
    this.setState({
      arrGioHang: this.state.arrGioHang,
    });
  };
  themGioHang = (spClick) => {
    console.log(spClick);
    spClick = { ...spClick, soLuong: 1 };

    let gioHang = this.state.arrGioHang;
    let spGh = gioHang.find((item) => item.id === spClick.id);
    if (spGh) {
      spGh.soLuong += 1;
    } else {
      gioHang.push(spClick);
    }
    this.setState({
      arrGioHang: gioHang,
    });
  };
  render() {
    return (
      <div className="w-[1028px] mx-auto ">
        <h1 className="text-center">Bài tập giỏ hàng</h1>
        <div className="my-5">
          <ProdCart
            arrGioHang={this.state.arrGioHang}
            xoaSanPham={this.xoaSanPham}
            tangGiamSoLuong={this.tangGiamSoLuong}
            xoaHetSP={this.xoaHetSP}
          />
        </div>
        <div className="grid grid-cols-3 gap-3 flex-wrap p-4 border">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <ProductItem prodInfo={item} themGioHang={this.themGioHang} />
              </div>
            );
          })}
          {/* <div className="basis-1/3">
            <ProductItem />
          </div>
          <div className="basis-1/3">
            <ProductItem />
          </div>
          <div className="basis-1/3">
            <ProductItem />
          </div> */}
        </div>
      </div>
    );
  }
}

export default ProductList;
