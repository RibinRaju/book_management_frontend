import React, { useState } from "react";
import axios from "axios";

const Balance = () => {
    const [accountNumber, setAccountNumber] = useState("");
    const [balance, setBalance] = useState(null);
    const [error, setError] = useState("");

    const fetchBalance = async () => {
        if (!accountNumber) {
            setError("Please enter an account number.");
            return;
        }

        try {
            const response = await axios.get(`http://localhost:8080/balance/${accountNumber}`);
            setBalance(response.data); // Assuming API returns just the balance
            setError("");
        } catch (err) {
            console.error("Error fetching balance:", err);
            setError("Failed to fetch balance. Please check the account number and try again.");
            setBalance(null);
        }
    };

    return (
        <div className="container">
            <h2>Check Account Balance</h2>
            <input
                type="text"
                placeholder="Enter Account Number"
                value={accountNumber}
                onChange={(e) => setAccountNumber(e.target.value)}
            />
            <button onClick={fetchBalance}>Check Balance</button>

            {balance !== null ? (
                <p>Balance: <strong>${balance}</strong></p>
            ) : (
                error && <p className="error">{error}</p>
            )}
        </div>
    );
};

export default Balance;
