import React from "react";
import { connect } from "react-redux";
import { filterProducts, sortProducts } from "../actions/productActions";

function Filter(props) {
  const { sort, size } = props;

  return (
    <div className='row'>
      <div className='col-md-4 col-12'>
        <p className='font-weight-bold'>
          {props.filteredProducts.length} products found
        </p>
      </div>
      <div className='col-md-4 col-12'>
        <label className='font-weight-bold'>
          Order by:
          <select
            className='form-control'
            value={sort}
            onChange={(e) =>
              props.sortProducts(props.filteredProducts, e.target.value)
            }
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
            onChange={(e) =>
              props.filterProducts(props.products, e.target.value)
            }
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

const mapStateToProps = (state) => ({
  products: state.products.items,
  filteredProducts: state.products.filteredItems,
  size: state.products.size,
  sort: state.products.sort,
});
export default connect(mapStateToProps, { sortProducts, filterProducts })(
  Filter
);
