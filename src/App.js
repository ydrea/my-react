import styled from "@emotion/styled";
import { useState, useEffect, useReducer } from "react";
import { CssBaseline } from "@material-ui/core";
import { Detail } from "./components/Detail";
import { Filter } from "./components/Filter";
import { Table } from "./components/Table";
//add Context
import { MyContext } from "./Context";

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
const aReducer = (state, action) => {
  switch (action.type) {
    case "filter_set":
      return { ...state, filter: action.payload };

    case "selected_set":
      return { ...state, selected: action.payload };

    case "item_set":
      return { ...state, item: action.payload };

    default:
      throw new Error("Akcija?");
  }
};

function App() {
  const [state, dispatch] = useReducer(aReducer, {
    item: [],
    filter: "",
    selected: null,
  });

  useEffect(() => {
    fetch("http://localhost:3000/pokemon.json")
      .then((resp) => resp.json())
      .then((data) =>
        dispatch({
          type: "item_set",
          payload: data,
        })
      );
  }, []);

  if (!state.item) {
    return <p>loading...</p>;
  }

  return (
    <MyContext.Provider
      //implement Context
      value={{
        state,
        dispatch,
      }}
    >
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
    </MyContext.Provider>
  );
}

export default App;
