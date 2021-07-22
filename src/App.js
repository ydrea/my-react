import "./App.css";
import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import {Detail} from './components/Detail'
import {Filter} from './components/Filter'
import {Table} from './components/Table'

const Title = styled.h1`
  text-align: center;
`;
const Layout = styled.div`
  display: grid;
  grid-template-columns: 80 20;
  grid-column-gap: 1rem;
`;
const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;


function App() {
  const [filter, filterSet] = useState("");
  const [selected, selectedSet] = useState("");
  const [pokemon, pokemonSet] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((resp) => resp.json())
      .then((data) => pokemonSet(data));
  }, []);

  if (!pokemon) {
    return <p>loading...</p>;
  }

  return (
    <>
      <Container>
        <CssBaseline />
        <Title>po ke mo ni</Title>
        <Layout>
          <div>
          <Filter filter={filter} filterSet={filterSet} />
          <Table pokemon={pokemon} filter={filter} selectedSet={selectedSet} />
          </div>
        {selected && (<Detail {...selected} />)}
        </Layout>
      </Container>
    </>
  );
}

export default App;
