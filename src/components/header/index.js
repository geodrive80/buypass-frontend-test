import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSorting } from '../../actions';


class Header extends Component {
  constructor(props) {
    super(props);
    this.setSorting = this.setSorting.bind(this); // Not really needed, but added for clearity.
  }

  setSorting(isAscending) {
    this.props.setSorting(isAscending);
  }

  render() {
    return (
      <header>
        <div className="logo">Norsk Tipping</div>
        <div className="controls">
          <button type="button" onClick={() => this.setSorting(false)}>Pott stor-liten</button>
          <button type="button" onClick={() => this.setSorting(true)}>Pott liten-stor</button>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  sortAscending: state.sortAscending
});

const mapDispatchToProps = dispatch => ({
  setSorting: isAscending => dispatch(setSorting(isAscending))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

