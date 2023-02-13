import cn from 'clsx';
import { FC } from 'react';

import Column from '@/ui/grid/Column';
import Row from '@/ui/grid/Row';

import styles from './HomeInformation.module.scss';


const HomeInformation: FC = () => {
	return (
		<Row className={styles.row} isBorder={false}>
			<Column size={3} className={styles.column}>
				<div className={styles.number}>100K</div>
				<div className={styles.customers}>Customers</div>
			</Column>
			<Column
				size={9}
				className={cn(styles.column, 'border-r-0 p-0')}
				isBorder={false}
			>
				<div className={styles.content}>
					<div className={styles.title}>New collection</div>
					<div className={styles.text}>
						The red dress was inspired by a love of fashion and a fear of
						complacency. Our challenge was to create a dress
					</div>
				</div>
			</Column>
		</Row>
	);
};

export default HomeInformation;