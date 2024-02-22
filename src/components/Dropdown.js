import React, { useContext, useState } from 'react';
import { MyContext, useDataFilter } from '../index';

const Dropdown = (props) => {
    const {filters, updateFilter} = useContext(MyContext)
    const options = props.options;
  
    const handleSelect = (title, option) => {
      const field = title.toLowerCase()
      updateFilter(field, option);
    };
    
    return (
      <div className='dropdown'>
        <select onChange={(e) => handleSelect(props.title, e.target.value)}>
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