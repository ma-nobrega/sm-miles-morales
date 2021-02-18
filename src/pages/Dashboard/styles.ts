import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-between;
`;
export const Header = styled.div`
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
    height: 96px;
    width: 96px;
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
`;

export const Main = styled.div`
  display: grid;
  width: 100%;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'DESCRIPTION IMAGE';
`;

export const Description = styled.div`
  grid-area: DESCRIPTION;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  height: calc(100vh - 10rem);
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
  font-size: 14px;
  a {
    display: flex;
    align-items: center;
    justify-content: center;
    background: linear-gradient(267.72deg, #f02a2f 0.88%, #ea1d22 100%);
    color: white;
    border: 0;
    border-radius: 0.4rem;
    width: 200px;
    height: 40px;
    & + a {
      margin-left: 1.6rem;
    }
    &:last-child {
      color: white;
      background: transparent;
      border: solid 1px red;
    }
  }
`;

export const Developers = styled.div`
  margin-top: 2.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  img + img {
    margin-left: 2.4rem;
  }
`;

export const Image = styled.div`
  grid-area: IMAGE;
  position: relative;
  z-index: 0;
  img {
    width: 1000px;
    position: absolute;
    z-index: 1;
    top: -8rem;
    left: -28rem;
  }
`;
