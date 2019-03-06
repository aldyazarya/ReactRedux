import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux' // Ini component yang menghubungkan aplikasi react dengan redux
import {createStore} from 'redux' ; // Ini function yang membuat redux store

import App from './components/App'
import reducers from './reducers'

ReactDOM.render(
<Provider store={createStore(reducers)}> {/* Memberikan component App beserta yg ada didalamnya (SongList & SongDetail) untuk bisa mengakses redux store */}
    <App/>
</Provider>, document.querySelector('#root'))

//reducers untuk mengolah action
//
