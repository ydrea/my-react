import { MyContext } from "../Context";
import { useContext } from "react";
import styled from "@emotion/styled";

const Tablic = styled.div`
  grid-column-gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Detail = () => {
  const {
    state: { selected },
  } = useContext(MyContext);
  return selected ? (
    <>
      <h3> {selected.name.english} </h3>
      <table>
        {Object.keys(selected.base).map((key) => (
          <tr key={key}>
            <td> {key} </td>
            <td> {selected.base[key]} </td>
          </tr>
        ))}
      </table>
    </>
  ) : null;
};
