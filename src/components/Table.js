import { useContext } from "react";
import { MyContext } from "../Context";
import { Row } from "./Row";

export const Table = () => {
  const { state:{ item, filter}, dispatch } = useContext(MyContext);
  return (
    <table>
      <thead>
        <tr>
          <td>Name</td>
          <td>Type</td>
          <td>Select</td>
        </tr>
      </thead>
      <tbody>
        {item
          .filter((item) =>
            item.name.english.toLowerCase().includes(filter.toLowerCase())
          )
          .slice(0, 10)
          .map((item) => (
            <Row item={item}
              key={item.id}
              onSelect={(item) => dispatch({payload: item,type: 'selected_set'})}
            />
          ))}
      </tbody>
    </table>
  );
};
