import { FC } from 'react'

import Menu from '@/layout/navigation/menu-container/Menu'
import { usePopularGenres } from '@/layout/navigation/menu-container/genres/usePopularGenres'

const GenreMenu: FC = () => {
	const { isLoading, data } = usePopularGenres()

	return isLoading ? (
		<div className="mx-11 mb-6">Loading...</div>
	) : (
		<Menu menu={{ title: 'Popular Genres', items: data || [] }} />
	)
}

export default GenreMenu
