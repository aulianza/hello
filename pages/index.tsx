import React from 'react';
import {NextPage} from 'next';
import {useRouter} from 'next/router';

import Center from '../components/center';
import Link from '../components/link';
import Button from '../components/button';
import Signature from '../components/signature';

const Index: NextPage<unknown> = () => {
	const router = useRouter();

	return (
		<Center>
			<div>
				<Signature/>
			</div>
			<div className="grid gap-5 mb-3">
				<p className="text-lg text-gray-200 leading-8 tracking-wide">
					Hello, I'm Ryan. An experienced software engineer especially in the frontend side. Having deep knowledge in HTML, CSS (with its pre-processor), JavaScript with the various framework (React.js, Angular & Vue.js), write good quality, clean code, well tested, and fast delivered.
				</p>
				<p className="text-lg text-gray-200 leading-8 tracking-wide">
					Currently working as a frontend software engineer at <Link href="https://paper.id" isExternal text="Paper.id"/>
				</p>
			</div>
			<div className="inline-grid grid-cols-2 gap-4 max-w-xs">
				<Button
					isCTA
					onMouseEnter={async () => router.prefetch('/contact')}
					onClick={async () => router.push('/contact')}
				>
					Get in touch
				</Button>
				<Button
					onMouseEnter={async () => router.prefetch('/resume.pdf')}
					onClick={async () => router.push('/resume.pdf')}
				>
					Resume
				</Button>
			</div>
		</Center>
	);
};

export default Index;
