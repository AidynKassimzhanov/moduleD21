import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";

function App() {

  return (
      <div className="App">
        <BrowserRouter>
          <Header />
          <div className="wrapper">
            <AppRouter />
          </div>
        </BrowserRouter>
      </div>
  );
}

export default App;
