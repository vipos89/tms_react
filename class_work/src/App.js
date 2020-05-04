import React, {Component} from 'react';
import Button from "./components/Button";
import './App.css';

class App extends Component {
    state = {
        number: 0,
        visible: true
    };

    plus = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    minus = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    render() {
        return (
            <div className="App">
                <span>{this.props.title}</span>
                <div className={"buttons"}>
                    <Button
                        label="-"
                        onClick={this.minus}
                    />
                    <span className="text">{this.state.number}</span>
                    <Button
                        label="+"
                        onClick={this.plus}
                    />
                </div>

            </div>
        );
    }
}

export default App;
