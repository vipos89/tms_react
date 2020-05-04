import React, {Component} from "react";

class ListItem extends Component {
    state = {
        checked: false
    };
    itemChecked = () =>{
       // this.props.onChange();
        this.props.onChange()
        this.setState({checked: !this.state.checked})
    };

    render = () => {
        return (
            <li>
                <label htmlFor=  {this.props.ingredientName}>  {this.props.ingredientName}</label>
                <input
                    type="checkbox"
                    id= {this.props.ingredientName}
                    checked={this.state.checked}
                    onChange={this.itemChecked}
                />
                {this.props.ingredientName}
            </li>
        )
    }
}

export default ListItem