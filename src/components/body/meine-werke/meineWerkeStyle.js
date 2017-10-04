import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: auto;

  ${props => props.fullScreen && css`
    height: 100vh;
  `}
`;


// Video

export const VideoContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  overflow: hidden;
`;

export const Video = styled.video`
  width: auto;
  height: 100vh;
`;
