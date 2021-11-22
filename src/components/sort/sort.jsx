/* eslint-disable func-names */
/* eslint-disable no-unused-vars */
import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import cn from 'classnames';
import * as actions from '../../actions';

import './sort.scss';

const Sort = function ({ sort, sortCheap, sortFast }) {
  const cheapestClassNames = cn({
    sort__btn: true,
    'sort__btn--focused': sort === 'SORT_CHEAPEST_FIRST',
  });

  const fastestClassNames = cn({
    sort__btn: true,
    'sort__btn--focused': sort === 'SORT_FASTEST_FIRST',
  });



  
  return (
    <div className="sort">
      <button type="button" className={cheapestClassNames} onClick={sortCheap}>
        Самый дешевый
      </button>
      <button type="button" className={fastestClassNames} onClick={sortFast}>
        Самый быстрый
      </button>
    </div>
  );
};

const mapStateToProps = (state) => ({
  sort: state.sort,
});

const mapDispatchToProps = (dispatch) => {
  const { sortCheap, sortFast } = bindActionCreators(actions, dispatch);
  return {
    sortCheap,
    sortFast,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Sort);

Sort.propTypes = {
  sort: PropTypes.string.isRequired,
  sortCheapest: PropTypes.func.isRequired,
  sortFastest: PropTypes.func.isRequired,
};
