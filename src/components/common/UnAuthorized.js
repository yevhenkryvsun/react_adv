import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

class UnAuthorized extends Component {
    render() {
        return (
            <div>
                <h1>Unauthorized</h1> please <Link to="/auth/signin">Sign In</Link>
            </div>
        );
    }
}

UnAuthorized.propTypes = {};
UnAuthorized.defaultProps = {};

export default UnAuthorized;
