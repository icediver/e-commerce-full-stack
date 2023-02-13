import { FC } from 'react';
import { FiUser } from 'react-icons/fi';

import Column from '@/ui/grid/Column';
import SquareButton from '@/ui/square-button/SquareButton';


const HeaderProfile: FC = () => {
	return (
		<Column size={3}>
			<SquareButton Icon={FiUser} />
			<div className={'ml-3'}>
				<div className={'text-gray text-sm'}>Alexander Lyashenk</div>
			</div>
		</Column>
	);
};

export default HeaderProfile;