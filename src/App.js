import styled from "@emotion/styled";
import { useEffect } from "react";
import { CssBaseline } from "@material-ui/core";
import { Detail } from "./components/Detail";
import { Filter } from "./components/Filter";
import { Table } from "./components/Table";
//add Zustand
import { useStore, UseStore } from "./store";

const Title = styled.h1`
  text-align: center;
`;
const Layout = styled.div`
  display: grid;
  grid-template-columns: 80 20;
  grid-column-gap: 1rem;
  display: flex;
  flex-direction: row;
`;
const Container = styled.div`
  margin: auto;
  width: 800px;
  padding-top: 1rem;
`;

function App() {
  return (
    <Container>
      <CssBaseline />
      <Title>po ke mo ni</Title>
      <Layout>
        <div>
          <Filter />
          <Table />
        </div>
        <Detail />
      </Layout>
    </Container>
  );
}

export default App;
