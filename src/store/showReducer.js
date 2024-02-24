import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchConcerts } from "../http/concertsApi";

const initialState = {
  shows: [],
  loading: false,
  error: null,
  isFilter: false,
  filteredShows: [],
  filterValues: { date: [], location: [], artist: [] },
  filters: { date: '', location: '', artist: '' }
};

export const fetchInitialData = createAsyncThunk(
  'slice/fetchInitialData',
  async () => {
    const response = await fetchConcerts(); // Загрузка начальных данных с сервера
    const showsArray = response.concerts.flatMap(concert =>
      concert.shows.map(show => ({
        ...show,
        artist: concert.artist,
        location: concert.location,
        concertId: concert.id,
      }))
    );
    // console.log(showsArray)
    return showsArray; // Возвращаем данные, которые будут установлены в качестве начального состояния
  }
);

const slice = createSlice({
  name: 'show',
  initialState,
  reducers: {
    setIsFilter: (state, action) => {
      state.isFilter = action.payload;
    },
    setShows: (state, action) => {
      state.shows = action.payload;
    },
    setFilteredShows: (state, action) => {
      state.filteredShows = action.payload;
    },
    setFilterValues: (state, action) => {
      state.filterValues = action.payload;
    },
    setFilters: (state, action) => {
      state.filters = {...state.filters, ...action.payload};
    },
    clearFilter: (state) => {
      state.filters = { date: '', location: '', artist: '' };
    }
  },
  extraReducers: builder => {
    builder
      .addCase(fetchInitialData.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInitialData.fulfilled, (state, action) => {
        state.loading = false;
        state.shows = action.payload;
      })
      .addCase(fetchInitialData.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  }
});

export const {
  setIsFilter,
  setShows,
  setFilteredShows,
  setFilterValues,
  setFilters,
  clearFilter
} = slice.actions;

export default slice.reducer;
