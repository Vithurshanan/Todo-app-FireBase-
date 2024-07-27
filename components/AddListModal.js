import React, { Component } from 'react'
import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import {AntDesign} from '@expo/vector-icons'
import colors from '../Colors'


export default class AddListModal extends Component {
  render() {
    return (
    <KeyboardAvoidingView style={styles.container} behavior='padding'>
        <TouchableOpacity style={{position:"absolute" , top:64, right:32}} onPress={this.props.closeModel}>
            <AntDesign name='close' size={24} color={colors.white}></AntDesign>
        </TouchableOpacity>
    </KeyboardAvoidingView>
    )
  }
}

const styles = StyleSheet.create ({
    container:{
        backgroundColor:"black",
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },

})