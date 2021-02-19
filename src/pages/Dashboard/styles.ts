import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  position: relative;
  z-index: 0;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;

export const Content = styled.div`
  position: absolute;
  z-index: 1;
  max-width: 1440px;
  width: 100%;
  @media (max-width: 1500px) {
    width: 90%;
  }
`;

export const Video = styled.video`
  height: 100vh;
  @media (max-width: 1500px) {
    height: auto;
    width: 100%;
  }
  @media (max-width: 1100px) {
    display: none;
  }
`;

export const Gradiente = styled.div`
  position: absolute;
  z-index: 1;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(
    110deg,
    #0a0c10 25%,
    rgba(11, 12, 16, 0.8) 50%,
    #0a0c10 70%
  );
`;

export const Header = styled.div`
  z-index: 2;
  padding-top: 2rem;
  width: 100%;
  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavBar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Logo = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  img {
    height: 9.6rem;
    width: 9.6rem;
  }
`;

export const NavBarSecondary = styled.nav`
  display: flex;
  align-items: center;
  a {
    color: #959698;
    font-size: 16px;
    line-height: 30px;
    margin-left: 4.8rem;
    &:last-child {
      color: #ea1d22;
    }
  }
  @media (max-width: 550px) {
    display: none;
  }
`;

export const Social = styled.div`
  display: flex;
  align-items: center;
  > svg {
    color: #c4c4c4;
    height: 18px;
    width: 18px;
    cursor: pointer;
    & + svg {
      margin-left: 2.4rem;
    }
  }
  @media (max-width: 750px) {
    display: none;
  }
`;

export const Main = styled.div`
  z-index: 2;
  display: grid;
  position: relative;
  width: 100%;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'DESCRIPTION IMAGE';
  @media (max-width: 1100px) {
    display: flex;
    align-items: center;
    flex-direction: column-reverse;
    justify-content: space-around;
  }
`;

export const Description = styled.div`
  z-index: 2;
  position: absolute;
  width: 100%;
  top: 8rem;
  grid-area: DESCRIPTION;
  @media (max-width: 1100px) {
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    position: initial;
  }
  > img {
    width: 100%;
  }
  > p {
    color: #959698;
    margin-top: 1.6rem;
    font-size: 1.4rem;
    max-width: 504px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-top: 2.4rem;
  text-transform: uppercase;
  font-style: italic;
  a {
    font-size: 1.4rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(267.72deg, #f02a2f 0.88%, #ea1d22 100%);
    color: white;
    border: 0;
    border-radius: 0.4rem;
    width: 20rem;
    height: 4rem;
    & + a {
      margin-left: 1.6rem;
    }
    &:last-child {
      color: white;
      background: transparent;
      border: solid 1px red;
    }
  }
  @media (max-width: 1100px) {
    justify-content: space-evenly;
  }
`;

export const Developers = styled.div`
  margin: 2.4rem 0 0.8rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  img + img {
    margin-left: 2.4rem;
  }
  > svg {
    color: #c4c4c4;
    height: 18px;
    width: 18px;
    margin-left: 2.4rem;
    cursor: pointer;
  }
  @media (min-width: 750px) {
    display: none;
  }
`;

export const Image = styled.div`
  z-index: 3;
  position: absolute;
  left: -10rem;
  grid-area: IMAGE;
  width: 100%;
  img {
    width: 120%;
  }
  @media (max-width: 1100px) {
    top: 0;
    display: flex;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    position: initial;
    img {
      width: 100%;
    }
  }
`;
