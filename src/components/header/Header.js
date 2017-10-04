import React, { Component } from 'react';

import { VideoContainer, HeadVideo, TitleContainer, HeadTitle, Style } from './headerStyle';

export class Header extends Component {
  render(){
    return(
      <VideoContainer>
        <TitleContainer>
          <HeadTitle white>
            Ein Film<br />
            <Style grey border padding>braucht</Style><br />
            Emotionen<br />
          </HeadTitle>
        </TitleContainer>
        <HeadVideo autoPlay loop>
          <source src="http://deuxpointsproduction.com/wp-content/uploads/2017/10/ameise-3.m4v" />
        </HeadVideo>
      </VideoContainer>
    );
  }
}
