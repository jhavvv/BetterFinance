// <!DOCTYPE html>
// <html lang="en">

// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Information</title>
// </head>


// import React from 'react';
import React, { useState } from 'react';
import './Informationstyling.css';
import './index.js'
import './stylesheet.css'




function Infopage() {

    const [income, setIncome] = useState('');
    const [incomeAmount, setIncomeAmount] = useState('');
    const [incomeFrequency, setIncomeFrequency] = useState('');

    const [spending, setSpending] = useState('');
    const [spendingAmount, setSpendingAmount] = useState('');
    const [spendingFrequency, setSpendingFrequency] = useState('');
    const [Essentiality, setEssentiality] = useState('');
    const [category, setCategory] = useState('');


    return (
        <div>
            <header>
                <div id="navbar">
                    {/* Transaction Page */}
                    <a href="transactions.html" title="Transactions">Transactions</a>

                    {/* Information Page */}
                    <a href="information.js" title="Information">Information</a>

                    {/* Graphs Page */}
                    <a href="graphs.html" title="Graphs">Graphs</a>

                    {/* Help Page */}
                    <a href="help.html" title="Help">Help</a>
                </div>
            </header>




            <div id="info-container">
                <h1>Information</h1>

                <div id="boxes-container">
                    <div className="info-box">
                        <p>Income</p>
                        <label> Add income: </label>
                        <input
                            type="text"
                            value={income}
                            onChange={(e) => setIncome(e.target.value)}
                            required
                        />
                        <label> Amount: </label>
                        <input
                            type="number"
                            value={incomeAmount}
                            onChange={(e) => setIncomeAmount(e.target.value)}
                            required
                        />
                        <label> How often: </label>
                        <select
                            value={incomeFrequency}
                            onChange={(e) => setIncomeFrequency(e.target.value)}
                            required
                        >
                            <option value="">Select frequency(N/A if one-off)</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>

                        <button type="submit"> Add Income source </button>
                    </div>



                    <div className="info-box">
                        <p>Spending</p>
                        <label> Add expense: </label>
                        <input
                            type="text"
                            value={spending}
                            onChange={(e) => setSpending(e.target.value)}
                            required
                        />



                        <input
                            type="radio"
                            id="essential"
                            name="purchase"
                            value="Essential"
                            checked={Essentiality === 'Essential'}
                            onChange={(e) => setEssentiality(e.target.value)}
                        />
                        <label htmlFor="essential">Essential Purchase</label>

                        <input
                            type="radio"
                            id="non-essential"
                            name="purchase"
                            value="Non-Essential"
                            checked={Essentiality === 'Non-Essential'}
                            onChange={(e) => setEssentiality(e.target.value)}
                        />
                        <label htmlFor="non-essential">Non-Essential Purchase</label>

                        <label>Category: </label>
                        <select
                            value={category}
                            onChange={(e) => setCategory(e.target.value)}
                            required
                        >
                            <option value="">Select a category</option>
                            <option value="groceries">Groceries</option>
                            <option value="transport">Transport</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="investments">Investments</option>
                            <option value="others">Others</option>
                        </select>


                        <label>Amount: </label>
                        <input
                            type="number"
                            value={spendingAmount}
                            onChange={(e) => setSpendingAmount(e.target.value)}
                            required
                        />
                        <label> How often: </label>
                        <select
                            value={spendingFrequency}
                            onChange={(e) => setSpendingFrequency(e.target.value)}
                            required
                        >
                            <option value="">Select frequency(N/A if one-off)</option>
                            <option value="daily">Daily</option>
                            <option value="weekly">Weekly</option>
                            <option value="monthly">Monthly</option>
                        </select>
                        <button type="submit"> Add Expense </button>
                    </div>

                </div>
            </div>
        </div>



    );
}

export default Infopage;