import React, { Component } from "react"
import { Text, View } from "react-native"
import styles from "./styles"

class FlexDemo extends Component {
  render() {
    return (
      <View style={styles.parent}>
        <Text style={styles.child}> child one </Text>
        <Text style={styles.child}> child two </Text>
        <Text style={styles.child}> child three </Text>
      </View>
    )
  }
}

export default FlexDemo
