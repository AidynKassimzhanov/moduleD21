import axios from 'axios'

const $host = axios.create({
    baseURL: 'http://localhost:3000/api/v1/'
})

export const fetchConcerts = async () => {
    const {data} = await $host.get('concerts')
    return data
}

export const fetchSeatings = async (concerId, showId) => {
    const {data} = await $host.get(`concerts/${concerId}/shows/${showId}/seating`)
    return data
}

export const fetchReservation = async (concerId, showId, bodyData) => {
    const {data} = await $host.post(`concerts/${concerId}/shows/${showId}/reservation`, bodyData )
    return data
}

export const fetchBooking = async (concerId, showId, bodyData) => {
    const response = await $host.post(`concerts/${concerId}/shows/${showId}/booking`, bodyData )
    return response
}

export const fetchTickets = async (bodyData) => {
    const response = await $host.post(`tickets`, bodyData )
    return response
}

export const fetchCancelTicket = async (ticketId, bodyData) => {
    const response = await $host.post(`tickets/${ticketId}/cancel`, bodyData )
    return response
}