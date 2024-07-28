import React, { Component } from 'react';
import { Text, View, StyleSheet, KeyboardAvoidingView, TouchableOpacity, TextInput, Platform } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import colors from '../Colors';

export default class AddListModal extends Component {
  state = {
    name: ""
  };

  render() {
    return (
      <View style={styles.container} >
        <TouchableOpacity style={styles.closeButton} onPress={this.props.closeModal}>
          <AntDesign name="close" size={24} color={colors.white} />
        </TouchableOpacity>

        <View style={styles.content}>
          <Text style={styles.title}>Create Todo List</Text>
          <TextInput
            style={styles.input}
            placeholder="List Name"
            placeholderTextColor={colors.lightBlue}
            onChangeText={text => this.setState({ name: text })}
          />
          <TouchableOpacity style={[styles.create , {backgroundColor:colors.blue}]}>
            <Text style={{color:colors.white , fontWeight:"600"}}>Create</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
  },
  closeButton: {
    position: "absolute",
    top: 24,
    right: 32,
  },
  content: {
    alignSelf: "stretch",
    marginHorizontal: 32,
  },
  title: {
    fontSize: 28,
    fontWeight: "800",
    color: colors.white,
    alignSelf: "center",
    marginBottom: 16,
  },
  input: {
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.blue,
    borderRadius: 10,
    height: 50,
    marginTop: 8,
    paddingHorizontal: 16,
    color: "white",
  },
  create:{
    marginTop:24,
    height:50,
    borderRadius:6,
    alignItems:"center",
    justifyContent:"center"
  }
});
