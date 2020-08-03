import React from "react";

function Filter(props) {
  const { count, sort, size, handleChangeSort, handleChangeSize } = props;
  return (
    <div className='row'>
      <div className='col-md-4 col-12'>
        <p className='font-weight-bold'>{count} products found</p>
      </div>
      <div className='col-md-4 col-12'>
        <label className='font-weight-bold'>
          Order by:
          <select
            className='form-control'
            value={sort}
            onChange={handleChangeSort}
          >
            <option value=''>Select</option>
            <option value='lowest'>Lowest to highest</option>
            <option value='highest'>highest to lowest</option>
          </select>
        </label>
      </div>
      <div className='col-md-4 col-12'>
        <label className='font-weight-bold'>
          Filter size:
          <select
            className='form-control'
            value={size}
            onChange={handleChangeSize}
          >
            <option value=''>All</option>
            <option value='x'>XS</option>
            <option value='s'>S</option>
            <option value='m'>M</option>
            <option value='l'>L</option>
            <option value='xl'>XL</option>
            <option value='xxl'>XXL</option>
          </select>
        </label>
      </div>
    </div>
  );
}

export default Filter;
