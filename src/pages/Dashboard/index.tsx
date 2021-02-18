import React from 'react';
import { FaFacebookF, FaInstagram, FaYoutube, FaTwitter } from 'react-icons/fa';
import {
  Container,
  Header,
  NavBar,
  Logo,
  NavBarSecondary,
  Social,
} from './styles';

import logo from '../../assets/icons/logo-spidermanbig.svg';

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
    </Container>
  );
};

export default Dashboard;
