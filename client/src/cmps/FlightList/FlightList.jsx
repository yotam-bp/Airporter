import React from 'react'
import FlightPreview from '../FlightPreview/FlightPreview'

const FlightList = ({ flights }) => {


    return (
        <div className="flights-table">
            <table className="table-base">
                <tbody>
                    <tr>
                        <th>CallSign</th>
                        <th>First Seen</th>
                        <th>Last Seen</th>
                        <th>Arrival Airport and Distance</th>
                        <th>Departure Airport and Distance</th>
                        <th>Icao</th>
                        <th>Status</th>
                    </tr>
                    {flights.map((flight, idx) => {
                        return <FlightPreview flight={flight} key={flight.icao24} idx={idx} />
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default FlightList
