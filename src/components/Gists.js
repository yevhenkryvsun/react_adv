import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {getGists} from "../ducks/gists";

function Gist({gist}) {
    return (
        <div>
            <h2>{gist.description}</h2>
            <p>{gist.url}</p>
        </div>
    );
}

function Gists(props) {

    return (
        <div>
            <div className="buttons">
                <button className="get" onClick={props.getGists}>GET</button>
                <button className="create">CREATE</button>
                <button className="update">UPDATE</button>
                <button className="delete">DELETE</button>
            </div>
            <div className="gists">
                {props.gists && props.gists.map(gist => <Gist gist={gist}/>)}
            </div>
        </div>
    );
}

Gists.propTypes = {

};

export default connect(state => ({
    gists: state.gists
}), {getGists})(Gists);