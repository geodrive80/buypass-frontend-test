import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPotsData } from '../../dispatchers/index';
import Header from '../../components/header';
import './index.css';

class App extends Component {
  componentDidMount() {
    const { props } = this;
    props.initialize();
  }

  render() {
    return (
      <main className="App">

        <Header />

        <section className="App-content">
          <p>
            Vi har gjort klar en Redux store, med en action for å hente data fra
            et API. Du skal trigge den actionen, og hente ut innholdet i feltet
            `pots`.
          </p>

          <p>
            Scopet inkluderer å koble dette viewet til Redux, å iterere over
            dataen og å lage nødvendige komponenter for å vise dataen i
            browseren.
          </p>

          <p>
            Det er opp til deg hvordan du ønsker å strukturere komponenter,
            style viewet og hvordan du presenterer dataene. Det er også opp til
            deg om du ønsker å ta i bruk eksterne bibliotek ut over de som
            allerede finnes i prosjektet. Vi har laget en wireframe som en grov
            skisse. Vi ønsker at det normalt vises potter fra fire spill, og at
            man kan expande det til å vise alle pottene inne i samme viewet.
          </p>
          <img alt="App wireframe" src={"./BUYPASS_RECRUITING.png"} />

          <h2>Lykke til!</h2>

        </section>

      </main>
    );
  }
}

// Todo: activate loader component when connected to API
const mapPropsToState = state => ({
  isLoading: state.isLoading
});

const mapDispatchToProps = dispatch => ({
  initialize: () => dispatch(fetchPotsData())
});

export default connect(mapPropsToState, mapDispatchToProps)(App);
