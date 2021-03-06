
import React from 'react';
import Head from 'next/head';
import Router from 'next/router';

import QuestionnaireList from '../src/components/advisor/questionnaire-list';
import QuestionnaireForm from '../src/components/advisor/questionnaire-form';
import NavBar from '../src/components/advisor/nav-bar';

// import MockList from '../src/mock-list';
import { getCustomers, getAdvisorInfo } from '../src/api/advisor-dash';

export default class AdvisorDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      advisor: {},
    };
  }
  async componentDidMount() {
    console.log(this.props.url.query._id);
    const id = this.props.url.query._id;
    const customers = await getCustomers();
    const advisorInfo = await getAdvisorInfo(id);
    console.log(customers);
    // console.log(advisorInfo);
    this.setState({
      list: customers,
      advisor: advisorInfo[0],
    });
  }
  render() {
    console.log(this.state.list);
    return (
      <div>
        <Head>
          <title>Advisor Dashboard</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="page">
          <div className="advisor-nav">
            <NavBar firstButton={'Send Questionnaire'} secondButton={'Returned Questionnaires'} />
          </div>
          <div id="questionnaire-form" />
          <div className="form-container" >
            <h2 className="title">Send a Questionnaire</h2>
            <QuestionnaireForm
              id={this.state.advisor._id}
              advisorName={this.state.advisor.advisorName}
              shopName={this.state.advisor.shopName}
              advisorEmail={this.state.advisor.advisorEmail}
            />
          </div>
          <div id="returned" />
          <div className="list-container">
            <h2 className="title">Returned Questionnaires</h2>
            <QuestionnaireList
              onClick={(id, name) => {
                Router.push(
                  `/view-questionnaire?advisorId=${this.state.advisor._id}&id=${id}&customerName=${name}`,
                );
              }}
              list={this.state.list}
            />
          </div>
          <div className="footer" />
        </div>
        <style jsx>{`
          .page {
            background-color: rgb(181, 186, 189);
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
          }
          
          .footer {
            height: 200px;
          }
          
          .advisor-nav {
            width: 100%;
            position: fixed;
            top: 0;
          }
          .title {
            font-size: 24px;
            color: #495C70;
            text-align: center;
          }
           .form-container {
             margin-top: 100px;
           }
          
           .list-container {
             margin-top: 100px;
           }
          
           #questionnaire-form {
             height: 100px;
           }
            
           #returned {
             height: 100px;
           }
          
           @media only screen and (max-width: 900px) {
            #questionnaire-form {
             height: 50px;
           }
            
           #returned {
             height: 50px;
           }
          }
        `}</style>
      </div >
    );
  }
}
