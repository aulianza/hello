import React from 'react';
import Image from 'next/image';

import photo from '../public/images/aulianza.jpg';
import signature from '../public/images/signature.svg';

const Signature = () => (
	<section
		className="grid grid-cols-2 w-44"
	>
		<div className="w-20">
			<Image
				src={photo}
				alt="My face"
				placeholder="blur"
				className="rounded-full"
			/>
		</div>
		<div className="flex flex-col w-40 justify-evenly items-center">
			<div>
				<h2 className="text-gray-100 text-2xl">Ryan Aulia</h2>
				<span className="text-gray-500 text-md">life-long learner</span>
			</div>
		</div>
	</section>
);

export default Signature;

