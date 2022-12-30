import React from 'react';
import './header.css'
import {Btn} from "../common/Btn";

export const Header = () => (
    <header>
        <h1>
            <strong>Ogłoszenia</strong>
        </h1>
        <Btn text={'dodaj ogłoszenie'}/>
        <div className="search">
            <input type="text"/> <Btn text={'Szukaj'}/>
        </div>
    </header>
)
