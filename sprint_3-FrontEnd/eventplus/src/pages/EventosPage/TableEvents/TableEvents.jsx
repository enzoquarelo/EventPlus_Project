import React from "react";
import "./TableEvents.css";
import editPen from "../../../assets/images/edit-pen.svg";
import trashDelete from "../../../assets/images/trash-delete.svg";

const TableTP = ({ dados, fnDelete = null, fnUpdate = null }) => {
  return (
    <table className="table-data">
      <thead className="table-data__head">
        <tr className="table-data__head-row">
          <th className="table-data__head-title table-data__head-title--big">
            Nome
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Descrição
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Data
          </th>
          <th className="table-data__head-title table-data__head-title--big">
            Tipo Evento
          </th>
          <th className="table-data__head-title table-data__head-title--little">
            Editar
          </th>
          <th className="table-data__head-title table-data__head-title--little">
            Deletar
          </th>
        </tr>
      </thead>

      <tbody>
        {dados.map((e) => {
          return (
            <tr className="table-data__head-row" key={e.idEvento}>
              <td className="table-data__data table-data__data--big">
                {e.nomeEvento}
              </td>
              <td className="table-data__data table-data__data--big">
                {e.descricao}
              </td>
              <td className="table-data__data table-data__data--big">
                {e.dataEvento}
              </td>
              <td className="table-data__data table-data__data--big" id="idTipoEvento">
                {e.dataEvento}
              </td>
              <td className="table-data__data table-data__data--little">
              <img 
                    className="table-data__icon" 
                    src={editPen} 
                    onClick={(e) => {
                      fnUpdate(e.id, e.title, e.descricao, e.tipoEventos, e.date)
                  }}
                    alt="" />
              </td>

              <td className="table-data__data table-data__data--little">
                <img
                  className="table-data__icon"
                  src={trashDelete}
                  alt=""
                  onClick={() => {
                    fnDelete((e.idEvento));
                  }}
                />
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TableTP;
