import { FC } from 'react'

import Layout from '@/components/layout/Layout'

import { Ihome } from '@/screens/home/home.interface'

const Home: FC<Ihome> = () => {
	return (
		<Layout>
			<h1>Homepage</h1>
		</Layout>
	)
}

export default Home
