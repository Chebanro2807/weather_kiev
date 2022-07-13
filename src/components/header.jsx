import '../App.css';
import { Routes, Route, Link } from 'react-router-dom'
import Author from './author'
import WeatherPage from './weather'

export default function Header() {
    return (
        <>
            <h1 className='header'>
                <Link className='link' to="/">weather</Link>
                <Link className='link' to="/author">author</Link>
            </h1>
            <Routes>
                <Route path='/' element={<WeatherPage/>}/>
                <Route path='/author' element={<Author/>}/>
            </Routes>
        </>
    );
}
