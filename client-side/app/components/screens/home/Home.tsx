import Image from 'next/image';
import { FC } from 'react';

import Layout from '@/layout/Layout';

import Column from '@/ui/grid/Column';
import Row from '@/ui/grid/Row';

import { IProductsPage } from '@/../pages';
import HomeInformation from '@/screens/home/home-imformation/HomeInformation';
import HotSale from '@/screens/home/hot-sale/HotSale';


const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			<Row
				className={'bg-dark-primary'}
				style={{
					backgroundImage: 'url(/images/texture.jpg)',
					backgroundBlendMode: 'multiply'
				}}
			>
				<Column size={7} isPadding={false}>
					<Image
						src={'/images/main-4x.png'}
						alt={''}
						width={830}
						height={725}
						className={'h-full'}
					/>
				</Column>
				<Column size={5} isPadding={false} className={'flex-col'}>
					<HotSale />
					<HomeInformation />
				</Column>
			</Row>
		</Layout>
	);
};

export default Home;