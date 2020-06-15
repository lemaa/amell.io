import React  from 'react';
 
// Child components
import City from '../components/Base/CityComponent';
import Resume from '../components/Resume/ResumeComponent';

const ResumeContainer = (props) => {
 
    return (
        <>
            <City/>
            <Resume/>
        </>
        );
};

export default ResumeContainer;
