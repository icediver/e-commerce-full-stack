import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

import Column from '@/ui/grid/Column';


const HeaderLogo: FC = () => {
	return (
		<Column size={3}>
			<Link href='/client-side/pages' className={'flex items-center'}>
				<Image
					src='/images/logo.svg'
					width={70}
					height={70}
					alt='Lorian shop'
					className={'mr-3 '}
				/>
				<span>
					<span className={'text-white font-light block tracking-[0.1em]'}>
						LORIAN
					</span>
					<span
						className={
							'tracking-wider text-sm text-dark-gray block font-extralight tracking-[0.4em]'
						}
					>
						STORE
					</span>
				</span>
			</Link>
		</Column>
	);
};

export default HeaderLogo;