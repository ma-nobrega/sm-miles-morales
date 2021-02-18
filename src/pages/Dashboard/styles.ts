import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1448px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const Header = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.4rem;
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
    height: 75px;
    width: 54px;
    margin-right: 4.8rem;
  }
`;

export const NavBarSecondary = styled.nav`
  a {
    color: #ffffff;
    text-decoration: none;
    font-size: 18px;
    line-height: 30px;
    & + a {
      margin-left: 4.8rem;
    }
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
