import React from "react";
import "./SectionHeader.scss";

function SectionHeader(props) {

  return (
    <header
      className={
        "SectionHeader" + (props.className ? ` ${props.className}` : "")
      }
    >
      {props.title && (
        <h1
          className={
            "font-weight-bold" +
            (props.subtitle && props.spaced ? " mb-4" : "") +
            (!props.subtitle ? " mb-0" : "") +
            (props.size ? ` h${props.size}` : "")
          }
        >
          {props.title}
        </h1>
      )}
      {props.title2 && (
        <h1
          className={
            "font-weight-bold" +
            (props.subtitle && props.spaced ? " mb-4" : "") +
            (!props.subtitle ? " mb-0" : "") +
            (props.size ? ` h${props.size}` : "")
          }
        >
          {props.title2}
        </h1>
      )}
      {props.title3 && (
        <h1
          className={
            "font-weight-bold" +
            (props.subtitle && props.spaced ? " mb-4" : "") +
            (!props.subtitle ? " mb-0" : "") +
            (props.size ? ` h${props.size}` : "")
          }
        >
          {props.title3}
        </h1>
      )}

      {props.subtitle && (
        <p className="SectionHeader__subtitle mb-0">{props.subtitle}</p>
      )}
      <br></br>
      <br></br>
      <p className="SectionHeader__subtitle mb-0" style={{fontStyle: 'italic', fontSize: 11}}>{props.asterisk}</p>
    </header>
  );
}

export default SectionHeader;
