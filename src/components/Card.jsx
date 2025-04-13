/*
        Project Card for projects section
        Projects -> Cards
*/

import React from "react"
import "../style/card.css"

export default function Card(Props) {
    return (
        <div className="card-container">
            <div className="card">
                <div className="card-content">
                    <h3>{Props.Proj_Title}</h3>
                    <p>{Props.Proj_Paragraph}</p>
                </div>
                <div className="card-links">
                    <a href={Props.Proj_Link} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M13.75 21.25H8.75C7.02083 21.25 5.54667 20.6404 4.3275 19.4213C3.10833 18.2021 2.49917 16.7283 2.5 15C2.5 13.2708 3.10958 11.7967 4.32875 10.5775C5.54792 9.35833 7.02167 8.74917 8.75 8.75H13.75V11.25H8.75C7.70833 11.25 6.82292 11.6146 6.09375 12.3438C5.36458 13.0729 5 13.9583 5 15C5 16.0417 5.36458 16.9271 6.09375 17.6563C6.82292 18.3854 7.70833 18.75 8.75 18.75H13.75V21.25ZM10 16.25V13.75H20V16.25H10ZM16.25 21.25V18.75H21.25C22.2917 18.75 23.1771 18.3854 23.9062 17.6563C24.6354 16.9271 25 16.0417 25 15C25 13.9583 24.6354 13.0729 23.9062 12.3438C23.1771 11.6146 22.2917 11.25 21.25 11.25H16.25V8.75H21.25C22.9792 8.75 24.4533 9.35958 25.6725 10.5788C26.8917 11.7979 27.5008 13.2717 27.5 15C27.5 16.7292 26.8904 18.2033 25.6713 19.4225C24.4521 20.6417 22.9783 21.2508 21.25 21.25H16.25Z" fill="#14263B" />
                    </svg></a>
                    <a href={Props.GitLink} target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 30 30" fill="none">
                        <path d="M15 2.5C13.3585 2.5 11.733 2.82332 10.2165 3.45151C8.69989 4.07969 7.3219 5.00043 6.16116 6.16117C3.81696 8.50537 2.5 11.6848 2.5 15C2.5 20.525 6.0875 25.2125 11.05 26.875C11.675 26.975 11.875 26.5875 11.875 26.25V24.1375C8.4125 24.8875 7.675 22.4625 7.675 22.4625C7.1 21.0125 6.2875 20.625 6.2875 20.625C5.15 19.85 6.375 19.875 6.375 19.875C7.625 19.9625 8.2875 21.1625 8.2875 21.1625C9.375 23.0625 11.2125 22.5 11.925 22.2C12.0375 21.3875 12.3625 20.8375 12.7125 20.525C9.9375 20.2125 7.025 19.1375 7.025 14.375C7.025 12.9875 7.5 11.875 8.3125 10.9875C8.1875 10.675 7.75 9.375 8.4375 7.6875C8.4375 7.6875 9.4875 7.35 11.875 8.9625C12.8625 8.6875 13.9375 8.55 15 8.55C16.0625 8.55 17.1375 8.6875 18.125 8.9625C20.5125 7.35 21.5625 7.6875 21.5625 7.6875C22.25 9.375 21.8125 10.675 21.6875 10.9875C22.5 11.875 22.975 12.9875 22.975 14.375C22.975 19.15 20.05 20.2 17.2625 20.5125C17.7125 20.9 18.125 21.6625 18.125 22.825V26.25C18.125 26.5875 18.325 26.9875 18.9625 26.875C23.925 25.2 27.5 20.525 27.5 15C27.5 13.3585 27.1767 11.733 26.5485 10.2165C25.9203 8.69989 24.9996 7.3219 23.8388 6.16117C22.6781 5.00043 21.3001 4.07969 19.7835 3.45151C18.267 2.82332 16.6415 2.5 15 2.5Z" fill="#14263B" />
                    </svg></a>
                </div>
                <div className="card-arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                        <path d="M5.00002 3.49996L5.00002 21.5C5.00059 21.6822 5.05085 21.8608 5.1454 22.0166C5.23994 22.1724 5.37518 22.2995 5.53657 22.3842C5.69796 22.4688 5.87938 22.5078 6.0613 22.4971C6.24322 22.4863 6.41876 22.4261 6.56902 22.323L19.569 13.323C20.108 12.95 20.108 12.052 19.569 11.678L6.56902 2.67796C6.41907 2.57379 6.24345 2.5127 6.06122 2.50133C5.879 2.48996 5.69714 2.52875 5.53541 2.61348C5.37368 2.69821 5.23826 2.82564 5.14387 2.98193C5.04948 3.13822 4.99973 3.31738 5.00002 3.49996Z" fill="#556271" />
                    </svg>
                </div>
            </div>
            <div className="date-container">
                <div className="timeline-el"></div>
                <p>{Props.RepoDate}</p>
            </div>
        </div>
    )
}