import React from 'react'
import { FaTelegram } from "react-icons/fa";


const NavBar = (props) => {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/">{props.title}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="/">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" to="/about">{props.aboutText}</a>
                        </li>
                        <li className='nav justify-content-center'>
                            <li className="nav-item dropdown nav justify-content-center ">
                                <a className="nav-link dropdown-toggle mx-auto p-2 justify-content-center" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    INR
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">INR</a></li>
                                </ul>
                            </li>
                        </li>
                        <li className='nav justify-content-center'>
                            <li className="nav-item dropdown nav justify-content-center ">
                                <a className="nav-link dropdown-toggle mx-auto p-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    BTC
                                </a>
                                <ul className="dropdown-menu">
                        {props.data.map((ticker) => (
                                    <li><a className="dropdown-item" href="#">{ticker.name}</a></li>
                                    
                                    ))}
                                </ul>
                            </li>
                        </li>
                        <li className='nav justify-content-center'>
                            <li className="nav-item dropdown nav justify-content-center ">
                                <a className="nav-link dropdown-toggle mx-auto p-2" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    BUY BTC
                                </a>
                                <ul className="dropdown-menu">
                                    <li><a className="dropdown-item" href="#">BUY BTC</a></li>
                                </ul>
                            </li>
                        </li>
                        
                    </ul>
                    <button type="button" className="btn btn-primary" id="liveToastBtn"><FaTelegram size={30}/> Connect Telegram</button>

                    <div className="toast-container position-fixed bottom-0 end-0 p-3">
                        <div id="liveToast" className="toast" role="alert" aria-live="assertive" aria-atomic="true">
                            <div className="toast-header">
                                <img src="..." className="rounded me-2" alt="..." />
                                <strong className="me-auto">HODLINFO-Telegram</strong>
                                <small>11 mins ago</small>
                                <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
                            </div>
                            <div className="toast-body">
                                Connect to telegram
                            </div>
                        </div>
                    </div>
                    <button type="button" className="btn btn-primary mx-2" onClick={props.save}>Save</button>
                    <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light'} mx-2`}>
                        <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" htmlFor="flexSwitchCheckDefault"></label>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar