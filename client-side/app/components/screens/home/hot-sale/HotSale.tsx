import cn from 'clsx';
import { FC } from 'react';

import { formatToCurrency } from '@/utils/format-to-currency';

import styles from './HotSale.module.scss';


const HotSale: FC = () => {
	return (
		<div className={styles.sale}>
			<div className={styles.deals}>HOT SALES</div>
			<h1 className={cn(styles.header, 'font-serif')}>
				A RED DRESS WILL BRIGHTEN UP YOUR EVENING
			</h1>
			<div className={styles['prices-block']}>
				<div>
					<span className={styles.price}>{formatToCurrency(195)}</span>
					<span className={styles['old-price']}>{formatToCurrency(295)}</span>
				</div>
				<button className={styles.button}>By now</button>
			</div>
		</div>
	);
};

export default HotSale;