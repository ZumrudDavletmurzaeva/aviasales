/* eslint-disable func-names */

/* eslint-disable no-unused-vars */
import React, {useState,useEffect} from 'react';

import './filter.scss'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Checkbox from '../checkbox';
import * as actions from '../../actions'


const Filter = function({transfers,
  allTransfers,
  noneTransfers,
  oneTransfer,
  twoTransfers,
  threeTransfers}) {
 
  
return (
<div className="transfer-options">
<h5>КОЛИЧЕСТВО ПЕРЕСАДОК</h5>
<Checkbox  className="options"  isChecked={transfers.includes(-1)} caption="Все" onChange={allTransfers} />
<Checkbox className="options" isChecked={transfers.includes(0)}
caption="Без пересадок"onChange={noneTransfers}/>
<Checkbox className="options" isChecked={transfers.includes(1)} caption="1 пересадка" onChange={oneTransfer} />
<Checkbox className="options" isChecked={transfers.includes(2)} caption="2 пересадки" onChange={twoTransfers} />
<Checkbox  className="options" isChecked={transfers.includes(3)} caption="3 пересадки" onChange={threeTransfers} />
</div>
)
}



const mapStateToProps = (state) => ({
  transfers:state.transfers
  });


  const mapDispatchToProps = (dispatch) => {
    const { allTransfers,noneTransfers,oneTransfer,
twoTransfers,threeTransfers  } = bindActionCreators(actions, dispatch);
    return {
      allTransfers,
  noneTransfers,
  oneTransfer,
  twoTransfers,
  threeTransfers
    };
  };

export default connect(mapStateToProps,mapDispatchToProps)(Filter);


