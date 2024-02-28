import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  show: {
    id: null,
    start: '',
    end: '',
    artist: '',
    concertId: null,
    location: {
        id: null,
        name: ''
    }
  },
  rows: [],
  reservation_token: '',
  reservation_seats: [],
  expire_token: '',
  expire_times: {
    minute: 0,
    second: 0
  }
};


const slice = createSlice({
    name: 'seatings',
    initialState,
    reducers: {
        setShow: (state, action) => {
            state.show = action.payload;
        },
        setRows: (state, action) => {
            state.rows = action.payload;
        },
        setReservationToken: (state, action) => {
            state.reservation_token = action.payload;
        },
        setExpireToken: (state, action) => {
            state.expire_token = action.payload;
        },   
        toggleReservationSeat: (state, action) => {
            const reservation_seat = action.payload;
            const index = state.reservation_seats.findIndex(item => 
            item.row.id === reservation_seat.row.id && item.seat.id === reservation_seat.seat.id
            );
            if (index === -1) {
            state.reservation_seats.push(reservation_seat);
            } else {
            state.reservation_seats = state.reservation_seats.filter(item =>
                item.row.id !== reservation_seat.row.id || item.seat.id !== reservation_seat.seat.id
            );
            }
        },
        clearReservationSeat: (state) => {
            state.expire_token = '';
        },   
        setExpireTimes: (state, action) => {
            // console.log(action.payload)
            state.expire_times = action.payload;
        }, 
    }  
});

export const {
  setRows,
  setShow,
  setReservationToken,
  setExpireToken,
  toggleReservationSeat,
  setExpireTimes,
  clearReservationSeat
} = slice.actions;

export default slice.reducer;
