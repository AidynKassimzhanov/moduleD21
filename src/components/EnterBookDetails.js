import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { setUpdateFormData } from '../store/bookingReducer';
import { fetchBooking } from '../http/concertsApi';
import { TICKETS_ROUTE } from '../consts';
import { useNavigate } from 'react-router-dom';

const csvFilePath = '/countries.csv';

export const EnterBookDetails = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [countries, setCountries] = useState([]);
    const { reservation_token, show } = useSelector(state => state.seatings)
    const { name, address, zip, city, country } = useSelector(state => state.booking)
    const [isSubmitted, setIsSubmitted] = useState(false)

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

    const handleChange = (e) => {
        const { name, value } = e.target; // Получаем имя и значение поля из события изменения
        dispatch(setUpdateFormData({ [name]: value }));
    }

    const handleSubmit = (e) => {
        const bodyData = {
            reservation_token: reservation_token,
            name: name,
            address: address,
            zip: zip,
            city: city,
            country: country
        }
        setIsSubmitted(true)
        if (name&&address&&zip&&country&&city) {
            fetchBooking(show.concertId, show.id, bodyData).then(response => {
                console.log(response);
                if (response.status === 201) {
                    navigate(TICKETS_ROUTE)
                }
            })
        }
    }

    return (
        <div className='enterBookDetails'>
            <h2>Please enter your details</h2>
            <div className="formBlock">
                <div className="form">
                    <form action="">

                        <p>Name</p>
                        <input 
                            type="text" 
                            name = "name"
                            value={name}
                            onChange={handleChange}
                            className={isSubmitted && !name ? 'required' : ''}
                        />
                        <p>Adress</p>
                        <input 
                            type="text" 
                            name = "address"
                            value={address}
                            onChange={handleChange}
                            className={isSubmitted && !address ? 'required' : ''}
                        />    

                        <div className='zipCity'>
                            <div className='zip'>
                                <p>ZIP Code</p>
                                <input 
                                    type="text" 
                                    name = "zip"
                                    value={zip}
                                    onChange={handleChange}
                                    className={isSubmitted && !zip ? 'required' : ''}
                                />
                            </div>
                            <div className='city'>
                                <p>City</p>
                                <input 
                                    type="text" 
                                    name = "city"
                                    value={city}
                                    onChange={handleChange}
                                    className={isSubmitted && !city ? 'required' : ''}
                                />  
                            </div>
                        </div>

                        <p>Country</p>
                        <div className='dropdown'>
                            <select 
                                // onChange={(e) => handleSelect()} 
                                name = "country"
                                value={country}
                                onChange={handleChange}
                                className={isSubmitted && !country ? 'required' : ''}
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
                            <Button onClick={handleSubmit}>
                                Book
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
