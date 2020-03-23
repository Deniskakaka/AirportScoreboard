import React from 'react';
import moment from 'moment';
import { useLocation } from "react-router";
import PropTypes from 'prop-types';
import './main.scss'

function FlyghtList({ search, time }) {
    let location = useLocation().pathname;

    return (
        <div className="conteyner">
            {time !== undefined ? time.filter(i => search !== ''
                ? `${i['carrierID.IATA']}${i.fltNo}` === search : i).length === 0
                ? <div className="notFound">Not Found</div>
                : time.filter(i => search !== '' ? `${i['carrierID.IATA']}${i.fltNo}` === search : i).map(i =>
                    <li className="list" key={i.ID}>
                        <div className={i.term === 'D' ? "list__terminal blue" : "list__terminal"}>{i.term}</div>
                        <span className="list__localTime">{moment(i.timeToStand).format('HH:mm')}</span>
                        <span className="list__nameLocation">
                            {location === '/departures' ? i['airportToID.name_en'] : i['airportFromID.name_en']}
                        </span>
                        <span className="list__factTimeDepartures">{i.status === 'CX'
                            ? 'Cancelled'
                            : moment().format('YYYY-MM-DD-HH:mm') < moment(location === '/departures'
                                ? i.timeDepShedule
                                : i.timeArrShedule).format('YYYY-MM-DD-HH:mm')
                                ? 'On time'
                                : `Departed at ${moment(i.actual).format('HH:mm')}`}
                        </span>
                        <span className="list__nameAirCompany">
                            <div className="list__nameAirCompany__logo">
                                {i.codeShareData.map(i => <img src={`${i.airline.en.logoSmallName}`} />)}
                            </div>
                            <div className="list__nameAirCompany__name">
                                {i.codeShareData.map(i => <span>{i.airline.en.name}</span>)}
                            </div>
                        </span>
                        <span className="list__numberFly">{`${i['carrierID.IATA']}${i.fltNo}`}</span>
                    </li>) : ''}
        </div>
    )
}

FlyghtList.propTypes = {
    search: PropTypes.string,
    time: PropTypes.array
};

export default FlyghtList;