import React from "react"
import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  parent: {
    flex: 1, // 가중치를 동일하게 1로 지정
    // flexDirection: "column", // column 일 경우  세로 방향으로 배열
    flexDirection: "row", // row 일 경우 가로 방향으로 배열
    // alignItems: "flex-start", // alignItmes를 지정하면 가능한 공간을 채우려고 확장하지 않는다. 상단에 위치하게 한다.
    alignItems: "center", // 중간에 위치하게 된다.
    // alignItems: "flex-end", // 하단에 위치하게 한다.

    backgroundColor: "#F5FCFF",
    borderColor: "#0099AA",
    borderWidth: 5,
    marginTop: 40
  },
  child: {
    flex: 1,
    borderColor: "#AA0099",
    borderWidth: 2,
    textAlign: "center",
    fontSize: 24
  }
})

export default styles
