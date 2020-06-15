import React  from 'react';
 
// Child components
import City from '../components/Base/CityComponent';
import Contact from '../components/Contact/ContactComponent';

const ContactContainer = (props) => {
 
    return (
        <>
            <City/>
            <Contact/>
        </>
        );
};

export default ContactContainer;
