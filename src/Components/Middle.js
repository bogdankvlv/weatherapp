import React from 'react';
import { Segment,Image} from 'semantic-ui-react';


const MiddleSection = () => {
  return (
    <Segment
      style={{
        height: '70vh',
        backgroundImage: `url(${require('E:/Documents/myap/weatherapp/src/Components/images/aydobweather.png')})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      

    </Segment>
  );
}


export default MiddleSection;
