import React from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { fetchTickets } from '../http/concertsApi'
import { setTickets } from '../store/ticketReducer'

export const TicketForm = () => {

    const dispatch = useDispatch()
    const [formData, setFormData] = useState({name: '', code:''})

    const handleInputChange = (e) => {
        const { name, value }  = e.target
        setFormData(prevState => ({
            ...prevState,  // Копируем предыдущее состояние
            [name]: value // Обновляем только нужное поле
          }))
    }

    const handleFormButton = (e) => {
        const bodyData = {
            name: formData.name,
            code: formData.code
        }
        fetchTickets(bodyData).then(response => {
            console.log(response);
            if (response.status === 200) {
                dispatch(setTickets(response.data.tickets))
            }
        })
    }

    return (
        <div className='retrieveForm'>
            <div>
                <p>Name</p>          
                <input 
                type = 'text' 
                name = 'name'
                value = {formData.name}
                onChange={handleInputChange}
                />
            </div>

            <div>
                <p>Name</p>          
                <input 
                type = 'text' 
                name = 'code'
                value = {formData.code}
                onChange={handleInputChange}
                />
            </div>

            <Button onClick={handleFormButton}>
                Get Ticket
            </Button>

        </div> 
    )
}
