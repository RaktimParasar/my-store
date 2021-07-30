import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { removeSelectedProduct, fetchProduct } from '../redux/actions/productActions';

const ProductDetails = () => {
	const product = useSelector((state) => state.product);
	const { image, title, price, category, description } = product;
	const { productId } = useParams();
	const dispatch = useDispatch();

	useEffect(() => {
		if (productId && productId !== '') dispatch(fetchProduct(productId));
		return () => {
			dispatch(removeSelectedProduct());
		};
	}, [dispatch, productId]);

	return (
		<div className='container grid ui' style={{ marginTop: '2rem' }}>
			{Object.keys(product).length === 0 ? (
				<div
					style={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						flexDirection: 'column',
						width: '100%',
						height: '90vh',
					}}
				>
					<div className='inline ui active centered loader'></div>
					<p>Loading</p>
				</div>
			) : (
				<div className='ui placeholder segment'>
					<div className='grid ui two column stackable center aligned'>
						<div className='ui vertical divider'>
							<i class='arrow right icon'></i>
						</div>
						<div className='middle aligned row'>
							<div className='column lp'>
								<img
									className='ui fluid image'
									src={image}
									alt='Product'
									style={{ height: '500px', maxWidth: '500px' }}
								/>
							</div>
							<div className='column rp'>
								<h1>{title}</h1>
								<h2>
									<a href='!!' className='ui teal tag label'>
										${price}
									</a>
								</h2>
								<h3 className='block ui brown header'>{category.toUpperCase()}</h3>
								<p>{description}</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
};

export default ProductDetails;
