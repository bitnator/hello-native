  import React from 'react';
  import { 
    StyleSheet, 
    Text, 
    View, 
    TextInput, 
    KeyboardAvoidingView, 
    TouchableOpacity, 
  } from 'react-native';

  export default class App extends React.Component {
    constructor(props) {
      super (props);
      this.state = {
        username: '',
        password: '',
      }
    }
  
    render() {
      return (
        <KeyboardAvoidingView behavior='padding' style={styles.wrapper}> 
          <View style={styles.container}>
            <Text style={styles.header}>Face-Look</Text>
  
            <TextInput
              style={styles.textInput} placeholder='username' 
              onChangeText={ (username) => this.setState({username})} 
              underlineColorAndroid='transparent' 
            />
  
            <TextInput
              style={styles.textInput} placeholder='username' 
              onChangeText={ (password) => this.setState({password})} 
              underlineColorAndroid='transparent' secureTextEntry={true}
            />
  
            <TouchableOpacity
              style={styles.btn} onPress={this.login}>
              <Text style={styles.btnText}> Entrar </Text>
            </TouchableOpacity>
          
          </View>
        </KeyboardAvoidingView>
      );
    }
  
    login = () => {
      alert('testando');
    }
  }
  
  const styles = StyleSheet.create({
    wrapper: {
      flex: 1,
    },
    container: {
      flex: 1,
      backgroundColor: '#2856d3',
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: 40,
      paddingLeft: 40,
    },
    header: {
      fontSize: 32,
      marginBottom: 60,
      color: '#fff',
      fontWeight: 'bold',
    },
    textInput: {
      alignSelf: 'stretch', 
      padding: 16,
      marginBottom: 20,
      backgroundColor: '#fff',
    },
    btn: {
      alignSelf: 'stretch',
      backgroundColor: '#01c853',
      padding: 20,
      alignItems: 'center',
    },
    btnText: {
      color: '#fff',
      fontSize: 24,
    }
  });
  