import React, { useContext } from 'react';
import MyContext from '../MyContext';
import { useDispatch, useSelector } from 'react-redux';
import { setFilters } from '../store/showReducer';
// import { MyContext, useDataFilter } from '../index';

const Dropdown = (props) => {
  
    const filter = useSelector(state => state.show)
    const dispatch = useDispatch()
    const options = props.options;
  
    const handleSelect = (title, option) => {
      const field = title.toLowerCase()
      const filter = {[field]: option}
      dispatch(setFilters(filter));
    };
    
    return (
      <div className='dropdown'>
        <select onChange={(e) => handleSelect(props.title, e.target.value)} value={filter[props.title.toLowerCase()] || props.title}>
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