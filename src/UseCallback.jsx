import React, { Fragment } from "react";

const BelajarUseCallback = (props) => {
  const [kelas, setKelas] = React.useState([]);
  const jumlahKelas = function () {
    return ["X TKJ", "X RPL", "XI TKJ", "XI RPL"];
  };

  React.useEffect(() => {
    let data = jumlahKelas();
    setKelas(data);
  }, [jumlahKelas]);

  return (
    <Fragment>
      <div className="container mt-3">
        <ul className="list-group">
          <h3>Belajar UseCallback</h3>
          <li className="list-group-item active">Banyaknya Kelas</li>
          {kelas.map((kelas, index) => (
            <li className="list-group-item">
              {index + 1}. {kelas}
            </li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default BelajarUseCallback;
