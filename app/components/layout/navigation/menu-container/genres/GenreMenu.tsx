import { FC } from 'react'

import Menu from '@/layout/navigation/menu-container/Menu'
import { usePopularGenres } from '@/layout/navigation/menu-container/genres/usePopularGenres'

import SkeletonLoader from '@/ui/SkeletonLoader'

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mb-6">
			<SkeletonLoader count={5} className="h-7 mt-6" />
		</div>
	) : (
		<Menu menu={{ title: 'Popular Genres', items: data || [] }} />
	)
}

export default GenreMenu
