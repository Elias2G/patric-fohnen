import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;

  ${props => props.video && css`
    padding: 0px 10px 10px 10px;
    box-sizing: border-box;
  `}
  ${props => props.text && css`
    padding: 10px;
    box-sizing: border-box;
  `}
`;

export const Title = styled.h1`
  font-size: 24pt;
  text-align: center;
  color: #2b2b2b;
`;

export const Video = styled.video`
  width: 100%;
  height: auto;
`;

export const Text = styled.p`
  font-size: 12pt;
  color: #2b2b2b;
  font-weight: 400;

  ${props => props.removeMargin && css`
    margin-top: 0;
  `}

  ${props => props.justify && css`
    text-align: justify;
  `}
`;


export const BigTitle = styled.h1`
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 48pt;

  ${props => props.dark && css`
    color: #2b2b2b;
  `}

  ${props => props.removeMargin && css`
    margin-top: 0;
    margin-bottom: 10px;
  `}
`;

export const Style = styled.span`
  ${props => props.black && css`
    color: black;
  `}
  ${props => props.border && css`
    border: 1px solid black;
  `}
  ${props => props.padding && css`
    padding: 0px 124px 0px 124px;
  `}
`;
