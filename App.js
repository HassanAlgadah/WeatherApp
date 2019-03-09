import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import {Button} from "react-native-elements";
import { TextField } from 'react-native-material-textfield'
import SearchW from "./src/screens/SearchW";
import Navigator from "./src/Navigator"


export default class App extends React.Component {

  render() {
    return (
        <Navigator />
    )

  }
}
