import React, { Component } from 'react';

import { BodyContainer } from './bodyStyle';
import { PatricFohnen } from './patric-fohnen/Patric-Fohnen';
import { MeineWerke } from './meine-werke/MeineWerke';

export class Body extends Component {
  render(){
    return(
      <BodyContainer>
        <PatricFohnen />
        <MeineWerke />
      </BodyContainer>
    );
  }
}
