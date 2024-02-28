import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setExpireTimes, setExpireToken, setReservationToken, setRows, toggleReservationSeat } from '../store/showSeatingReducer';
import { fetchReservation } from '../http/concertsApi';

export const Seat = (props) => {
    const dispatch = useDispatch()
    const {rows, reservation_token, show} = useSelector(state => state.seatings)    

    const seatClick = (row, seat, className) => {

        const rowId = row.id
        const seatId =seat.id

        if (className.includes("booked")) return

        const reservation_seat = {
            "row": {id: row.id, name: row.name},
            "seat": seat
        }

        const bodyData = {
            "reservation_token": reservation_token,
            "reservations": [{
                "row": rowId,
                "seat": seatId
            }],
            "duration": 300
        }
        // console.log(bodyData)
        fetchReservation(show.concertId, show.id, bodyData).then(response => {
            dispatch(setReservationToken(response.reservation_token))
            dispatch(setExpireToken(response.reserved_until))

            const difference = +new Date(response.reserved_until) - +new Date();
            let timeLeft = {};
            if (difference > 0) {
                timeLeft = {
                    minute: Math.floor((difference / 1000 / 60) % 60),
                    second: Math.floor((difference / 1000) % 60)
                };
                dispatch(setExpireTimes(timeLeft))
            }
            // console.log(timeLeft)

        })

        const updatedRowsData = rows.map(row => {
            if (row.id === rowId) {
              const updatedRowsAvailables = row.rowsAvailables.map(seat => {
                if (seat.id === seatId) {
                  // Инвертируем состояние isReserv для выбранного места
                  return { ...seat, isReserv: !seat.isReserv };
                }
                return seat;
              });
              return { ...row, rowsAvailables: updatedRowsAvailables };
            }
            return row;
        });

        dispatch(toggleReservationSeat(reservation_seat));
        dispatch(setRows(updatedRowsData));
    };

    // useEffect(() => {

    // },[])

    let clas = 'seat ';
    if (props.seat.isBooked) {
        clas += 'booked'
    } else {
        clas += props.seat.isReserv ? 'reserv' : 'free';
    }

    return (
        <div>
            <div 
                className={clas}  
                onClick={(e) => seatClick(props.row, props.seat, e.target.className)
            }>

            </div>
        </div>
    )
}
