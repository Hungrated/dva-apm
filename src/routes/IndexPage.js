import React from 'react';
import { connect } from 'dva';
import CountApp from '../components/Example';

function mapStateToProps(state) {
  return { count: state.count };
}
const IndexPage = connect(mapStateToProps)(CountApp);

export default IndexPage;
