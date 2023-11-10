import React from "react";
import { Tooltip } from "react-tooltip";
import "./NextEvent.css";

import { dateFormatDbToView } from "../../utils/stringFunctions";

const NextEvent = ({ title, description, eventDate, idEvent }) => {
    
    function conectar(idEvent) {
        // dá pra usar a prop idEvent? testar
        alert(`Chamar o recurso para conectar: ${idEvent}`)
    }

  return (
    <article className="event-card">
      <h2 className="event-card__title">{title.substr(0, 15)}</h2>
      
      <Tooltip id={idEvent} className="tooltip" />
      
      <p 
        className="event-card__description"
        data-tooltip-id={idEvent}
        data-tooltip-content= {description}
        data-tooltip-place="top"
      >
        {description.substr(0, 15)}...
      </p>
      
      <p className="event-card__description">{dateFormatDbToView(eventDate)}</p>

      <a onClick={() => {conectar(idEvent)}}  className="event-card__connect-link">Conectar</a>
    </article>
  );
};

export default NextEvent;