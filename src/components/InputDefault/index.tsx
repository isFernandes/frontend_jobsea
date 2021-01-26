import React, { useState } from "react";
import { IconProps, TextField } from "@material-ui/core";
// import {Icon} from "@material-ui/core";
import "./index.css";

interface InputProps {
  name?: string;
  placeholder: string;
  icon?: React.ComponentType<IconProps>;
  newValue: (arg0:any) => void;
  style?: object;
  type?: any;
  value?:any;
}

const InputDefault: React.FC<InputProps> = ({ icon: Icon, name, placeholder, newValue,style, type, value }) => {
  const [valorInput, setValorInput] = useState();

  const handleValueChange = (value: any) => {
    setValorInput(value)
  }
  return (
    <>
      <TextField
        type={type}
        variant="outlined"
        value={valorInput}
        name={name}
        placeholder={placeholder}
        className="input"
        style={style}
        onChange={(e) => { 
          handleValueChange(value); 
          newValue(e.target.value)
        }}
      />
      <div>
        {Icon && <Icon />}
      </div>
    </>
  );
};

export default InputDefault;
