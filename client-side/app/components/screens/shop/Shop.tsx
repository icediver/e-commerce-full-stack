import { FC } from 'react';

import Layout from '@/layout/Layout';

import Row from '@/ui/grid/Row';

import { IProductsPage } from '../../../../pages';

import ProductItem from '@/screens/shop/ProductItem';


const Shop: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout title={'Shop'} description={'Catalog clothing and accessories'}>
			<Row
				className={'bg-dark-primary'}
				style={{
					backgroundImage: 'url(/images/texture.jpg)',
					backgroundBlendMode: 'multiply'
				}}
			>
				{products.map((product, index) => (
					<ProductItem product={product} index={index} key={product.id} />
				))}
			</Row>
		</Layout>
	);
};

export default Shop;