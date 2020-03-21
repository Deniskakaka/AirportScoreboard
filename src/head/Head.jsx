import React from 'react';
import { connect } from 'react-redux';
import { useLocation } from "react-router";
import { numberFlyght, search } from '../redux/fly.actions.js';
import { Link } from 'react-router-dom';
import { functionCreateSearch } from './functionSearch.js';
import './header.scss';
import qs from 'qs';
import moment from 'moment';

function Head({ text, moveText, moveSearchText }) {

    let delimited = qs.parse(window.location.search, {
        ignoreQueryPrefix: true
    });
    let unencoded = qs.stringify({
        'data': delimited.data !== undefined
            ? delimited.data
            : moment().format('DD-MM-YYYY'), 'search': text
    }, { encode: false });
    let location = useLocation().pathname;

    return (
        <header className="header">
            <span className="header__logo">SEARCH FLIGHT</span>
            <div className="search">
                <input
                    className="header-search__input"
                    placeholder="Airline, destination or flight #"
                    type="text"
                    value={text} onChange={(event) => moveText(event.target.value)} />
                <Link to={{
                    pathname: location,
                    search: functionCreateSearch(text, delimited.data, unencoded)
                }}><button
                    className="header-search__button"
                    onClick={() => moveSearchText(text)}>Search</button></Link>
            </div>
            <div className="header-navigation">
                <Link to={{
                    pathname: "/departures",
                    search: functionCreateSearch(text, delimited.data, unencoded)
                }}><button
                    className={location === '/departures'
                        ? "header-navigation__departures white"
                        : "header-navigation__departures"} >
                        Departures
                    </button></Link>
                <Link to={{
                    pathname: "/arrivels",
                    search: functionCreateSearch(text, delimited.data, unencoded)
                }}><button
                    className={location === '/arrivels'
                        ? "header-navigation__arrivals white"
                        : "header-navigation__arrivals"} >
                        Arrivels</button></Link>
            </div>
        </header>
    );
};

const mapState = state => {
    return {
        text: state.head.text
    }
}

const mapDispatch = {
    moveText: numberFlyght,
    moveSearchText: search
}

export default connect(mapState, mapDispatch)(Head);