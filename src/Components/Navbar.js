import React from 'react';
import { Container, Menu, MenuItem,Image } from 'semantic-ui-react';



const Navbar = () => {
    return (
      <Menu  fixed="top" inverted>
        <Container>
          <Menu.Item header>
            <Image size="mini" src="E:/Documents/myap/weatherapp/src/Components/images/aydobweather.png" style={{ marginRight: '1em' }} />
            AydobWeather
          </Menu.Item>
          <Menu.Item as="a" href="/">
            Home
          </Menu.Item>
          <Menu.Item as="a" href="/current-weather">
            Current Weather
          </Menu.Item>
          <Menu.Item as="a" href="/forecast">
            Forecast
          </Menu.Item>
          <Menu.Item position="right">
            <MenuItem>
              <input placeholder="Location.." />
            </MenuItem>
          </Menu.Item>
        </Container>
        
      </Menu>

    );
  };

export default Navbar;