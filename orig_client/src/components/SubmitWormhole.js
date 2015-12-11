import React, {
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput,
  ScrollView,
  ActivityIndicatorIOS,
} from 'react-native';
// var YouTube = require('react-native-youtube');
import Navbar from './Navbar';
var Video = require('react-native-video');

class SubmitWormhole extends Component {
  back() {
    this.props.navigator.pop();
  }
  submit() {
    let { pendingWormholeSubmission, currentUser, uploadWormholeSubmission } = this.props;
    uploadWormholeSubmission(pendingWormholeSubmission, currentUser, () => {
      this.props.navigator.replace({
        component: Navbar
      });
    });
  }
  _renderSubmitButton() {
    let { pendingWormholeSubmission } = this.props;
    if(!pendingWormholeSubmission.isUploading) {
      return (
        <TouchableHighlight
          style = {styles.back}
          onPress = {this.submit.bind(this)}
          underlayColor = 'purple'
        >
          <Text style = {styles.buttonText}> Submit </Text>
        </TouchableHighlight>
      )
    } else {
      return (
        <ActivityIndicatorIOS
          animating = {true}
          color = 'white'
          size = 'large'
        ></ActivityIndicatorIOS>
      )
    }
  }
  render() {
    // var { increment, incrementIfOdd, incrementAsync, decrement, counter } = this.props;
    let { pendingWormholeSubmission, currentUser } = this.props;
    return (
      <ScrollView 
        automaticallyAdjustContentInsets={false}
        onScroll={() => { console.log('onScroll!'); }}
        scrollEventThrottle={200}
        style={styles.container}>
        <TouchableHighlight
          style = {styles.back}
          onPress = {this.back.bind(this)}
          underlayColor = 'purple'
        >
          <Text style = {styles.buttonText}> Back </Text>
        </TouchableHighlight>
        <Video source={{uri: pendingWormholeSubmission.video}}
               rate={1.0}
               volume={1.0}
               muted={false}
               paused={false}
               resizeMode="cover"
               repeat={true}
               onError={console.log('error in video playback load')}
               style={styles.backgroundVideo} />

        <View style={styles.loginButton}>
          <Text style={styles.title}>
            {pendingWormholeSubmission.wormhole.title}
          </Text>
        </View>
        <View style={styles.loginButton}>
          <Text style={styles.title}>
            {pendingWormholeSubmission.wormhole.owner_name}
          </Text>
        </View>
        <View style={styles.loginButton}>
          <Text style={styles.title}>
            {currentUser.user.username}
          </Text>
        </View>
        <View style={styles.loginButton}>
          <Text style={styles.title}>
            {new Date().toJSON().slice(0,10)}
          </Text>
        </View>
        <View style={styles.loginButton}>
          <Text style={styles.title}>
            {pendingWormholeSubmission.wormhole.notes}
          </Text>
        </View>
        <TextInput
          style = {styles.searchInput}
          value = {''}
          // onChange = {this.handleInuptChange.bind(this,'location')}
        />
        {this._renderSubmitButton()}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    marginTop: 20
  },
  loginButton: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: 'black'
  },
  back: {
    flexDirection: 'row',
    alignSelf: 'stretch',
    justifyContent: 'center',
    flex: 1,
    backgroundColor: '#48BBEC'
  },
  title: {
    marginBottom: 20,
    fontSize: 25,
    textAlign: 'center',
    color: '#fff'
  },
  buttonText: {
    fontSize: 24,
    color: 'white',
    alignSelf: 'center'
  },
  searchInput: {
    height: 100,
    padding: 4,
    margin: 7,
    fontSize: 23,
    borderWidth: 1,
    borderColor: 'white',
    borderRadius: 8,
    color: 'white'
  },
  backgroundVideo: {
    alignSelf: 'stretch',
    height: 220,
    backgroundColor: '#48BBEC',
    marginBottom: 0
  }
});

export default SubmitWormhole;
