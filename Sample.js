import React from 'react';
import {View, Text, Button, Alert, StyleSheet, TouchableHighlight} from 'react-native';

export default class Sample extends React.Component {

	constructor(props) {
		super(props);
		this.state = ({
			initialValue: 10,
			currentValue: 10
		});
		this.buttonPressed = this.buttonPressed.bind(this);
		this.buttonPressedFunc = this.buttonPressedFunc.bind(this);
	}

	render() {
		return (
			<View style={styles.columnContainer}>
				{this.buttonPressed('Hello!!!!')}
			</View>
		);
	}

	buttonPressed = (value) => {
		return (
    		<View style={styles.columnContainer}>
      			<TouchableHighlight style={styles.buttonStyle} onPress={() => this.buttonPressedFunc(value)} >
        			<Text> {this.state.initialValue} </Text>
      			</TouchableHighlight>
    		</View>
    	);		
	}

	buttonPressedFunc(value) {
		const valueValue = parseInt(this.state.initialValue.toString() + this.state.currentValue.toString());
		this.setState({
			initialValue: valueValue,
			currentValue: 0
		});
	}


}

const styles = StyleSheet.create({
  columnContainer: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },

  buttonStyle: {
    flexDirection: 'row',
    fontSize: 25,
    color: 'black',
    backgroundColor: '#D3D3D3', 
    width: 100,
    height: 50,
    borderColor: '#CfCfCf',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 1,
    shadowColor: '#DDDDDD',
    borderRadius: 3
  }
});