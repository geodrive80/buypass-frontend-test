import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPotsData } from '../../dispatchers/index';
import Header from '../../components/header';
import Footer from '../../components/footer';
import Loader from '../../components/loader';
import PotList from '../../components/pot-list';
import './app.css';

class App extends Component {
  componentDidMount() {
    const { props } = this;
    props.initialize();
  }

  render() {
    const { isLoading, pots } = this.props;
    return (
      <main className="App">
        <Header />
        <section className="App-content container">
          <h1>Norsk Tipping pottoversikt</h1>
          {
            isLoading ? <Loader /> : <PotList pots={pots} />
          }
        </section>
        <Footer />
      </main>
    );
  }
}

// Todo: activate loader component when connected to API
const mapPropsToState = state => ({
  isLoading: state.isLoading,
  pots: state.visiblePots
});

const mapDispatchToProps = dispatch => ({
  initialize: () => dispatch(fetchPotsData())
});

export default connect(mapPropsToState, mapDispatchToProps)(App);
