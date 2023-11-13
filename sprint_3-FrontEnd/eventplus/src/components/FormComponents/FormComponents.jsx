import React from 'react';
import './FormComponents.css'

export const Input = ({
    type,
    id,
    value,
    required,
    additionalClass,
    name,
    placeholder,
    manipulatorFunction
}) => {
    return(
        <input 
            type={type}
            id={id}
            value={value}
            required={required? "required" : ""}
            className={`input-component ${additionalClass}`}
            name={name}
            placeholder={placeholder}
            onChange={manipulatorFunction}
            autoComplete='off'
        />
    );
};

export const Label = (htmlFor, labelText) => {
    return <label htmlFor={htmlFor}>{labelText}</label>
}

//componente criado na forma tradicional com props ao invés do destructuring
export const Button = (props) => {
    return(
        <button name={props.name} id={props.id} type={props.type} onClick={props.manipulatorFuncition} className={additionalClass}>
            {props.textButton}
        </button>
    );
}

export const Select = ({
    required,
    id,
    name,
    options,
    manipulatorFuncition,
    additionalClass,
    defaultValue
}) => {
    return(
        <select 
            name={name} 
            id={id}
            required={required}
            className={`input-component ${additionalClass}`}
            onClick={manipulatorFuncition}
            value={defaultValue}
        >
            <option value="">Selecione o tipo de evento:</option>
                {options.map((o) => {
                    return(
                        <option key={Math.random()} value={o.value}>{o.text}</option>
                    );
                })}
       </select>
    );
}