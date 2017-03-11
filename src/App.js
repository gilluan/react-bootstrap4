import React from 'react'
import 'bootstrap-v4-dev/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'

//import Todo from './todo/Todo'
import NavBar from './template/NavBar'
import Routes from './main/Routes'

export default props => (
    <div className="container">
        <NavBar />
        <Routes />
       
    </div>

)