import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Navbar, ProductListing, ProductDetails } from './components';

function App() {
	return (
		<div>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={ProductListing} />
					<Route path='/product/:productId' exact component={ProductDetails} />
					<Route>404 not found !</Route>
				</Switch>
			</Router>
		</div>
	);
}

export default App;
