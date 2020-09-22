import React, { Fragment }  from 'react';


const TopBar = () => {
  return (
  <div className="app-top-bar">
    <a href="#">
      <h1>Products</h1>
    </a>
    <a className="button fancy-button">
      <i class="material-icons">Check List</i>
      <i class="fa fa-cart-plus" aria-hidden="true"></i>
    </a>
  </div>
  )
};

export default TopBar;