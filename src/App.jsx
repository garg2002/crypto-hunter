import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import CoinPage from "./Pages/CoinPage";
import Header from "./components/Header";
import Homepage from "./Pages/HomePage";

function App() {


  return (
    <BrowserRouter>
      <div className="text-white bg-[#14161a]  min-h-[100vh]">
        <Header />
     
        <Routes>
        <Route exact path="/" Component={Homepage}/>
        <Route path="/coins/:id" Component={CoinPage}  />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;