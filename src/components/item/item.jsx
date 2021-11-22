/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import ItemContent from '../ itemcontent';
import './item.scss';

const Item = function ({ segments, carrier, price }) {



  const getPriceLabel = (cost) => `${cost.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ')} Р`;

  const priceLabel = getPriceLabel(price);

  const baseUrlImage = '//pics.avs.io/99/36/';
  return (
    <div className="ticket">
      <div className="header-ticket">
        <div className="ticket_price">{priceLabel}</div>
        <span className="ticket-logo">
          <img src={`${baseUrlImage}${carrier}.png`} alt={`logo ${carrier}`} />
        </span>
      </div>
      <div className="info">
        <ItemContent {...segments[0]} />
        <ItemContent {...segments[1]} />
      </div>
    </div>
  );
};

export default Item;

Item.propTypes = {
  item: PropTypes.shape({
    price: PropTypes.number.isRequired,
    carrier: PropTypes.string.isRequired,
    segments: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
};
