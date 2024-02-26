import React, { useEffect, useState } from 'react'
import Dropdown from './Dropdown'
import { Button } from 'react-bootstrap'

const csvFilePath = '/countries.csv';

export const EnterBookDetails = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(csvFilePath);
                const csvData = await response.text();
                const rows = csvData.split('\n');
                const countriesData = rows.map(row => row.trim());
                setCountries(countriesData);
            } catch (error) {
                console.error('Error fetching CSV file:', error);
            }
        };
        fetchData();
    }, []);

    return (
        <div className='enterBookDetails'>
            <h2>Please enter your details</h2>
            <div className="formBlock">
                <div className="form">
                    <form action="">

                        <p>Name</p>
                        <input 
                            type="text" 
                        />
                        <p>Adress</p>
                        <input 
                            type="text" 
                        />    

                        <div className='zipCity'>
                            <div className='zip'>
                                <p>ZIP Code</p>
                                <input 
                                    type="text" 
                                />
                            </div>
                            <div className='city'>
                                <p>City</p>
                                <input 
                                    type="text" 
                                />  
                            </div>
                        </div>

                        <p>Country</p>
                        <div className='dropdown'>
                            <select 
                                // onChange={(e) => handleSelect()} 
                                value={"fbfd"}
                            >
                            <option value="">Country</option>
                            {/* {options.map((option, index) => (
                                <option key={index} value={option}>
                                {props.hasOwnProperty('dates') ? option.slice(0, 10) : option}
                                </option>
                            ))} */}
                            {countries.map((country, index) => (
                                <option key={index} value={country}>{country}</option>
                            ))}
                            </select> 
                        </div>
                        

                    </form>
                </div>
                <hr />
                <div className="formInfo">
                    <div className="informationBlock">
                        <p>
                            By clicking "Book" you accept that you are not actually booking a ticket as this is a test project end not a real website.
                        </p>
                    </div>
                    <div className="bookButton">
                        <div className='buttonLeftBlock'>
                            Your ticket will be available immediately after booking.
                        </div>
                        <div className='buttonRightBlock'>
                            <Button>
                                Book
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
