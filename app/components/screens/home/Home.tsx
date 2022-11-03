import { FC } from 'react'

import { IHome } from '@/screens/home/home.interface'

import Heading from '@/ui/heading/Heading'

import Meta from '@/utils/meta/Meta'

const Home: FC<IHome> = () => {
	return (
		<Meta
			title="watch movies online"
			description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, similique."
		>
			<Heading
				title="Watch movies online"
				className="text-gray-300 mb-8 text-xl"
			/>
		</Meta>
	)
}

export default Home
