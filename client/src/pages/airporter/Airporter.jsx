import React, { useEffect, useState } from 'react'
import FlightList from '../../cmps/FlightList/FlightList'
import Search from '../../cmps/Search/Search'
import { getflightsData } from '../../api/opensky';

const Airporter = () => {
    const [arrivals, setArrivals] = useState(null)
    const [departures, setDepartures] = useState(null)
    const [error, setError] = useState(false);

    const fetchData = async (startCount,endCount,airport) => {
        console.log('in fetch', startCount,endCount,airport);
        getflightsData('arrival',startCount,endCount,airport)
            .then(data => setArrivals(data))
            .catch(err => {
                setError(error);
                alert('Error occurred, please try again')
            })
        getflightsData('departure',startCount,endCount,airport)
            .then(data => setDepartures(data))
            .catch(err => {
                setError(error);
                alert('Error occurred, please try again')
            })
    }



    return (
        <section className="app-container">
            <Search fetchData={fetchData}/>
            <button onClick={() => fetchData()}>x</button>
            {arrivals &&
                <div className="arrivals">
                    <h1>Arrivals</h1>
                    <div className="divider"></div>
                    <FlightList flights={arrivals} />
                </div>
            }
            {departures &&
                <div className="departures">
                    <h1>departures</h1>
                    <div className="divider"></div>
                    <FlightList flights={departures} />
                </div>
            }
        </section>
    )
}

export default Airporter