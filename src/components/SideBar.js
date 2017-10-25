import React, { Component } from 'react';
import { Nav, NavItem, Button } from 'react-bootstrap';

import { connect } from 'react-redux';
import { setLinkValueAsync } from '../actions';
// import { bindActionCreators } from 'redux';
import { LinkContainer } from 'react-router-bootstrap';

import '../style/style.css';
import '../style/sideBar.css';

class SideBar extends Component {
    handleValueOne = () => {
        this.props.setLinkValueAsync(1);
    }
    handleValueTwo = () => {
        this.props.setLinkValueAsync(2);
    }
    handleValueThree = () => {
        this.props.setLinkValueAsync(3);
    }
    handleValueFour = () => {
        this.props.setLinkValueAsync(4);
    }
    handleValueFive = () => {
        this.props.setLinkValueAsync(5);
    }
    handleValueSix = () => {
        this.props.setLinkValueAsync(6);
    }
    handleValueSeven = () => {
        this.props.setLinkValueAsync(7);
    }
    handleValueEight = () => {
        this.props.setLinkValueAsync(8);
    }
    render() {
        return (
            <Nav
              activeKey={this.props.linkValue}
              className="sideBar">
              <div style={{display: 'flex', paddingBottom: 50}}>
                <i className="fa fa-music fa-3x" aria-hidden="true"></i>
                <h4 style={{ fontWeight:700, marginLeft: 10, paddingTop: 10 }}>JAMHEART</h4>
              </div>
              <LinkContainer to="/dashboard">
                <NavItem
                  eventKey={1}
                  onClick={this.handleValueOne}
                  className="componentLink">
                    Dashboard
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/feed">
                <NavItem
                  eventKey={2}
                  onClick={this.handleValueTwo}
                  className="componentLink">
                    Feed
                </NavItem>
              </LinkContainer>
              <LinkContainer to="/favorites">
                <NavItem
                  eventKey={3}
                  onClick={this.handleValueThree}
                  className="componentLink">
                    Favorites
                </NavItem>
              </LinkContainer>
              <h6 style={{
                marginTop: 55,
                marginBottom: 24,
                fontSize: 8,
                color: '#d3d4d5',
                marginLeft: 15,
              }}>
                CHANNELS
              </h6>
              <NavItem
                eventKey={4}
                onClick={this.handleValueFour}
                className="socialMedia">
                <div style={{ display: 'inline-block', marginRight: 7 }}>
                  <img src="/logos/facebook-small.svg" alt="facebook" width="7px" height="14px" />
                </div>
                  Facebook
              </NavItem>
              <LinkContainer to="/youtube">
                <NavItem
                  eventKey={5}
                  onClick={this.handleValueFive}
                  className="socialMedia">
                  <img src="/logos/youtube-small.svg" alt="youtube" width="14px" height="10px" />
                    YouTube
                </NavItem>
              </LinkContainer>
              <NavItem
                eventKey={6}
                onClick={this.handleValueSix}
                className="socialMedia">
                <img src="/logos/soundcloud-small.svg" alt="soundcloud" width="14px" height="6px" />
                  SoundCloud
              </NavItem>
              <NavItem
                eventKey={7}
                onClick={this.handleValueSeven}
                className="socialMedia">
                <img src="/logos/spotify-small.svg" alt="spotify" width="14px" height="14px" />
                  Spotify
              </NavItem>
              <NavItem
                eventKey={8}
                onClick={this.handleValueEight}
                className="socialMedia">
                <img src="/logos/hype-machine-small.svg" alt="hypem" width="14px" height="10px" />
                  HypeM
              </NavItem>
              <Button bsStyle="info" className="channelButton" >
                <i class="fa fa-plus" aria-hidden="true"></i>
                  Add Channel
              </Button>
            </Nav>
        );
    }
}

const mapStateToProps = ({ linkValueReducer }) => {
  const { linkValue } = linkValueReducer;
  return { linkValue };
}

// const mapDispatchToProps = (dispatch) => {
//    return bindActionCreators({ setLinkValueAsync }, dispatch);
// };

export default connect(mapStateToProps, { setLinkValueAsync } )(SideBar);
