import '../App.css';
import {useWeather} from '../useApi'

function WeatherPage() {
    const onLine = useWeather()
    return (
        <div className='weather'>
            <div>country {onLine.country}</div>
            <div>country {onLine.name}</div>
            <div>temperature {onLine.temp_c}</div>
            <div>clouds {onLine.cloud}</div>
            <div>humidity {onLine.humidity}</div>
            <div>condition {onLine.text}</div>
        </div>
    );
}

export default WeatherPage;
