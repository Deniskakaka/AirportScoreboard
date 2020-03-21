import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getList } from '../redux/fly.actions.js';
import {
    ListTodayDeparture,
    ListTomorrowDeparture,
    ListYesterdayDeparture,
    ListTodayArrivel,
    ListTomorrowArrivel,
    ListYesterdayArrivel
} from './flyght.selector.js';
import FlyghtList from './FlyghtList.jsx';
import { departer, arrivel } from './functionsDistributors.js';
import { useLocation } from "react-router";
import FlyghtNav from './FlyghtNav.jsx';
import qs from 'qs';

function Departures({
    search,
    get,
    listTodayDeparture,
    listTommorowDeparture,
    ListYesterdayDeparture,
    ListTodayArrivel,
    ListTomorrowArrivel,
    ListYesterdayArrivel
}) {

    let location = useLocation().pathname;
    let delimited = qs.parse(window.location.search, {
        ignoreQueryPrefix: true
    });
    useEffect(() => {
        get()
    }, []);

    return (
        <div className="main">
            <FlyghtNav search={search} data={delimited.data}/>
            <FlyghtList search={search} time={location === '/departures'
                ? departer(delimited.data, listTodayDeparture, listTommorowDeparture, ListYesterdayDeparture)
                : arrivel(delimited.data, ListTodayArrivel, ListTomorrowArrivel, ListYesterdayArrivel)} />
        </div>
    )

};

const mapState = state => {
    return {
        search: state.head.search,
        listTodayDeparture: ListTodayDeparture(state),
        listTommorowDeparture: ListTomorrowDeparture(state),
        ListYesterdayDeparture: ListYesterdayDeparture(state),
        ListTodayArrivel: ListTodayArrivel(state),
        ListTomorrowArrivel: ListTomorrowArrivel(state),
        ListYesterdayArrivel: ListYesterdayArrivel(state)
    }
}

const mapDispatch = {
    get: getList
}

export default connect(mapState, mapDispatch)(Departures);