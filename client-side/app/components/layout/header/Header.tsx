import HeaderButtons from '@/layout/header/header-buttons/HeaderButtons'
import HeaderLogo from '@/layout/header/header-logo/HeaderLogo'
import HeaderMenu from '@/layout/header/header-menu/HeaderMenu'
import HeaderProfile from '@/layout/header/header-profile/HeaderProfile'
import Row from "@/ui/grid/Row";
import {FC} from 'react'

import styles from './Header.module.scss'


const Header: FC = () => {
	return (
		<header className={styles.header}>
			<Row><HeaderLogo/>
				<HeaderMenu/>
				<HeaderButtons/>
				<HeaderProfile/></Row>
		</header>
	)
}

export default Header