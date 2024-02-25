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
    const {data} = await $host.post(`concerts/${concerId}/shows/${showId}/reservation`, bodyData )
    return data
}