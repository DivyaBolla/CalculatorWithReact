import React, { Component } from 'react'
import { View, StyleSheet, Button, Text, TextInput, TouchableHighlight, Alert, ScrollView } from 'react-native'


const Operator = {
  ADDITION: '+',
  SUBTRACTION: '-',
  MULTIPLICATION: '*',
  DIVISION: '/',
  CLEAR: 'C',
  EQUALS: '='
}

export default class AppContainer extends Component {
  constructor(props) {
    super(props);
    this.state = ({
      operator: Operator.CLEAR,
      previousValue: 0,
      isInitial: true,
      textValue: 0,
      currentValue: 0
    });
    this.presentButtonComponent = this.presentButtonComponent.bind(this);
    this.buttonPressed = this.buttonPressed.bind(this);
    this.computeValuesBasedOnOperator = this.computeValuesBasedOnOperator.bind(this);
    this.computeAndAssignValues = this.computeAndAssignValues.bind(this);
  }

  render() {
    return(
      <View style={{backgroundColor: 'black'}}>

      <View style={styles.scrollView}>
        <ScrollView>
        <Text style={styles.input} numberOFLines={1} adjustsFontSizeToFit={true}>
          {this.state.textValue}
        </Text>
        </ScrollView>
        <View style={styles.inputView}>
        </View>
      </View>

      <View style={styles.scrollView}>
      </View>

        <View style={styles.columnContainer}>
        <View style={styles.rowContainer}>
          {this.presentButtonComponent('7')}
          {this.presentButtonComponent('8')}
          {this.presentButtonComponent('9')}
          {this.presentButtonComponent('/')}
       </View>
        <View style={styles.rowContainer}>
          {this.presentButtonComponent('4')}
          {this.presentButtonComponent('5')}
          {this.presentButtonComponent('6')}
          {this.presentButtonComponent('*')}
       </View>
        <View style={styles.rowContainer}>
          {this.presentButtonComponent('1')}
          {this.presentButtonComponent('2')}
          {this.presentButtonComponent('3')}
          {this.presentButtonComponent('-')}
       </View>
        <View style={styles.rowContainer}>
          {this.presentButtonComponent('C')}
          {this.presentButtonComponent('0')}
          {this.presentButtonComponent('=')}
          {this.presentButtonComponent('+')}
       </View>
       </View>
      </View>
    );
  }

/**
Method to present each button of the calculator based on the text
*/
  presentButtonComponent = (value) => {
    return (
      <View style={styles.rowContainer}>
        <TouchableHighlight style={styles.buttonStyle} onPress={() => (this.buttonPressed(value))} >
          <Text> {value} </Text>
        </TouchableHighlight>
      </View>
    );
  }

  /**
Method called when button is tapped and respective action takes place based on the button
*/  	
  buttonPressed = (value) => {
    switch(value) {
      case ('C'):
          this.setState({
            operator: Operator.CLEAR,
            previousValue: 0,
            isInitial: true,
            textValue: 0,
            currentValue: 0
          }); 
          break;
      case ('='):
          this.computeValuesBasedOnOperator(Operator.EQUALS); break;
      case ('+'):
          this.computeValuesBasedOnOperator(Operator.ADDITION); break;
      case ('-'):         
          this.computeValuesBasedOnOperator(Operator.SUBTRACTION); break;
      case ('*'):
          this.computeValuesBasedOnOperator(Operator.MULTIPLICATION); break;
      case ('/'):
          this.computeValuesBasedOnOperator(Operator.DIVISION); break;
      default:
          const textValue = parseInt(this.state.currentValue.toString() + value);
          this.setState({
            textValue: textValue,
            currentValue: textValue
          }); 
          break;
    }
  }

/**
  Sets the state values based on the button pressed
*/
  computeValuesBasedOnOperator = (value) => {
      if(this.state.isInitial == true) {
          this.setState({
              previousValue: this.state.textValue,
              isInitial: false,
              operator: value,
              currentValue: 0
          });
      } else {
          this.computeAndAssignValues(this.state.operator);
          this.setState({
            operator: value
          });
      }
  }

  /**
  Computes and sets the state values based on the button pressed
*/
  computeAndAssignValues = (value) => {
    switch(value) {
      case ('+'):
        var previousValue = this.state.previousValue + this.state.currentValue;
        this.setState({
          previousValue: previousValue,
          textValue: previousValue,
          currentValue: 0
        }); 
        break;
      case ('-'):
        previousValue = this.state.previousValue - this.state.currentValue;
        this.setState({
          previousValue: previousValue,
          textValue: previousValue,
          currentValue: 0
        });
        break;
      case ('*'):
        previousValue = this.state.previousValue * this.state.currentValue;
        this.setState({
          previousValue: previousValue,
          textValue: previousValue,
          currentValue: 0 
        });
        break;
      case ('/'):
        if(this.state.currentValue == 0) {
          previousValue = this.state.previousValue / 1;
        } else {
          previousValue = this.state.previousValue / this.state.currentValue;
        }
        this.setState({
          previousValue: previousValue,
          textValue: previousValue,
          currentValue: 0 
        });
        break;
      case ('='):
        previousValue = this.state.textValue;
        this.setState({
          previousValue: previousValue,
          textValue: previousValue,
          currentValue: 0 
        });
        break;
      default:
        break;
    }
  }

}


/**
  Stylesheet
*/
const styles = StyleSheet.create({
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10
  },

  columnContainer: {
    flex: 0.6,
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 10
  },

  buttonStyle: {
    flexDirection: 'row',
    fontSize: 25,
    color: 'black',
    backgroundColor: '#D3D3D3', 
    width: 50,
    height: 50,
    borderColor: '#CfCfCf',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    shadowOpacity: 1,
    shadowColor: '#DDDDDD',
    borderRadius: 3
  },

  input: {
    height: 50,
    padding: 10,
    color: '#CCCCCC',
    borderBottomWidth: 2,
    borderBottomColor: 'cyan',
    fontSize: 35
  },

  inputView: {
    width: 320,
    height: 2,
    borderBottomWidth: 2,
    borderBottomColor: 'cyan',
    flex: 0.1
  },

  scrollView: {
    height: 60
  }

});
