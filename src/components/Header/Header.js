import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
  const location = useLocation();
  const isMain = location.pathname === "/";

  return (
    <StyledHeader>
      <Title>
        <StyledLink to="/">BSM Seongnam</StyledLink>
      </Title>
      <nav>
        <NavList>
          <NavItem isMain={isMain}>
            <StyledLink to="/">About</StyledLink>
          </NavItem>
          <NavItem isMain={!isMain}>
            <StyledLink to="/projects">Projects</StyledLink>
          </NavItem>
        </NavList>
      </nav>
    </StyledHeader>
  );
};

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 90px;
  padding: 0 40px;
`;

const Title = styled.h1`
  font-weight: 300;
  color: ${({ theme }) => theme.primary};
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  margin-right: 8px;
  color: ${({ isMain, theme }) => (isMain ? theme.primary : theme.secondary)};
  font-weight: 300;

  &:last-child {
    margin-right: 0;
  }
`;

const StyledLink = styled(Link)`
  display: block;
  padding: 20px 0;
`;
