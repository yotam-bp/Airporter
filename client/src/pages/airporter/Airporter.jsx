import React, { useEffect, useState } from 'react'
import FlightList from '../../cmps/FlightList/FlightList'
import Search from '../../cmps/Search/Search'
import { getflightsData } from '../../api/opensky';
import Counter from '../../cmps/Counter/Counter'

const Airporter = () => {
    const [arrivals, setArrivals] = useState(null)
    const [departures, setDepartures] = useState(null)
    const [error, setError] = useState(false);

    const fetchData = async (startCount, endCount, airport) => {
        console.log('in fetch', startCount, endCount, airport);
        getflightsData('arrival', startCount, endCount, airport)
            .then(data => setArrivals(data))
            .catch(err => {
                setError(error);
                alert('Error occurred, please try again')
            })
        getflightsData('departure', startCount, endCount, airport)
            .then(data => setDepartures(data))
            .catch(err => {
                setError(error);
                alert('Error occurred, please try again')
            })
    }

    return (
        <section className="app-container">
            <Search fetchData={fetchData} />
            {arrivals &&
                <div className="arrivals">
                    <div className="flex space-between">
                    <h1>Arrivals</h1>
                    <Counter/>
                    </div>
                    <div className="divider"></div>
                    <FlightList flights={arrivals} />
                </div>
            }
            {departures &&
                <div className="departures">
                    <div className="flex space-between">
                    <h1>Departures</h1>
                    <Counter/>
                    </div>
                    <div className="divider"></div>
                    <FlightList flights={departures} />
                </div>
            }
        </section>
    )
}

export default Airporter