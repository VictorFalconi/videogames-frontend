import { React } from 'react';
import loader from '../../img/loader.gif'
import './Loader.css'


export default function Loader() {
    return (
        <div className='loader-container'>
            <img src={loader} alt='loading banner'/>
            <h2 id='load-text'>Loading...</h2>
        </div>
    );
};