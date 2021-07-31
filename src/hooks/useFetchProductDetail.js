import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeSelectedProduct, fetchProduct } from '../redux/actions/productActions';

const useFetchProductDetail = (productId) => {
	const dispatch = useDispatch();

	useEffect(() => {
		if (productId && productId !== '') dispatch(fetchProduct(productId));
		return () => {
			dispatch(removeSelectedProduct());
		};
	}, [dispatch, productId]);
};

export default useFetchProductDetail;
