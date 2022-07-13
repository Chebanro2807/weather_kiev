import { useState, useEffect } from 'react';
import {fetch} from './fetch'

export function useWeather() {
    const [weather, setWeather] = useState({});

    useEffect(()=>{
        const kiev = fetch('https://api.weatherapi.com/v1/current.json?key=b677082ac19f45aca07212645220401&q=Kiev&aqi=no)')
        kiev.then((data) => {
            setWeather({
                country: data.location.country,
                name: data.location.name,
                temp_c: data.current.temp_c,
                cloud: data.current.cloud,
                humidity: data.current.humidity,
                text: data.current.condition.text
            });
        });
    }, [])

    return weather;
}
