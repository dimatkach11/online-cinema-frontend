import { FC } from 'react'

import Menu from '@/layout/navigation/menu-container/Menu'
import GenreMenu from '@/layout/navigation/menu-container/genres/GenreMenu'
import {
	firstMenu,
	userMenu,
} from '@/layout/navigation/menu-container/menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />

			<GenreMenu />

			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
