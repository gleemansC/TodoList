import React, { Component, Fragment } from 'react';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        }
    }
    render() {
        return (
            <Fragment>
                <Greeting isLogin={this.state.isLogin}></Greeting>
                <LoginBtn btnEvent={this.changeLogin}></LoginBtn>
            </Fragment>
        );
    }
    changeLogin = () => {
        this.setState({
            isLogin: !this.state.isLogin
        })
    }
}

function Greeting(props) {
    if(props.isLogin) {
        return <h1 >Welcome</h1>
    } else {
        return <h1 >速滚</h1>
    }
}

function LoginBtn(props) {
    let btnEvent = props.btnEvent
    if(props.isLogin) {
        return <button onClick={btnEvent}>Login</button>
    } else {
        return <button onClick={btnEvent}>Logout</button>
    }
}

export default Login;