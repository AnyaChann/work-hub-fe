import React from 'react';
import './SearchBar.css';

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="Vị trí tuyển dụng, tên công ty" />
      <select>
        <option value="">Địa điểm</option>
        <option value="hanoi">Hà Nội</option>
        <option value="hochiminh">Hồ Chí Minh</option>
      </select>
      <button className="btn btn-primary">Tìm kiếm</button>
    </div>
  );
};

export default SearchBar;