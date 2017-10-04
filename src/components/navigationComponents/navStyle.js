import styled, { css } from 'styled-components';

export const NavContainer = styled.div`
  width: 100%;
  height: auto;
  position: fixed;
  z-index: 10000;
  border-bottom: 1px solid #2b2b2b;
  background-color: rgba(0,0,0,0);
`;

export const NavListContainer = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
`;

export const NavItems = styled.li`
  font-size: 16pt;
  font-weight: 400;
  width: 200px;
  height: 30px;
  text-align: center;
`;
