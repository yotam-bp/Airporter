
import React, { useEffect, useState } from 'react'
// import hero from '../../assets/img/hero.png'
import { useFormik} from 'formik'
import { utilService } from '../../util/util'

const Search = ({fetchData}) => {


    const formik = useFormik({
        initialValues: {
            airport: '',
            to: '',
            time: '',
            return: '',
            travellers: ''
        },
        onSubmit: values => {
            let startCount = Date.parse(values.time) / 1000 ;
            let endCount = startCount + 7200;
            let airport = values.airport
            console.log('startCount',startCount,'endCount',endCount);
            fetchData(startCount,endCount,airport)
            // console.log('startCount',utilService.getTime(startCount),'endCount',utilService.getTime(endCount));
            // alert(JSON.stringify(values, null, 2));
        },
    });
    return (
        <form onSubmit={formik.handleSubmit} className="search-flight flex justify-center">
            {/* <p>{seconds}</p> */}
            <div className="flex column ">
                <label htmlFor="airport">Airport</label >
                <input
                    id="airport"
                    name="airport"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.airport}
                    required/>
            </div>
            <div className="flex column">
                <label htmlFor="time">Time</label>
                <input
                    id="time"
                    name="time"
                    type="datetime-local"
                    onChange={formik.handleChange}
                    value={formik.values.time}
                    required/>
            </div>
            <button type="submit">Search</button>
        </form>
    );
}
export default Search;