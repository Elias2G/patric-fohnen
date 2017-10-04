import React, { Component } from 'react';

import { Container, Title, Video, Text, BigTitle, Style } from './patric-fohnenStyle';

export class PatricFohnen extends Component {
  render(){
    return(
      <Container>
        <Title>Patric Fohnen</Title>

        <Container video>
          <Video controls>
            <source src="http://deuxpointsproduction.com/wp-content/uploads/2017/10/ameise-3.m4v"/>
          </Video>
        </Container>

        <Container text>
          <Text removeMargin justify>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
            ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Text>
        </Container>

        <BigTitle dark removeMargin>
          Das können<br />
          <Style black border padding>wir</Style><br />
          bieten
        </BigTitle>

        <Container text>
          <Text removeMargin justify>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
            labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et
            ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Text>
        </Container>

      </Container>
    );
  }
}
