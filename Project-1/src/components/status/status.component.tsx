import * as React from 'react';
import { environment } from '../../environment';
import { updateUsername } from '../../actions/sign-in/sign-in.actions';
// import { signInReducer } from '../../reducers/sign-in.reducers';
// import { store } from '../../Store';
// import { IState } from '../../reducers';
// import { connect } from 'react-redux';
// import {getUser} from '../../actions/sign-in/sign-in.actions';

export class CheckStatus extends React.Component<any, any>  {


  public constructor(props: any) {
    super(props);
    const userJSON = localStorage.getItem("user")
    const user = userJSON !== null ? JSON.parse(userJSON) : updateUsername
    this.state = {
      // reimbursements: [],
      username: user
    }
  }


  public componentDidMount() {
    
    let usersId = this.state.username.usersId
    usersId = parseInt(usersId, 10);
    console.log(usersId)
    fetch(environment.context + `reimbursements/:${usersId}`, {
      // body: JSON.stringify(user),
      credentials: 'include',
    })
    .then( resp => resp.json())
    .catch(err => {
      console.log(err)
    })
 }
  // public componentDidMount() {
  //   fetch(environment.context + 'reimbursement', {
  //     credentials: 'include'
  //   })
  //     .then(resp => resp.json())
  //     .then(username => {
  //       this.setState({username});
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     })
  // }

  public render() {
    // console.log(localStorage.getItem("user"))
    return (
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col"> #</th>
              <th scope="col">Amount</th>
              <th scope="col">Time Submitted</th>
              <th scope="col">Time Resolved</th>
              <th scope="col">Description</th>
              <th scope="col">Author</th>
              <th scope="col">Resolver</th>
              <th scope="col">Type</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>

          </tbody>
        </table>
      </div>
    );
  }
}

// export default connect(mapStateToProps, mapDispatchToProps)(CheckStatus);