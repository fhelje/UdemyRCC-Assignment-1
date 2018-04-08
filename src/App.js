import React, { Component } from "react";
import "./App.css";
import UserInput from "./UserInput/UserInput";
import UserOutput from "./UserOutput/UserOutput";

class App extends Component {
    state = {
        username: "A user name"
    };

    userNameChangedHandler = event => {
        const name = event.target.value;
        this.setState({ username: name });
    };

    render() {
        return (
            <div className="App">
                <div className="Container">
                    <UserInput
                        username={this.state.username}
                        changed={this.userNameChangedHandler}
                    />
                </div>

                <div className="Container">
                    <UserOutput username={this.state.username} />
                    <UserOutput username={this.state.username} />
                </div>
            </div>
        );
    }
}

export default App;
