import React from 'react';
import { connect } from 'react-redux';

import { COMMON } from './const';
import * as actions from './actions/common';

import Loading from './pages/Loading/';
import Main from './pages/Main/';

class App extends React.PureComponent {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    const { props } = this;
    return (
      (props.AppStatus === COMMON.APP_STATUS.INITING ||
        props.AppStatus === COMMON.APP_STATUS.LOADING) ?
      <Loading /> : <Main />
    );
  }
}

const mapStateToProps = function (state) {
  return {
    AppStatus: state.Common.AppStatus
  }
}

const MapDispatchToProps = { ...actions }

export default connect(
  mapStateToProps,
  MapDispatchToProps
)(App);
