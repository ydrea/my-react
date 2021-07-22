export const Detail = ({ name, base }) => {
  return (
    <>
      <h1> {name.english} </h1>
      <table>
        {Object.keys(base).map((key) => (
          <tr key={key}>
            <td> {key} </td>
            <td> {base[key]} </td>
          </tr>
        ))}
      </table>
    </>
  );
};
