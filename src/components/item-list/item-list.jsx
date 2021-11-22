/* eslint-disable no-unused-vars */
/* eslint-disable func-names */
// eslint-disable-next-line no-unused-vars
import React  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Item from '../item';
import Alert from '../alert';

import './item-list.scss';

const ItemList =({tickets, transfers, sort}) => {


 const  sortTickets = (tickets, sort) => {
    switch (sort) {
      case 'SORT_CHEAPEST_FIRST':
        tickets.sort((ticketPrev, ticketNext) => ticketPrev.price - ticketNext.price);
       break;
      case 'SORT_FASTEST_FIRST':
        tickets.sort(
          (ticketPrev, ticketNext) =>
            ticketPrev.segments.reduce((total, next) => ({
              duration: total.duration + next.duration,
            })).duration -
            ticketNext.segments.reduce((total, next) => ({
              duration: total.duration + next.duration,
            })).duration,
        );
      break;
      default:
    }
  }

  const filterTickets = (tickets, transfers) => {
    return tickets.filter((ticket) => transfers.some((transfer) =>
        ticket.segments.map((direction) => direction.stops.length).includes(transfer),
      ),
    );
  };



    const filteredTickets = filterTickets(tickets, transfers);
    if (!filteredTickets.length) {
      return <Alert  />;
    }
    const sorted = sortTickets(filteredTickets, sort);

    const ticketsData = filteredTickets.slice(0, 5).map((ticket, i) => {
      return <Item {...ticket} key={i} />;
    });

    return <ul className="ticket-list">{ticketsData}</ul>;

  
  }



const mapStateToProps = (state) => ({
  error: state.error,
  tickets: state.tickets,
sort: state.sort,
  transfers: state.transfers,
});

export default connect(mapStateToProps)(ItemList);

ItemList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};
