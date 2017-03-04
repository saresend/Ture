import React, { Component, } from 'react';
import { View, Text, StyleSheet,Image,TextInput ,TouchableOpacity,StatusBar,ListView } from 'react-native';
import { Router, Scene,Actions} from 'react-native-router-flux';




export default class Itinerary extends Component {

  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
        'John', 'Joel', 'James', 'Jimmy', 'Jackson', 'Jillian', 'Julie', 'Devin'
      ])
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={[styles.ture_text, styles.ture_header, styles.white]}> Ture Itinerary </Text>
        </View>
        <ListView
          dataSource={this.state.dataSource}
          style={styles.list_view}
          renderRow={(rowData) =>
            <View style={styles.cell_container}>
            <TouchableOpacity style={styles.cell_container}>
            <Image source={require("../assets/marker.png")} style={styles.thumbnail} />
            <View style={styles.cell_description}>
              <Text style={[styles.ture_text, styles.bold]}>{rowData}</Text>
              <Text style={[styles.ture_text, styles.sub_text]}>Placeholder </Text>
            </View>
            <Text style={[styles.ture_text, styles.sub_text]}> A short blurb by Microsoft! </Text>
          </TouchableOpacity>
          </View> } />
      </View>
    );
  }
}



const styles = StyleSheet.create({
  container :{
    flex: 1,
    backgroundColor: "#FFFFFF",
  },
  header: {
    height: 80,
    backgroundColor: "#2980b9",
    flexDirection: 'row',
    justifyContent: 'center',

  },
  ture_text: {
    marginTop: 10,
    fontSize: 20,
    fontFamily: 'sans-serif-thin',
    color: "#000000",
  },
  ture_header: {
    fontSize: 30,
    marginTop: 20,
  },

  list_view: {
    flex: 20,
  },
  thumbnail : {
    height: 80,
    width: 80,
  },
  cell_container: {
    flexDirection: 'row',
    marginTop: 8,
    marginBottom: 8,
    backgroundColor: "#FFFFFF",
  },
  cell_description: {
    flexDirection: 'column',
  },
  sub_text: {
    fontSize: 15,
  },
  bold: {
    fontWeight: 'bold',
  },
  white: {
    color: "#FFFFFF",
  }

})