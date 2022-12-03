import React from 'react';
//import '../../App.css';
import Card from './ForHomepage/Card';
import Video from './ForHomepage/Video';
import Email from './ForHomepage/email';
//import Footer from '/ForHomepage/Footer'

function Homepage() {
    return (
        <>
            <Video />
            <Card />
            <Email />
        </>
    );
}

export {Homepage};