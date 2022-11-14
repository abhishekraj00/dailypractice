import React, { useRef, useState } from 'react'
import "./Bank.css";



export default function BankBalance() {



    const [errorMas, getError] = useState({
        nameError: "",
        accountError: "",
        mobileError: "",
        avlBalanceError: "",
    });
    const [userData, setData] = useState({
        name: "",
        account: "",
        confirmAccount: "",
        mobile: "",
        avlBalance: "",
        debited: "",
    });



    function getData(e) {

        e.preventDefault();

        getError({
            nameError: "Name cann't Be emplty",
            accountError: "Account Miss-Matched",
            mobileError: "Mobile no must be 10 digit",
            avlBalanceError: "Insufficinet Password",
        })
    }


    return (
        <div id='main'>

            <form onSubmit={getData}>

                <label>Name account holder:<br /><input type="text" onChange={(e) => setData({ ...userData, name: e.target.value })} /></label><br />
                {userData.name ? <p></p> : <p className='error'>{errorMas.nameError}</p>}<br />


                <label>Account no: <br /><input type="number" onChange={(e) => setData({ ...userData, account: e.target.value })} /></label><br /><br />

                <label>confirm account no: <br /><input type="number" onChange={(e) => setData({ ...userData, confirmAccount: e.target.value })} /></label><br />

                {(userData.account === userData.confirmAccount) ? <p></p> : <p className='error'>{errorMas.accountError}</p>}
                <br />


                <label>mobile no: <br /> <input type="number" onChange={(e) => setData({ ...userData, mobile: e.target.value })} /></label><br />

                {(userData.mobile.length === 10) ? <p></p> : <p className='error'>{errorMas.mobileError}</p>}
                <br />


                <label>available balance: <br /><input type="number" onChange={(e) => setData({ ...userData, account: e.target.value })} /></label><br /><br />

                <label>amount to be debited: <br /><input type="number" onChange={(e) => setData({ ...userData, debited: e.target.value })} /></label><br />

                {(userData.debited <= userData.account) ? <p></p> : <p className='error'>{errorMas.accountError}</p>}
                <br />

                <button>Submit</button>

            </form>

        </div>
    )
}

// ----create form --------

// -name of the account holder
// -available balance
// -amount to be debited
// -mobile no
// -account no.
// -confirm account no.

// ______conditions:______

// 1)check if the available balance is less than the amount to be withdrawn. If yes then show error massage "insufficient funds"

// 2)mobile no should be 10 digits number only

// 3)account and confirm account no. Should be samet



