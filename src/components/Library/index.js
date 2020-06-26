import React, { useState }  from 'react';
import { PropTypes } from 'prop-types';
import {
    LibrarySection,
    LibraryFacade,
    LibrarySideFacade,
    LibraryDoor,
    FrontDoor,
    LibraryWindow,
    LibraryContent,
    Doorknob,
} from './LibraryStyle';

const Library = (props) => {
 
    const [position] = useState(props.position);
    return(
        <LibrarySection position={position}>
            <LibrarySideFacade>
                <LibraryWindow form="cube" bottom="3em"  width="2.5em">
                    <div className="vertical"></div>
                </LibraryWindow>
                <LibraryWindow form="cube" bottom="1em"  width="2.5em">
                    <div className="vertical"></div>
                </LibraryWindow>
            </LibrarySideFacade>
                <LibraryFacade>
                    <LibraryContent>Library</LibraryContent>
                    <LibraryDoor>
                        <FrontDoor>
                            <Doorknob></Doorknob>
                        </FrontDoor>
                    </LibraryDoor>
                    <LibraryWindow form="cube" bottom="4em"  width="4em">
                        <div className="vertical"></div>
                    </LibraryWindow>
                </LibraryFacade>
        </LibrarySection>
    );
}

Library.propTypes = {
    position: PropTypes.shape({
      top: PropTypes.string,
      left: PropTypes.string,
      right: PropTypes.string,
      bottom: PropTypes.string,
      margin: PropTypes.string
    })
  };
export default Library;