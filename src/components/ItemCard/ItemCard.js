import React from 'react';
import PropTypes from 'prop-types';

const CountryCard = props => {
  const { item = {}  } = props.item || {};

  return (
    <div className="col-sm-6 col-md-4">
      <div className="border-gray rounded border mx-2 my-3 d-flex flex-row align-items-center p-0 bg-light">

        <div className="h-100 position-relative border-gray border-right px-2 bg-white rounded-left">

        <img className="card-user image img-center img-fluid rounded shadow-lg" src={item.item_image}></img>

        </div>

        <div className="px-3">

          <span className="country-name text-dark d-block font-weight-bold">{ item.image_url }</span>

          <span className="country-region text-secondary text-uppercase">Price</span>

        </div>

      </div>
    </div>
  )
}

CountryCard.propTypes = {
  country: PropTypes.shape({
    cca2: PropTypes.string.isRequired,
    region: PropTypes.string.isRequired,
    name: PropTypes.shape({
      common: PropTypes.string.isRequired
    }).isRequired
  }).isRequired
};

export default CountryCard;