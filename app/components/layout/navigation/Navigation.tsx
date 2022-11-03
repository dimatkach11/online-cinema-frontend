import { FC } from 'react'

import Logo from '@/layout/navigation/Logo'
import MenuContainer from '@/layout/navigation/menu-container/MenuContainer'

import styles from './Navigation.module.scss'

const Navigation: FC = () => {
	return (
		<div className={styles.navigation}>
			<Logo />
			<MenuContainer />
		</div>
	)
}

export default Navigation
