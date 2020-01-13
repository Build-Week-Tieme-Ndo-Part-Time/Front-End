import NavBar from './NavBar.js';
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

import { fetchClient } from '../actions/index';

import ClientListTable from "./ClientListTable";
import "./dashboard.css";

const HomePage = props => {
	useEffect(() => {
        props.fetchClient();
    }, [ props.fetchClient, props])

    console.log(props);
	return (
		<div className="homepage">
			<NavBar />
			<div>
        <Link to='/createclient'> <button>Add client</button></Link>
        <h3>Clients</h3>
      </div>
			<ClientListTable />
		</div>
	);
};

const mapStateToProps = state => {
    return {

    }
}

export default connect(mapStateToProps, { fetchClient })(HomePage);
