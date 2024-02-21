import axios from 'axios'

const $host = axios.create({
    baseURL: 'http://localhost:3000/api/v1/'
})

export const fetchConcerts = async () => {
    const {data} = await $host.get('concerts')
    return data
}