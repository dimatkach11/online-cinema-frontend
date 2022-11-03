import { FC } from 'react'

import Menu from '@/layout/navigation/menu-container/Menu'
import {
	firstMenu,
	userMenu,
} from '@/layout/navigation/menu-container/menu.data'

const MenuContainer: FC = () => {
	return (
		<div>
			<Menu menu={firstMenu} />

			{/* genres menu */}

			<Menu menu={userMenu} />
		</div>
	)
}

export default MenuContainer
