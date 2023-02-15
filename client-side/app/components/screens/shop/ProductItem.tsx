import Image from 'next/image';
import { FC } from 'react';

import Column from '@/ui/grid/Column';

import { IProduct } from '@/types/product.interface';

import { formatToCurrency } from '@/utils/format-to-currency';

import styles from '@/screens/shop/Shop.module.scss';


interface IProductItem {
	product: IProduct;
	index: number;
}

const ProductItem: FC<IProductItem> = ({ product, index }) => {
	return (
		<Column size={index === 0 ? 3 : index === 4 ? 3 : 2}>
			<div className={styles.product}>
				<div className={styles.image}>
					<Image
						alt={product.name}
						src={product.images[0]}
						width={220}
						height={220}
					/>
				</div>
				<div>
					<h2 className={styles.name}>{product.name}</h2>
					<div className={styles.price}>{formatToCurrency(product.price)}</div>
					<button className={'btn-link'}>Add to cart</button>
				</div>
			</div>
		</Column>
	);
};

export default ProductItem;