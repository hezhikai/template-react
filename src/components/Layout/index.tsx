import React from 'react';
import { Link } from 'react-router-dom';

export default class Inbox extends React.Component {
  render() {
    return (
      <React.Fragment>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/user'>user</Link>
          </li>
          <li>
            <Link to='/company/list'>companyList</Link>
            <br />
            <Link to='/company/info'>companyInfo</Link>
          </li>
          <li>
            <Link to='/login'>login</Link>
          </li>
        </ul>
      </React.Fragment>
    );
  }
}
