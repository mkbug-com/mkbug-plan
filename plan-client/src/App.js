import React from 'react';
import { connect } from 'react-redux';

import { COMMON } from './const';

import Loading from './pages/Loading/';

function App(props) {
  return (
    (props.AppStatus === COMMON.APP_STATUS.INITING ||
      props.AppStatus === COMMON.APP_STATUS.LOADING) ?
    <Loading /> : <div></div>
  );
}

const mapStateToProps = function (state) {
  return {
    AppStatus: state.Common.AppStatus
  }
}

const MapDispatchToProps = function (dispatch) {
  return {

  }
}

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(App);
