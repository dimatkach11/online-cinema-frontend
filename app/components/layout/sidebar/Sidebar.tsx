import { FC } from 'react'

import Search from '@/layout/sidebar/search/Search'

import styles from './Sidebar.module.scss'

const Sidebar: FC = () => {
	return (
		<div className={styles.sidebar}>
			<Search />
			{/* movies container */}
		</div>
	)
}

export default Sidebar
