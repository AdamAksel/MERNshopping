import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import { Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Homescreen from './screens/Homescreen'
import Productscreen from './screens/Productscreen'
import Cartscreen from './screens/Cartscreen'
import Loginscreen from './screens/Loginscreen'
import Registerscreen from './screens/Registerscreen'
import Profilescreen from './screens/Profilescreen'
import Shippingscreen from './screens/Shippingscreen'
import Paymentscreen from './screens/Paymentscreen'
import Placeorderscreen from './screens/Placeorderscreen'
import Orderscreen from './screens/Orderscreen'

function App() {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/order/:id' component={Orderscreen} />
          <Route path='/login' component={Loginscreen} />
          <Route path='/placeorder' component={Placeorderscreen} />
          <Route path='/shipping' component={Shippingscreen} />
          <Route path='/payment' component={Paymentscreen} />
          <Route path='/register' component={Registerscreen} />
          <Route path='/profile' component={Profilescreen} />
          <Route path='/product/:id' component={Productscreen} />
          <Route path='/cart/:id?' component={Cartscreen} />
          <Route path='/' component={Homescreen} exact />
        </Container>
      </main>
      <Footer />
    </Router>
  )
}

export default App
