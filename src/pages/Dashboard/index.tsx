import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
  Container,
  Header,
  NavBar,
  Logo,
  NavBarSecondary,
  Social,
  Main,
  Description,
  Buttons,
  Developers,
  Image,
} from './styles';

import logo from '../../assets/icons/logo-spidermanbig.svg';
import marvel from '../../assets/icons/marvel.svg';
import ps from '../../assets/icons/ps.svg';
import spiderManText from '../../assets/spiderman-text.png';
import spiderMan from '../../assets/spiderman.png';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <Header>
        <NavBar>
          <Logo href="a">
            <img src={logo} alt="" />
          </Logo>
          <NavBarSecondary className="navbar">
            <a href="a" className="nav-link">
              Home
            </a>
            <a href="a" className="nav-link">
              Story
            </a>
            <a href="a" className="nav-link">
              Wallpapers
            </a>
            <a href="a">#BeYourself</a>
          </NavBarSecondary>
        </NavBar>

        <Social>
          <FaFacebookF />
          <FaInstagram />
          <FaYoutube />
          <FaTwitter />
        </Social>
      </Header>
      <Main>
        <Description>
          <img src={spiderManText} alt="" />

          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis
            velit magna vitae mauris orci fames posuere nibh. Sit tellus amet
            facilisi sit odio pulvinar scelerisque quam et. Ultrices facilisis
            nunc massa diam, quis mi imperdiet.
          </p>

          <Buttons>
            <a href="a">Pre-order now</a>
            <a href="a">watch the teaser</a>
          </Buttons>

          <Developers>
            <img src={ps} alt="" />
            <img src={marvel} alt="" />
          </Developers>
        </Description>
        <Image>
          <img src={spiderMan} alt="" />
        </Image>
      </Main>
    </Container>
  );
};

export default Dashboard;
