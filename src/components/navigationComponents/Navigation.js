import React, { Component } from 'react';

import { NavContainer, NavListContainer, NavItems } from './navStyle';

export class Navigation extends Component {
  state = {
    navOpen: false
  }

  handleToggleNav = () => {
    this.setState({
      navOpen: !this.state.navOpen
    });
  }

  render(){
    if(this.state.navOpen){
      return(
        <NavContainer>
          <NavListContainer>
            <NavItems onClick={this.handleToggleNav}>Close</NavItems>
            <NavItems>Patrick Fohnen</NavItems>
            <NavItems>test3</NavItems>
            <NavItems>test4</NavItems>
          </NavListContainer>
        </NavContainer>
      );
    }else{
      return(
        <NavContainer>
          <NavListContainer>
            <NavItems onClick={this.handleToggleNav}>Menü</NavItems>
          </NavListContainer>
        </NavContainer>
      );
    }
  }
}
