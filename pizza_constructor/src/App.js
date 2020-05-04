import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import ListItem from "./Components/ListItem";

class App extends Component {
    state = {
        ingredients: {
            'Помидоры': false,
            'Колбаски': false,
            'Сыр': false,
            'Анчоусы': false,
            'Перец': false,
            'Огурец': false,
            'Маслины': false,
        },
        messageVisible: false
    }

    onChangeFunction = (ingredientName, checked) => {
        if (Object.values(this.state.ingredients).filter(value => value).length < 5 || checked) {
            console.log(ingredientName, !checked);
            const newIngredients = {...this.state.ingredients};
            newIngredients[ingredientName] = !checked;
            this.setState({ingredients: newIngredients, messageVisible: false})
        } else {
            this.setState({messageVisible: true})
        }

    }


    render = () => {
        return (
            <div className="App">
                <header className="App-header">

                    <h1>{this.state.messageVisible ? 'Перебор' : "Наваливай"}</h1>
                    <ul>
                        <ListItem ingredientName={'Помидоры'} onChange={() => {
                            this.onChangeFunction('Помидоры', this.state.ingredients['Помидоры'])
                        }}/>
                        <ListItem ingredientName={'Колбаски'} onChange={() => {
                            this.onChangeFunction('Колбаски', this.state.ingredients['Колбаски'])
                        }}/>
                        <ListItem ingredientName={'Сыр'} onChange={() => {
                            this.onChangeFunction('Сыр', this.state.ingredients['Сыр'])
                        }}/>
                        <ListItem ingredientName={'Анчоусы'} onChange={() => {
                            this.onChangeFunction('Анчоусы', this.state.ingredients['Анчоусы'])
                        }}/>
                        <ListItem ingredientName={'Перец'} onChange={() => {
                            this.onChangeFunction('Перец', this.state.ingredients['Перец'])
                        }}/>
                        <ListItem ingredientName={'Огурец'} onChange={() => {
                            this.onChangeFunction('Огурец', this.state.ingredients['Огурец'])
                        }}/>
                        <ListItem ingredientName={'Маслины'} onChange={() => {
                            this.onChangeFunction('Маслины', this.state.ingredients['Маслины'])
                        }}/>
                    </ul>
                </header>
            </div>
        );
    }
}

export default App;
