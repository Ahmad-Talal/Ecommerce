import {Container} from 'react-bootstrap'
import {BrowserRouter as Router, Route} from 'react-router-dom'



import Header from './components/Header'
import Footer from './components/Footer'
import HomseScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
function App() {
  return (
    <Router >
    <Header/>
    <main className="py-5">
    <Container>
      <Route path='/' component={HomseScreen} exact/>
      <Route path='/product/:id' component={ProductScreen}/>
      <Route path='/Cart/:id?' component={CartScreen}/>
      </Container>
    </main>
    <Footer/>
    </Router>
  );
}

export default App;
