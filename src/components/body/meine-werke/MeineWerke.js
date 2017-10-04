import React, { Component } from 'react';

import { Container, VideoContainer, Video } from './meineWerkeStyle.js';

export class MeineWerke extends Component {
  render(){
    return(
      <Container fullScreen>

        <VideoContainer>
          <Video autoPlay loop>
            <source src="http://deuxpointsproduction.com/wp-content/uploads/2017/10/ameise-3.m4v"/>
          </Video>
        </VideoContainer>
      </Container>
    );
  }
}
