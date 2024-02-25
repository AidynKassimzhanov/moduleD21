import React, { useEffect } from 'react'
import { Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { clearReservationSeat, setExpireTimes } from '../store/showSeatingReducer';
import { useNavigate } from 'react-router-dom';
import { BOOKING_ROUTE } from '../consts';

export const SelectedSeats = (props) => {
    const {reservation_seats, expire_times, show} = useSelector(state => state.seatings)   
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => {
        if (expire_times.minute === 0 && expire_times.second === 0 ) {
            return
        }
        const timer = setInterval(() => {
            const newTime = { ...expire_times }; // Создаем копию объекта expire_times
            if (newTime.second > 0) {
                newTime.second--;
            } else {
                if (newTime.minute > 0) {
                    newTime.minute--;
                    newTime.second = 59;
                } else {
                    clearInterval(timer); // Остановка таймера, когда время истекло
                    dispatch(clearReservationSeat())
                }
            }
            dispatch(setExpireTimes(newTime)); // Передаем новое время как аргумент экшена
        }, 1000);
    
        // Очистка интервала перед размонтированием компонента
        return () => clearInterval(timer);
      }, [expire_times]);

    const formatTime = (time) => String(time).padStart(2, '0');


    return (
        <div className="selectedSeats">
            <h5>Selected seats</h5>

            {reservation_seats.map(seat =>(
                <p> Row: {seat.row.name}, Seat: {seat.seat.id} </p>
            ))}

            { expire_times.minute === 0 && expire_times.second === 0 
                ? null
                : <p className='expire'>Your seets expire in <b>{formatTime(expire_times.minute)}:{formatTime(expire_times.second)}</b></p>
            }

            <Button 
                variant="primary" 
                onClick={() => {
                    if (props.route === '/shows') {
                        navigate(props.route + '/' + show.id, { state: { data: show }});
                    } else {
                        navigate(props.route);
                    }
                }}
            >

                {props.buttonTitle}
            </Button>

        </div>
    )
}
