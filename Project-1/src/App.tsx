import * as React from 'react';
import './App.css';
import './include/bootstrap';
import { CheckAllReimbursements } from './components/check/check-reimbursements.components';
import { ReimbursementComponent } from './components/reimbursement/reimbursement.component';
import { AppNav } from './components/nav/nav.component';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { HomeComponent } from './components/home/home.component';
import SignInComponent from './components/sign-in/sign-in.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { CheckStatus } from './components/status/status.component';
import { Provider } from 'react-redux';
import { store } from './Store';

// interface IState {
//   username: string;
//   reimbursements: [];
// }

export class App extends React.Component {
  // constructor(props: any) {
  //   super(props);
  //   this.state = {
  //     reimbursements: [],
  //     username: ""
  //   };
  // }

  public render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <AppNav />
            <div id="main-content-container">
              <Switch>
                <Route path="/check-reimbursements" component={CheckAllReimbursements} />
                <Route path="/add-reimbursement" component={ReimbursementComponent} />
                <Route path="/home" component={HomeComponent} />
                <Route path="/sign-in" component={SignInComponent} />
                <Route path="/sign-up" component={SignUpComponent} />
                <Route path="/check-status" component={CheckStatus} />
                <Route component={HomeComponent} />
              </Switch>
            </div>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
