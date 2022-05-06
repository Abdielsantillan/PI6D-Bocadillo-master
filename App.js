import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

import MainStack from './navigation/mainStack';


class App extends React.Component {
  render() {
    return (
      
        <SafeAreaView style={{ flex:1 }}>
           <MainStack/>
        </SafeAreaView>
    );
  }
}


export default App;
