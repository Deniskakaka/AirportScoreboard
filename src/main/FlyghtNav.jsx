import React from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from "react-router";
import moment from 'moment';
import qs from 'qs';

function FlyghtNav ({ search, data }) {
    let yesterday = qs.stringify({ 'data': moment().add(-1, 'days').format('DD-MM-YYYY'), 'search': search }, { encode: false });
    let today = qs.stringify({ 'data': moment().format('DD-MM-YYYY'), 'search': search }, { encode: false });
    let tomorrow = qs.stringify({ 'data': moment().add(1, 'days').format('DD-MM-YYYY'), 'search': search }, { encode: false });
    let location = useLocation().pathname;
    
    return (
        <div className="navOfTime">
        <Link
            className={ data === moment().add(-1, 'days').format('DD-MM-YYYY') ? "yesterday borderBlue" : "yesterday"}
            to={{
                pathname: location,
                search: yesterday
            }}>
            <span className="today__time">{moment().add(-1, 'days').format('DD/MM')}</span>
            <span className="today__name">Yesterday</span>
        </Link>
        <Link
            className={data === moment().format('DD-MM-YYYY') ? "today borderBlue" : "today"} 
            to={{
                pathname: location,
                search: today
            }}>
            <span className="today__time">{moment().format('DD/MM')}</span>
            <span className="today__name">Today</span>
        </Link>
        <Link
            className={ data === moment().add(1, 'days').format('DD-MM-YYYY') ? "tommorow borderBlue" : "tommorow"}
            to={{
                pathname: location,
                search: tomorrow
            }}>
            <span className="today__time">{moment().add(1, 'days').format('DD/MM')}</span>
            <span className="today__name">Tommorow</span>
        </Link>
    </div>
    )
};

export default FlyghtNav;