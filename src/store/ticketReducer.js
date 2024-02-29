import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    name: '',
    booked_on: '',
    tickets: [],
};

const slice = createSlice({
    name: 'tickets',
    initialState,
    reducers: {
        setName: (state, action) => {
            state.name = action.payload
        },
        setBookedOn: (state, action) => {
            state.booked_on = action.payload
        },
        setTickets: (state, action) => {
            state.tickets = action.payload
        },
        setCancelTicket: (state, action) => {
            const updatedTickets = state.tickets.filter(item => item.id !== action.payload);
            return {
                ...state,
                tickets: updatedTickets
            };
        }        
    }
})

export const {
    setName,
    setBookedOn,
    setTickets,
    setCancelTicket
} = slice.actions;

export default slice.reducer;