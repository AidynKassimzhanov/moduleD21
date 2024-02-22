import { BrowserRouter } from "react-router-dom";
import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/Header";
import { Main } from "./components/Main";

function App() {
  return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="wrapper">
            <AppRouter />
            {/* <Main /> */}
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
