import Sidebar from "./Components/Sidebar";
import { BrowserRouter , Route , Routes } from "react-router-dom";
import {Home , Cryptos, Exchanges, News, CryptoDetails} from "./Components/CompContainer"

function App() {
  console.log(Home);
  return (
      <BrowserRouter>   
        <div className="App">
          <Sidebar/>
          <div className="content">
          <Routes>
            <Route exact path="/" element={<Home/>}/>  
            <Route exact path="/cryptos" element={<Cryptos/>}/> 
            <Route exact path="/crypto/:coinId" element={<CryptoDetails/>}/>   
            <Route exact path="/exchanges" element={<Exchanges/>}/>  
            <Route exact path="/news" element={<News/>}/>  
          </Routes>
          </div>
        </div>
      </BrowserRouter>
  );
}

export default App;
