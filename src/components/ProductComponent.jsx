import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

const ProductComponent = () => {
	const history = useHistory();
	const products = useSelector((state) => state.allProducts.products);

	return (
		<>
			{products.map(({ id, title, image, price, category }) => (
				<div className='four wide column' key={id}>
					<div className='ui link cards' onClick={() => history.push(`/product/${id}`)}>
						<div className='ui card'>
							<div className='image' style={{ background: 'none' }}>
								<img style={{ padding: '1rem' }} src={image} alt={title} />
							</div>
							<div className='content'>
								<div className='header'>{title}</div>
								<div className='meta price'>$ {price}</div>
								<div className='meta'>{category}</div>
							</div>
						</div>
					</div>
				</div>
			))}
		</>
	);
};

export default ProductComponent;
