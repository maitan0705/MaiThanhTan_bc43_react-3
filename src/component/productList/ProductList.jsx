import React, { Component } from "react";
import data from "../../data.json";
import ProductItem from "./ProductItem";
import ProdCart from "../productCart/ProdCart";
import ProductDetail from "../productCart/ProductDetail";
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
    spChiTiet: {
      id: 1,
      name: "Adidas Prophere",
      alias: "adidas-prophere",
      price: 350,
      description: "The adidas Primeknit upper wraps the foot with a supportive fit that enhances movement.\r\n\r\n",
      shortDescription: "The midsole contains 20% more Boost for an amplified Boost feeling.\r\n\r\n",
      quantity: 995,
      soLuong: 0,
      image: "https://svcy3.myclass.vn/images/adidas-prophere.png"
    },
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
  xemChiTiet = (spClick) =>{
    this.setState({
      spChiTiet: spClick
    })
  }
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
        <ProductDetail spChiTiet={this.state.spChiTiet}/>
        <div className="grid grid-cols-3 gap-3 flex-wrap p-4 border">
          {data.map((item) => {
            return (
              <div key={item.id}>
                <ProductItem prodInfo={item} themGioHang={this.themGioHang}  xemChiTiet={this.xemChiTiet}/>
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
