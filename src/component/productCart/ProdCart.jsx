import React, { Component } from "react";

export default class ProdCart extends Component {
  render() {
    let { arrGioHang, xoaSanPham , tangGiamSoLuong, xoaHetSP} = this.props;
    return (
      <div className="text-black">
        <div>
          <h3 className=" py-2 pl-2"> Giỏ hàng</h3>
        </div>
        <hr />
        <div className="pl-3">
          <table className=" table-fixed w-full text-black">
            <thead>
              <tr>
                <th>Mã Sp</th>
                <th>Hình Ảnh</th>
                <th>Tên Sp</th>
                <th>Số Lượng</th>
                <th>Đơn Giá</th>
                <th>Thành tiền</th>
                <th> </th>
              </tr>
            </thead>
          </table>
          <hr />
          <table className=" table-fixed w-full text-black">
            <tbody>
              {arrGioHang.map((item) => (
                <>
                  <tr key={item.id}>
                    <th>{item.id}</th>
                    <th>
                      <div>
                        <img className="m-0 w-full" src={item.image} alt="" />
                      </div>
                    </th>
                    <th>{item.name}</th>
                    <th>
                      <button className="py-[2px] rounded-xl px-2 bg-green-600"
                      onClick={()=>{
                      tangGiamSoLuong(item.id, 1)
                      }}
                      >
                        +
                      </button>
                      {item.soLuong}
                      <button className="py-[2px] rounded-xl px-2 bg-green-600"
                      onClick={()=>{
                        tangGiamSoLuong(item.id, -1)
                      }}
                      >
                        -
                      </button>
                    </th>
                    <th>{item.price}</th>
                    <th>{item.price * item.soLuong}</th>
                    <th>
                      <button
                        className="py-2 px-5 bg-red-600 text-white rounded-md"
                        onClick={() => xoaSanPham(item)}
                      >
                        Xoa
                      </button>
                    </th>
                  </tr>
                </>
              ))}
            </tbody>
          </table>
        </div>
        <hr />
        <div className="text-right text-white mt-3 text-lg">
          <button className="py-1 rounded-xl mx-3 px-5 bg-[#777]"
          onClick={()=> xoaHetSP()}
          >Delete</button>
        </div>
      </div>
    );
  }
}
