import { AppRouter } from "./components/AppRouter";
import { Header } from "./components/Header";
import { BrowserRouter } from "react-router-dom";

function App() {

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
