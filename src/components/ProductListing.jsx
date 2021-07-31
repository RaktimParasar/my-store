import ProductComponent from './ProductComponent';
import useFetchProducts from '../hooks/useFetchProducts';

const ProductListing = () => {
	useFetchProducts();
	return (
		<div className='container grid ui' style={{ marginTop: '2rem' }}>
			<ProductComponent />
		</div>
	);
};

export default ProductListing;
