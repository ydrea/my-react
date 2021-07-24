
import styled from "@emotion/styled";
import { useStore } from "../store";

const Input = styled.input`
  width: 80%;
  font-size: larger;
  padding: 0.3rem;
`;

export const Filter = () => {
  const filter = useStore((state) => state.filter);
  const setFilter = useStore((state) => state.setFilter);

  return (
    <Input
      value={filter}
      placeholder="live search"
      onChange={(e) => setFilter(e.target.value)
      }
    />
  );
};
