import { Route, Routes } from "react-router-dom";
import Home from "./page/home/Home";
import Balance from "./page/balance/balance"; 
import Deposit from "./page/deposit/deposit";
import Withdraw from "./page/withdraw/withdraw";
import "./App.css";

const App = () => {
    return (
        <div className="app-container">
            <header className="app-header">
                <h1>ATM System</h1>
            </header>
            <main className="app-main">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/withdraw" element={<Withdraw />} />
                    <Route path="/deposit" element={<Deposit />} />
                    <Route path="/balance" element={<Balance />} />  
                </Routes>
            </main>
            <footer className="app-footer">
                <p>© 2024 ATM System</p>
            </footer>
        </div>
    );
};

export default App;
