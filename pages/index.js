
import React from 'react';
import Head from 'next/head';

import Slider from '../src/components/landing_page/slider';
import Home from '../src/components/landing_page/home';
import Contact from '../src/components/landing_page/contact';
import Login from '../src/components/landing_page/login';
import Register from '../src/components/landing_page/register';

export default class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userSelection: 'home',
      navOutput: 'nav',
      shopName: '',
      advisorName: '',
      advisorEmail: '',
      advisorPassword: '',
      passwordConfirmation: '',
    };
    this.handleUserSelection = this.handleUserSelection.bind(this);
  }
  handleUserSelection(selection) {
    let selectedComponent = selection;
    if (selection === '') {
      selectedComponent = this.state.userSelection;
    }
    if (this.state.navOutput === 'nav') {
      this.setState({
        navOutput: 'nav-view',
        userSelection: selectedComponent,
      });
    } else {
      this.setState({
        navOutput: 'nav',
        userSelection: selectedComponent,

      });
    }
  }
  handleLogin(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  handleRegistrationSubmission(e) {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value,
    });
  }
  renderUserSelection() {
    if (this.state.userSelection === 'sign-in') {
      return (
        <Login
          email={this.state.advisorEmail}
          onChange={e => this.handleLogin(e)}
        />
      );
    } else if (this.state.userSelection === 'sign-up') {
      return (
        <Register
          advisorName={this.state.advisorName}
          email={this.state.advisorEmail}
          shopName={this.state.shopName}
          onChange={e => this.handleRegistrationSubmission(e)}
        />
      );
    } else if (this.state.userSelection === 'home') {
      return <Home />;
    } else if (this.state.userSelection === 'contact') {
      return <Contact />;
    }
    return <Home />;
  }
  render() {
    return (
      <div>
        <Head>
          <title>My page title</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="landing-page">
          <div>
            <nav>
              <Slider navOutput={this.state.navOutput} onClick={e => this.handleUserSelection(e.target.value)} />
            </nav>
          </div>
          <main>
            {this.renderUserSelection()}
          </main>
          <style jsx>
            {`
            main {
              background-color: rgb(181, 186, 189);
              height: 100vh;
              width: 100vw;
              position: fixed;
              top: 8vh;
              left: 0;
            }
            @media only screen and (max-width: 900px) {
             main {
             }
            }
            @media only screen and (max-width: 750px) {
              main {
                position: absolute;
                top: 12vh;
                height 650px;
              }
            } 
            @media only screen and (max-width: 450px) {
              main {
                position: fixed;
                top: 8vh;
                height: 100vh;
              }
            }
          `}
          </style>
        </div>
      </div>
    );
  }
}

