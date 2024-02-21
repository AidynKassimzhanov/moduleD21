import React, { useState } from 'react';

const Dropdown = (props) => {
    const [selectedOption, setSelectedOption] = useState(null);
    const options = props.options || [];
  
    const handleSelect = (option) => {
      setSelectedOption(option);
    };
  
    return (
      <div className='dropdown'>
        {/* <h2>Выбранный вариант: {selectedOption || "Ничего не выбрано"}</h2> */}
        <select onChange={(e) => handleSelect(e.target.value)}>
          <option value="">{props.title}</option>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {props.hasOwnProperty('dates') ? option.slice(0, 10) : option}
            </option>
          ))}
        </select>
      </div>
    );
  };
  
  export default Dropdown;