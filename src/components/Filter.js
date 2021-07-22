import { useContext } from "react";
import styled from "@emotion/styled";
import { MyContext } from "../Context";

const Input = styled.input`
  width: 30%;
  font-size: larger;
`;

export const Filter = () => {
  const { filter, filterSet } = useContext(MyContext);

  return (
    <Input
      value={filter}
      placeholder="live search"
      onChange={(e) => filterSet(e.target.value)}
    />
  );
};
