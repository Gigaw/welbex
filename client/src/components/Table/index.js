import React from "react";
import "./styles.css";

const Row = ({ data }) => {
  const { name, count, date, distance } = data;
  return (
    <tr className="table__row">
      <th className="table__cell">{name}</th>
      <th className="table__cell">{date}</th>
      <th className="table__cell">{distance}</th>
      <th className="table__cell">{count}</th>
    </tr>
  );
};

function Table({data}) {
  return (
    <table сlassName="table">
      <tbody>
        <tr className="table__row">
          <th className="table__head">Имя</th>
          <th className="table__head">Дата</th>
          <th className="table__head">Расстояние</th>
          <th className="table__head">Колличество</th>
        </tr>
        {data.map((el) => (
          <Row key={el.id} data={el} />
        ))}
      </tbody>
    </table>
  );
}

export default Table;
