import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { setRows, setShow } from '../store/showSeatingReducer';
import { fetchSeatings } from '../http/concertsApi';
import { useDispatch, useSelector } from 'react-redux';
import { Show } from './Show';
import { Stage } from './Stage';
import { SelectedSeats } from './SelectedSeats';
import { BOOKING_ROUTE } from '../consts';

export const ShowSeatings = () => {
    const {id} = useParams()
    const location = useLocation();
    const data = location.state?.data;

    const dispatch = useDispatch()
    const {show, rows} = useSelector(state => state.seatings)

    const [isLoading, setIsLoading] = useState(true); 

    useEffect(() => {
        dispatch(setShow(data))
        fetchSeatings(data.concertId, data.id)
            .then(response => {
                // console.log(response.rows)
                const rowsData = response.rows.map(row => ({
                    id: row.id,
                    name: row.name,

                    rowsAvailables: Array.from({ length: row.seats.total }, (_, index) => {
                        const setNumber = index + 1;
                        const isBooked = row.seats.unavailable.includes(setNumber)

                        return {
                            id: setNumber,
                            isBooked: isBooked,
                            isReserv: isBooked && false 
                    }})
                }))

                dispatch(setRows(rowsData));
                setIsLoading(false); // После загрузки данных устанавливаем isLoading в false
            })
            .catch(error => {
                setIsLoading(false); // Если возникла ошибка, также устанавливаем isLoading в false
                console.error('Error fetching seatings:', error);
            });
    }, [dispatch, data]);

    if (isLoading) {
        return <div>Loading...</div>; // Если данные загружаются, рендерим сообщение о загрузке
    }

    return (
        <div className='seatingPage'>
            <Show />
            <div className='seatings'>
                <Stage />
                <SelectedSeats route={BOOKING_ROUTE} buttonTitle={"Enter Booking Details"}/>
            </div>
        </div>
    )
}
