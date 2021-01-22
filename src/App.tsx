import * as React from 'react'
import './App.css'
import {Provider} from 'react-redux'
import {BrowserRouter as Router} from 'react-router-dom'
import initStore, {sagaMiddleware} from './store/configureStore'
import rootSaga from './saga/index'
import Navigation from './components/navigation/Navigation'

const store = initStore()

sagaMiddleware.run(rootSaga)

const App: React.FunctionComponent = () => {
    return (
        <Provider store={store}>
            <Router>
                <Navigation />
            </Router>
        </Provider>
    )
}

export default App
