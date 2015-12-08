import { bindActionCreators } from 'redux';
import { connect } from 'react-redux/native';
import FeedList from '../components/FeedList';
import * as FeedListActions from '../actions/feedList';

function mapStateToProps(state) {
  return {
    wormholes: state.wormholes
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(FeedListActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(FeedList);