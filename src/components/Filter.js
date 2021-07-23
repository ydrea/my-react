import { useContext } from "react";
import styled from "@emotion/styled";
import { MyContext } from "../Context";

const Input = styled.input`
  width: 80%;
  font-size: larger;
  padding: 0.3rem;
`;

export const Filter = () => {
  const {
    state: { filter },
    dispatch,
  } = useContext(MyContext);

  return (
    <Input
      value={filter}
      placeholder="live search"
      onChange={(e) =>
        dispatch({ type: "filter_set", payload: e.target.value })
      }
    />
  );
};
