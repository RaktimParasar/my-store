import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../redux/actions/productActions';
import ProductComponent from './ProductComponent';

const ProductListing = () => {
	const products = useSelector((state) => state);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchProducts());
	}, [dispatch]);
	console.log('Products: ', products);
	return (
		<div className='container grid ui' style={{ marginTop: '2rem' }}>
			<ProductComponent />
		</div>
	);
};

export default ProductListing;
