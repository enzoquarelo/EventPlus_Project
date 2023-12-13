import React from "react";
import { Tooltip } from "react-tooltip";

import comentaryIcon from "../../../assets/images/comentary-icon.svg";
import { dateFormateDbToView } from "../../../utils/stringFunctions";

import "react-tooltip/dist/react-tooltip.css";

import "./TableEvent.css";

const Table = ({ dados }) => {
  return (
    <table className="tbal-data">
      <thead className="tbal-data__head">
        <tr className="tbal-data__head-row tbal-data__head-row--red-color">
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Evento
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Descrição
          </th>
          <th className="tbal-data__head-title tbal-data__head-title--big">
            Data
          </th>
        </tr>
      </thead>
      <tbody>
        {dados.map((e) => {
          return (
            <tr className="tbal-data__head-row" key={e.idEvento}>
              <td className="tbal-data__data tbal-data__data--big">
                {e.nomeEvento}
              </td>

              <td
                className="tbal-data__data tbal-data__data--big tbal-data__btn-actions"
                data-tooltip-id={e.idEvento}
                data-tooltip-content={e.descricao}
                data-tooltip-place="top"
              >
                <Tooltip id={e.idEvento} className="tooltip" />
                {e.descricao.substr(0, 35)} ...
              </td>

              <td className="tbal-data__data tbal-data__data--big tbal-data__btn-actions">
                {dateFormateDbToView(e.dataEvento)}
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

{
  /* <img
className="tbal-data__icon"
// idevento={e.idEvento}
src={comentaryIcon}
alt=""
/> */
}

export default Table;
