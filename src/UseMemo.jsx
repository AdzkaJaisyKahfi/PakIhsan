import React, { Fragment } from "react";
const BelajarUseMemo = (props) => {
  let [menu, setMenu] = React.useState([]);
  let DaftarMakanan = function () {
    return ["nasi padang", "nasi uduk", "nasi gudeg"];
  };

  React.useMemo(() => {
    if (props.wilayah === "Jabar") return setMenu([...menu, "Petis"]);
    return setMenu(DaftarMakanan());
  }, [props.wilayah]);

  return (
    <Fragment>
      <div className="container mt-3">
        <ul className="list-group">
          <h3>Belajar UseMemo</h3>
          <li className="list-group-item active">Daftar Makanan</li>
          {menu.map((makanan, index) => (
            <li className="list-group-item">
              {index + 1}. {makanan}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default BelajarUseMemo;
