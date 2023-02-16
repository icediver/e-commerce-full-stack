import { FC } from 'react';
import { FiBell, FiSearch } from 'react-icons/fi';

import Cart from '@/layout/header/cart/Cart';

import Column from '@/ui/grid/Column';
import SquareButton from '@/ui/square-button/SquareButton';


const HeaderButtons: FC = () => {
	return (
		<Column size={2} className={'gap-5'}>
			<SquareButton Icon={FiSearch} onClick={() => {}} />
			<SquareButton Icon={FiBell} onClick={() => {}} />
			<Cart />
		</Column>
	);
};

export default HeaderButtons;