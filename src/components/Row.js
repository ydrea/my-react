import { Button } from "@material-ui/core";
import { useContext } from "react";
import { MyContext } from "../Context";

// import { Type } from "../type";

// Row.propTypes = {
//   item: PropTypes.arrayOf(Type),
// };

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
