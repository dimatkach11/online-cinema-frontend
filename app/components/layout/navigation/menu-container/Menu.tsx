import { FC } from 'react'

import MenuItem from '@/layout/navigation/menu-container/MenuItem'
import AuthItems from '@/layout/navigation/menu-container/auth/AuthItems'
import { IMenu } from '@/layout/navigation/menu-container/menu.interface'

import styles from './Menu.module.scss'

const Menu: FC<{ menu: IMenu }> = ({ menu: { items, title } }) => {
	return (
		<div className={styles.menu}>
			<div className={styles.heading}>{title}</div>
			<ul className={styles.ul}>
				{items.map((item) => (
					<MenuItem item={item} key={item.link} />
				))}
				{title === 'General' && <AuthItems />}
			</ul>
		</div>
	)
}

export default Menu
