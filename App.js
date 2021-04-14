import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Pressable, StyleSheet, Button, Text, View, Alert } from "react-native";
import Modal from "react-native-modal";
import { MaterialCommunityIcons as Icons } from "react-native-vector-icons";

const singlearray = [0, 0, 0, 0, 0, 0, 0, 0, 0];

export default function App() {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  const showModal = () => {
    setModalVisible(true);
  };
  const hideModal = () => {
    setModalVisible(false);
  };
  const [getB1, setB1] = useState("");
  const [getB2, setB2] = useState("");
  const [getB3, setB3] = useState("");
  const [getB4, setB4] = useState("");
  const [getB5, setB5] = useState("");
  const [getB6, setB6] = useState("");
  const [getB7, setB7] = useState("");
  const [getB8, setB8] = useState("");
  const [getB9, setB9] = useState("");
  const [getOutput, setOutput] = useState("");
  const [getCurrentPlayer, setCurrentPlayer] = useState(1);

  const pressHandler = (boxNo) => {
    if (getCurrentPlayer == 1) {
      if (boxNo == 1 && getB1 == "") {
        setB1(<Icons name="close" style={styles.boxX} />);
        singlearray[0] = 1;
      }
      if (boxNo == 2 && getB2 == "") {
        setB2(<Icons name="close" style={styles.boxX} />);
        singlearray[1] = 1;
      }
      if (boxNo == 3 && getB3 == "") {
        setB3(<Icons name="close" style={styles.boxX} />);
        singlearray[2] = 1;
      }
      if (boxNo == 4 && getB4 == "") {
        setB4(<Icons name="close" style={styles.boxX} />);
        singlearray[3] = 1;
      }
      if (boxNo == 5 && getB5 == "") {
        setB5(<Icons name="close" style={styles.boxX} />);
        singlearray[4] = 1;
      }
      if (boxNo == 6 && getB6 == "") {
        setB6(<Icons name="close" style={styles.boxX} />);
        singlearray[5] = 1;
      }
      if (boxNo == 7 && getB7 == "") {
        setB7(<Icons name="close" style={styles.boxX} />);
        singlearray[6] = 1;
      }
      if (boxNo == 8 && getB8 == "") {
        setB8(<Icons name="close" style={styles.boxX} />);
        singlearray[7] = 1;
      }
      if (boxNo == 9 && getB9 == "") {
        setB9(<Icons name="close" style={styles.boxX} />);
        singlearray[8] = 1;
      }
      setCurrentPlayer(2);
    } else if (getCurrentPlayer == 2) {
      if (boxNo == 1 && getB1 == "") {
        setB1(<Icons name="circle-outline" style={styles.boxO} />);
        singlearray[0] = 2;
      }
      if (boxNo == 2 && getB2 == "") {
        setB2(<Icons name="circle-outline" style={styles.boxO} />);
        singlearray[1] = 2;
      }
      if (boxNo == 3 && getB3 == "") {
        setB3(<Icons name="circle-outline" style={styles.boxO} />);
        singlearray[2] = 2;
      }
      if (boxNo == 4 && getB4 == "") {
        setB4(<Icons name="circle-outline" style={styles.boxO} />);
        singlearray[3] = 2;
      }
      if (boxNo == 5 && getB5 == "") {
        setB5(<Icons name="circle-outline" style={styles.boxO} />);
        singlearray[4] = 2;
      }
      if (boxNo == 6 && getB6 == "") {
        setB6(<Icons name="circle-outline" style={styles.boxO} />);
        singlearray[5] = 2;
      }
      if (boxNo == 7 && getB7 == "") {
        setB7(<Icons name="circle-outline" style={styles.boxO} />);
        singlearray[6] = 2;
      }
      if (boxNo == 8 && getB8 == "") {
        setB8(<Icons name="circle-outline" style={styles.boxO} />);
        singlearray[7] = 2;
      }
      if (boxNo == 9 && getB9 == "") {
        setB9(<Icons name="circle-outline" style={styles.boxO} />);
        singlearray[8] = 2;
      }
      setCurrentPlayer(1);
    }
    announce();
  };
  const announce = () => {
    if (
      (singlearray[0] === 1 && singlearray[1] === 1 && singlearray[2] === 1) ||
      (singlearray[0] === 1 && singlearray[4] === 1 && singlearray[8] === 1) ||
      (singlearray[0] === 1 && singlearray[3] === 1 && singlearray[6] === 1) ||
      (singlearray[1] === 1 && singlearray[4] === 1 && singlearray[7] === 1) ||
      (singlearray[2] === 1 && singlearray[5] === 1 && singlearray[8] === 1) ||
      (singlearray[2] === 1 && singlearray[4] === 1 && singlearray[6] === 1) ||
      (singlearray[2] === 1 && singlearray[4] === 1 && singlearray[6] === 1) ||
      (singlearray[3] === 1 && singlearray[4] === 1 && singlearray[5] === 1) ||
      (singlearray[6] === 1 && singlearray[7] === 1 && singlearray[8] === 1)
    ) {
      setCurrentPlayer("");
      setOutput(' 1ST PLAYER "X"');
      setModalVisible(true);
    } else if (
      (singlearray[0] === 2 && singlearray[1] === 2 && singlearray[2] === 2) ||
      (singlearray[0] === 2 && singlearray[4] === 2 && singlearray[8] === 2) ||
      (singlearray[0] === 2 && singlearray[3] === 2 && singlearray[6] === 2) ||
      (singlearray[1] === 2 && singlearray[4] === 2 && singlearray[7] === 2) ||
      (singlearray[2] === 2 && singlearray[5] === 2 && singlearray[8] === 2) ||
      (singlearray[2] === 2 && singlearray[4] === 2 && singlearray[6] === 2) ||
      (singlearray[2] === 2 && singlearray[4] === 2 && singlearray[6] === 2) ||
      (singlearray[3] === 2 && singlearray[4] === 2 && singlearray[5] === 2) ||
      (singlearray[6] === 2 && singlearray[7] === 2 && singlearray[8] === 2)
    ) {
      setCurrentPlayer("");
      setOutput(' 2ND PLAYER "O"');
      setModalVisible(true);
    } else if (
      singlearray[0] !== 0 &&
      singlearray[1] !== 0 &&
      singlearray[2] !== 0 &&
      singlearray[3] !== 0 &&
      singlearray[4] !== 0 &&
      singlearray[5] !== 0 &&
      singlearray[6] !== 0 &&
      singlearray[7] !== 0 &&
      singlearray[8] !== 0
    ) {
      setCurrentPlayer("");
      setOutput('NoOne is winner "DRAW GAME"');
      setModalVisible(true);
    }
  };

  const restart = () => {
    setModalVisible(false);
    setB1(""),
      setB2(""),
      setB3(""),
      setB4(""),
      setB5(""),
      setB6(""),
      setB7(""),
      setB8(""),
      setB9("");
    (singlearray[0] = 0),
      (singlearray[1] = 0),
      (singlearray[2] = 0),
      (singlearray[3] = 0),
      (singlearray[4] = 0),
      (singlearray[5] = 0),
      (singlearray[6] = 0),
      (singlearray[7] = 0),
      (singlearray[8] = 0);
    setOutput("");
    setCurrentPlayer(1);
  };

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 }}>
        <Modal
          isVisible={isModalVisible}
          animationType="slide"
          transparent={true}
        >
          <View style={{ flex: 1 }}>
            <View style={styles.modalview}>
              <Text />
              {"Winner of the game : "}
              <Text />
              <Text />
              {getOutput}
              <Text />
            </View>
            <Button
              style={styles.buttontext}
              color="midnightblue"
              title="                        RESTART GAME                        "
              onPress={restart}
            >
              {""}
            </Button>
          </View>
        </Modal>
      </View>

      <Text
        style={{
          textAlign: "center",
          fontWeight: "bold",
          marginBottom: 2,
          fontSize: 20,
          color: "midnightblue",
        }}
      >
        TIC-TAC-TOE GAME
      </Text>

      <View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "midnightblue",
            color: "white",
            padding: 8,
          }}
        >
          <Text
            style={[
              {
                fontWeight: "bold",
                margin: 2,
                fontSize: "22",
                justifyContent: "center",
              },
            ]}
          />

          {getOutput == ""
            ? getCurrentPlayer == 1
              ? 'Player 1 "X" Turn'
              : 'Player 2 "O" Turn'
            : ""}
          <Text />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pressable onPress={() => pressHandler(1)}>
            <View style={styles.box}>
              <Text>{getB1}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => pressHandler(2)}>
            <View style={styles.box}>
              <Text>{getB2}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => pressHandler(3)}>
            <View style={styles.box}>
              <Text>{getB3}</Text>
            </View>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pressable onPress={() => pressHandler(4)}>
            <View style={styles.box}>
              <Text>{getB4}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => pressHandler(5)}>
            <View style={styles.box}>
              <Text>{getB5}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => pressHandler(6)}>
            <View style={styles.box}>
              <Text>{getB6}</Text>
            </View>
          </Pressable>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Pressable onPress={() => pressHandler(7)}>
            <View style={styles.box}>
              <Text>{getB7}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => pressHandler(8)}>
            <View style={styles.box}>
              <Text>{getB8}</Text>
            </View>
          </Pressable>
          <Pressable onPress={() => pressHandler(9)}>
            <View style={styles.box}>
              <Text>{getB9}</Text>
            </View>
          </Pressable>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1 ",
    padding: 8,
  },
  buttontext: {
    margin: 2,

    alignItems: "center",
  },
  modalview: {
    margin: 2,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 8,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    elevation: 5,
  },
  box: {
    borderWidth: 4,
    backgroundColor: "honeydew",
    borderColor: "midnightblue",
    width: 100,
    height: 100,
  },
  boxX: {
    color: "palevioletred",
    fontSize: 60,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  boxO: {
    color: "purple",
    fontSize: 50,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
