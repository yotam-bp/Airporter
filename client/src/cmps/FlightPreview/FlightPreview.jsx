import React, { useEffect, useState } from 'react'
import { utilService } from '../../util/util'
import { getflightsData } from '../../api/opensky';

const FlightPreview = ({ flight, idx }) => {

    const [status, setStatus] = useState('New');

    return (
        <tr className="tr">
            <td>{flight.callsign}</td>
            <td>{utilService.getTime(flight.firstSeen)}</td>
            <td>{utilService.getTime(flight.lastSeen)}</td>
            <td>{(flight.estArrivalAirport) ? flight.estArrivalAirport : 'unknown'}</td>
            <td>{(flight.estDepartureAirport) ? flight.estDepartureAirport : 'unknown'}</td>
            <td>{flight.icao24}</td>
            <td><label htmlFor="status"></label>
                <select name="status" id="status" className={status} onChange={(event) => setStatus(event.target.value)}>
                    <option value="New" >New</option>
                    <option value="Handled" >Handled</option>
                    <option value="Warning" >Warning</option>
                </select></td>
        </tr>
    )
}

export default FlightPreview