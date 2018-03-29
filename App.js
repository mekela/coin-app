import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    DatePickerIOS,
    TouchableHighlight,
    Modal,
    TextInput,
    ScrollView } from 'react-native';

import styles from './style';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { chosenDate: new Date() };

    this.setDate = this.setDate.bind(this);
  }

  setDate(newDate) {
    this.setState({chosenDate: newDate})
  }

  state = {
    modalVisible: false,
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
        <View style = { styles.container }>
          <View style= { styles.top } >
            <View style={ styles.stripeTop }>
              <Image style={ styles.logo }
                     source={{uri: 'https://png.icons8.com/metro/1600/coins.png'}}
              />
              <Text style={ styles.companyName } >
                COIN APP
              </Text>
            </View>
            <Text style={ styles.companyText } >
              To start using this application, please, complete registration.
            </Text>
          </View>

          <ScrollView contentContainerStyle= { styles.content } >
            <View style={ [ styles.inputWrapper, styles.inputWrapperBottom ] } >
              <TextInput placeholder={'Email address'}/>
            </View>
            <View style={  [ styles.inputWrapper, styles.inputWrapperBottom ] } >
              <TextInput placeholder={'Password'}/>
            </View>
          </ScrollView>
          <View style= { styles.navigation } >
            <TouchableHighlight
                style={ styles.button }
            >
              <Text style={ styles.buttonInside }>Create account</Text>
            </TouchableHighlight>
          </View>
        </View>

    );
  }
}
