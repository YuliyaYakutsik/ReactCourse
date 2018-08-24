import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './Person.css';
import Aux from '../../../hoc/Auxility';
import withClass from '../../../hoc/withClass';
import {AuthContext} from '../../../containers/App';

class Person extends Component {
	componentDidMount() {
		if (this.props.position === 0) {
			this.inputElement.focus();
		}
	}

	render() {
		return (
			<Aux>
				<AuthContext.Consumer>
					{auth => auth ? <p>I`m authenticated</p>: null}
				</AuthContext.Consumer>
				<p onClick={this.props.click}>I`m {this.props.name} and I am {this.props.age} years old!</p>
				<p>{this.props.children}</p>
				<input
					ref={(input) => { this.inputElement = input }}
					type="text" 
					onChange={this.props.changed} 
					value={this.props.name} />
			</Aux>
		)
		// return [
		// 	<p key="1" onClick={props.click}>I`m {props.name} and I am {props.age} years old!</p>
		// 	<p key="2">{props.children}</p>
		// 	<input key="3" type="text" onChange={props.changed} value={props.name}/>
		// ]
	}
}

Person.propTypes = {
	name: PropTypes.string,
	age: PropTypes.number,
	click: PropTypes.func,
	changed: PropTypes.func
}

export default withClass(Person, classes.person);
