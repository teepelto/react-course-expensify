import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
    <div>
        <h1>Info</h1>
        <p>The info is: {props.info}</p>
    </div>
);

const withAdminWarning = (WrappedComponent) => {
    return (props) => (
        <div>
            {props.isAdmin && <p>This is private info.</p>}
            <WrappedComponent {...props} />
        </div>
    );
};

const requireAuthentication = (WrappedComponent) => {
    return (props) => (
        <div>
            { !props.isAuthenticated ? <p>You're not authenticated to view the info.</p> :
                <div>
                    <p>You have been authenticated to view the following info:</p>
                    <WrappedComponent {...props} />
                </div>
            }
        </div>
    );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

// ReactDOM.render(<AdminInfo isAdmin={true} info="HOC is higher order component." />, document.getElementById('app'));
ReactDOM.render(<AuthInfo isAuthenticated={true} info="HOC is higher order component." />, document.getElementById('app'));