/* eslint-disable func-names */
import React, { useEffect} from 'react';
import PropTypes from 'prop-types';
import 'antd/es/progress/style/index.css';
import { Progress, Spin } from 'antd';
import './app.scss';
import 'antd/es/spin/style/index.css';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import ItemList from '../item-list';
import Filter from '../filter';
import Sort from '../sort';
import * as actions from '../../actions';
import logo from './Logo.png';



const App = function ({ isLoading, DataFlight, progress }) {
  

  useEffect(() => {
    DataFlight();
  }, [DataFlight]);

  return (
    <div className="app">
      <Progress
        percent={progress}
        showInfo={false}
        strokeColor={{
          '0%': '#108ee9',
          '100%': '#108ee9',
        }}
      />
      <header className="header">
        <img alt="logo" src={logo} />
      </header>

      <main className="content">
        <Filter />
        <section className="ticket-list">
          <Sort />
          <Spin spinning={isLoading} size="large">
            <ul className="ticket-list">{<ItemList />  && <ItemList />}</ul>
          </Spin>
        </section>
      </main>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchId: state.searchId,
  isLoading: state.isLoading,
  progress: state.progress,
});

const mapDispatchToProps = (dispatch) => {
  const { DataFlight } = bindActionCreators(actions, dispatch);
  return {
    DataFlight,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);

App.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  DataFlight: PropTypes.func.isRequired,
  progress: PropTypes.number.isRequired,
};
