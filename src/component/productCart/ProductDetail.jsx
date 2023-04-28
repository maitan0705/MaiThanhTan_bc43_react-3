import React, { Component } from "react";

class ProductDetail extends Component {
  render() {
    let { spChiTiet } = this.props;
    console.log(this.props)
    return (
      <div className="flex flex-row">
        <div className="basis-1/4">
          <img src={spChiTiet.image} alt="" />
        </div>
        
          <div className="basis-3/4">
            <h3>Thông số kỹ thuật</h3>
            <table className="table-auto">
              <thead>
                <tr>
                  <th>Tên</th>
                  <td>{spChiTiet.name}</td>
                </tr>
                <tr>
                  <th>Giá</th>
                  <td>{spChiTiet.price}</td>
                </tr>
                <tr>
                  <th>Miêu tả</th>
                  <td>{spChiTiet.description}</td>
                </tr>
                <tr>
                  <th>Ô tả</th>
                  <td>{spChiTiet.shortDescription}</td>
                </tr>
               
              </thead>
            </table>
          </div>
        
      </div>
    );
  }
}

export default ProductDetail;
