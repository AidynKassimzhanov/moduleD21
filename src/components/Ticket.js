import React from 'react'
import { Button } from 'react-bootstrap'
import { fetchCancelTicket } from '../http/concertsApi'
import { setCancelTicket } from '../store/ticketReducer'
import { useDispatch } from 'react-redux'

export const Ticket = (props) => {

    const ticket = props.ticket   
    const dispatch = useDispatch()

    const handleClick = () => {
        const bodyData = {
            name: ticket.name,
            code: ticket.code
        }
        fetchCancelTicket(ticket.id, bodyData)
            .then(response => {
                if (response.status === 204) {
                    dispatch(setCancelTicket(ticket.id))
                }
            })
    }

    return (
        <div className='ticket'>
            <h4>Ticket</h4>
            <p>Row: <span>{ticket.row.id}</span> </p>
            <p>Seat: <span>{ticket.seat}</span> </p>
            <div className="code">
                <p>Code: <span>{ticket.code}</span> </p>
            </div>

            <div className='ticketShow'>
                <div> 
                    <p> {ticket.show.start.slice(0, 10)}</p>
                    <h4> {ticket.show.concert.name}</h4>
                    <p> {ticket.show.concert.location.name}</p>
                    <p> {ticket.show.start.slice(11, 16)} - {ticket.show.end.slice(11, 16)} </p>
                </div>
            </div>

            <Button onClick={handleClick}>
                Cancel Ticket
            </Button>
        </div>
    )
}
