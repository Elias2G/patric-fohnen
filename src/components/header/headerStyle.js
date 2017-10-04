import styled, { css } from 'styled-components';

export const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const HeadVideo = styled.video`
  width: auto;
  height: 100vh;
`;



export const TitleContainer = styled.div`
  margin-top: 80px;
  width: 100%;
  height: auto;
  position: absolute;
`;

export const HeadTitle = styled.h1`
  text-align: center;
  font-family: 'Raleway', sans-serif;
  font-weight: 400;
  font-size: 48pt;

  ${props => props.white && css`
    color: #ebebeb;
  `}
`;

export const Style = styled.span`
  ${props => props.grey && css`
    color: lightgrey;
  `}
  ${props => props.border && css`
    border: 1px solid lightgrey;
  `}
  ${props => props.padding && css`
    padding: 0px 40px 0px 40px;
  `}
`;
