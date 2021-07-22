import { MyContext } from "../Context";
import { useContext } from "react";

export const Detail = () => {
  const {selected} = useContext(MyContext)
  return selected ? ( 
    <>
      <h1> {selected.name.english} </h1>
      <table>
        {Object.keys(selected.base).map((key) => (
          <tr key={key}>
            <td> {key} </td>
            <td> {selected.base[key]} </td>
          </tr>
        ))}
      </table>
    </>
  ) : null ;
};
