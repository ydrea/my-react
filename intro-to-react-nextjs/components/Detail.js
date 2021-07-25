import styled from "@emotion/styled";

import { useStore } from "../source/store";

const Tablic = styled.div`
  grid-column-gap: 1rem;
  display: flex;
  flex-direction: column;
`;

export const Detail = () => {
  const selected = useStore((state) => state.selected);
  const setFilter = useStore((state) => state.setFilter);
  const filter = useStore((state) => state.filter);

  return selected ? (
    <Tablic>
      <h3> {selected.name.english} </h3>
      <table>
        {Object.keys(selected.base).map((key) => (
          <tr key={key}>
            <td> {key} </td>
            <td> {selected.base[key]} </td>
          </tr>
        ))}
      </table>
    </Tablic>
  ) : null;
};
