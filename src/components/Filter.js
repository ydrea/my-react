import styled from "@emotion/styled";

const Input = styled.input`
  width: 30%;
  font-size: larger;
`;

export const Filter = ({ filter, filterSet }) => {
  return (
    <Input
      value={filter}
      placeholder="live search"
      onChange={(e) => filterSet(e.target.value)}
    />
  );
};
