import React , {useState}  from 'react';
import { PropTypes } from 'prop-types';
import {
    TelephoneSection,
    TelephoneFacade,
    TelephoneWindow,
    TelephoneContent,
    Doorknob
} from './TelephoneStyle';

const Telephone = (props) => {

    const [position] =  useState(props.position);

    return(
        <TelephoneSection position={position}>
            <TelephoneFacade  >
                <TelephoneContent>Telephone</TelephoneContent>
                <TelephoneWindow>
                    <div className="horizontal-1"></div>
                    <div className="horizontal-2"></div>
                    <div className="horizontal-3"></div>
                    <div className="vertical-1"></div>
                    <div className="vertical-2"></div>
                </TelephoneWindow>
                <Doorknob/>
            </TelephoneFacade>
        </TelephoneSection>
    );
}

Telephone.propTypes = {
    position: PropTypes.shape({
      top: PropTypes.string,
      left: PropTypes.string,
      right: PropTypes.string,
      bottom: PropTypes.string,
      margin: PropTypes.string
    }),
};
export default Telephone;