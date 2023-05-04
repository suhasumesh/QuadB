import React from 'react'
// import Table from './Table';

const Tabledata = (props) => {
    return (
        <div className='container'>
            <h2 className={` container my-5 mx-5 text-${ props.mode==='light'?'dark':'light'}`}> These are the Top 10 Cryptos to buy and sell </h2>
                        <table className='table fixed-bottom'>
                            <thead>
                                <tr className={`text-${ props.mode==='light'?'dark':'light'}`}>
                                    <th>Name</th>
                                    <th>Base_Unit</th>
                                    <th>Last Price</th>
                                    <th>High Price</th>
                                    <th>Low Price</th>
                                    <th>Volume</th>
                                    <th>Open</th>
                                    <th>Buy/Sell</th>
                                </tr>
                            </thead>
                            <tbody>
                                {props.data.map((ticker) => (
                                    <tr className={`text-${ props.mode==='light'?'dark':'light'}`} key={ticker.name}>
                                        <td >{ticker.name}</td>
                                        <td >{ticker.base_unit}</td>
                                        <td >₹{ticker.lastPrice}</td>
                                        <td >₹{ticker.highPrice}</td>
                                        <td >₹{ticker.lowPrice}</td>
                                        <td >{ticker.volume}</td>
                                        <td>{ticker.open}</td>
                                        <td >₹{ticker.buy}/₹{ticker.sell}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

    )
}

export default Tabledata