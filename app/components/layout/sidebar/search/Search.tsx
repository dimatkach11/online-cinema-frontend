import { FC } from 'react'

import SearchList from '@/layout/sidebar/search/search-list/SearchList'
import { useSearch } from '@/layout/sidebar/search/useSearch'

import SearchField from '@/ui/search-field/SearchField'

import styles from './Search.module.scss'

const Search: FC = () => {
	const { isSuccess, handleSearch, data, searchTerm } = useSearch()

	return (
		<div className={styles.wrapper}>
			<SearchField searchTerm={searchTerm} handleSearch={handleSearch} />
			{isSuccess && <SearchList movies={data || []} />}
		</div>
	)
}

export default Search
