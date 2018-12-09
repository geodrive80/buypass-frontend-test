import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setSorting } from '../../actions';
import './header.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.setSorting = this.setSorting.bind(this); // Not really needed, but added for clearity.
  }

  setSorting(isAscending) {
    this.props.setSorting(isAscending);
  }

  render() {
    const { isAscending } = this.props;
    return (
      <header>
        <div className="container">
          <div className="controls">
            <h4>Sortering</h4>
            <button
              type="button"
              className={isAscending === false ? 'active' : ''}
              onClick={() => this.setSorting(false)}
            >
              Pott stor-liten
            </button>

            <button
              type="button"
              className={isAscending === true ? 'active' : ''}
              onClick={() => this.setSorting(true)}
            >
              Pott liten-stor
            </button>
          </div>
        </div>
      </header>
    )
  }
}

const mapStateToProps = state => ({
  isAscending: state.isAscending
});

const mapDispatchToProps = dispatch => ({
  setSorting: isAscending => dispatch(setSorting(isAscending))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);

