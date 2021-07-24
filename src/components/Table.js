import { useStore } from "../store";
import { Row } from "./Row";

export const Table = () => {
  const item = useStore((state) => state.item);
  const filter = useStore((state) => state.filter);
  const setSelected = useStore((state) => state.setSelected);

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
            <Row
              item={item}
              key={item.id}
              onSelect={(item) => setSelected(item)
              }
            />
          ))}
      </tbody>
    </table>
  );
};
