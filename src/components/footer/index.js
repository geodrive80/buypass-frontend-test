import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setShowAll } from '../../actions';

class Footer extends Component {
  constructor(props) {
    super(props);
    this.loadMore = this.loadMore.bind(this);
  }

  loadMore() {
    this.props.setShowAll();
  }

  render() {
    const { size, from, pots} = this.props;
    const showMore = pots && from === 0;
    const invisiblePots = pots ? pots.length - size : 0;
    return (
      <footer>
        {
          showMore ? <button onClick={this.loadMore}>Vis flere potter ({ invisiblePots })</button> : null
        }
      </footer>
    );
  }
}

const mapStateToProps = state => ({
  pots: state.pots,
  from: state.from,
  size: state.size
});

const mapDispatchToProps = dispatch => ({
  setShowAll: () => dispatch(setShowAll())
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);