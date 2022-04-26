import { View, Text } from 'react-native'
import React, {useEffect} from 'react'
import Routes from './src/navigation/Routes'
import { Provider } from 'react-redux'
import store from './src/redux/store'
import { getUserData } from './src/utils/utils'
import actions from './src/redux/actions'
import { SafeAreaProvider } from 'react-native-safe-area-context'

const App = () => {

  useEffect(() => {
    getUserData().then((res) => {
      console.log("store data", res)
      actions.login(res)
    })
  }, [])
  return (
    <>
    <SafeAreaProvider>
      <Provider store={store}>

    <Routes />
      </Provider>
    </SafeAreaProvider>
    </>
  )
}

export default App