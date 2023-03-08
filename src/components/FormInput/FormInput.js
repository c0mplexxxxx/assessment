import React, {useState} from "react";
import "./formInput.scss"
const FormInput = (props) => {
  const {label, errorMessage, onChange, id, ...inputProps} = props;
  const [focused, setFocused] = useState(false);
  const handleFocus = (e) => {
    setFocused(true);
  }
  return (
    <div className="input-field">
      <div className="input-label">
        <label htmlFor={id}>{label}</label>
      </div>
      <input {...inputProps} onChange={onChange} onBlur={handleFocus} focused={focused.toString()}/>
      <div className="error">{errorMessage}</div>
    </div>
  );
};

export default FormInput;
