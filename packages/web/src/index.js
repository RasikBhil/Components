import { AppRegistry } from 'react-native'
import "./index.css";
import App from 'components/src/App'

AppRegistry.registerComponent('styledComponents', () => App)
AppRegistry.runApplication('styledComponents', {
    rootTag: document.getElementById('root'),
})
