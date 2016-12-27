import React from "react";
import { testAction } from '../actions/actions';
import { connect } from 'react-redux';

class Dashboard extends React.Component {

    handleClickHello() {
        this.props.testAction();
    }

    render() {
        return (
            <div>
                <p>This is the dashboard</p>
                <a href="#" onClick={() => this.handleClickHello()}>Knock Knock</a>
                <h3>{this.props.auth.message}</h3>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        auth: state.auth
    };
}

export default connect(mapStateToProps, { testAction })(Dashboard);