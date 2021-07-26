import { Button } from "@material-ui/core";

export const Row = ({ item, onSelect }) => {
  return (
    <tr>
      <td>{item.name.english}</td>
      <td>{item.type.join(", ")}</td>
      <Button
        variant="contained"
        color="primary"
        onClick={() => onSelect(item)}
      >
        Select
      </Button>
    </tr>
  );
};
