import { useDispatch, useSelector } from "react-redux";
import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/Header";
import { fetchInitialData, setFilterValues, setFilteredShows, setIsFilter } from "./store/showReducer";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

function App() {

  const {filteredShows, filters, shows, loading, error} = useSelector(state => state.show);
  const dispatch = useDispatch()

  //загрузка начальных данных
  useEffect(() => {
    dispatch(fetchInitialData());
    // console.log(shows)
  }, []);

  useEffect(() => {
    if (!loading) {
      dispatch(setFilteredShows(shows));
      dispatch(setFilterValues({
        artist: [...new Set(shows.map(show => show.artist))],
        location: [...new Set(shows.map(show => show.location.name))],
        date: [...new Set(shows.map(show => show.start.slice(0, 10)))]
      }));
    }
  }, [loading]);

  useEffect(() => {
      const filteredData = shows.filter(item => {
        const { date, location, artist } = filters;
        return (
          (date === '' || item.start.slice(0, 10) === date) &&
          (location === '' || item.location.name === location) &&
          (artist === '' || item.artist === artist)
        );
      });
      dispatch(setFilteredShows(filteredData))
      dispatch(setIsFilter(filters.date !== '' || filters.location !== '' || filters.artist !== ''))
  }, [filters])

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
      <div className="App">
        <Header />
        <div className="wrapper">
          <BrowserRouter>
            <AppRouter />
          </BrowserRouter>
        </div>
      </div>
  );
}

export default App;
