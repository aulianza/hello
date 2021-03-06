import {useRouter} from 'next/dist/client/router';
import React from 'react';

import GhostButton from './ghost-button';

interface Props {
	children: React.ReactNode;
}

const Container = ({children}: Props) => {
	const router = useRouter();

	return (
		<>
			<div className="sticky h-14 border-b border-gray-800 bg-gray-800 flex justify-center">
				<nav className="max-w-xl w-full flex content-center justify-between p-2 font-sans">
					<GhostButton
						shouldHover={router.pathname === '/'}
						onMouseEnter={async () => router.prefetch('/')}
						onClick={async () => router.push('/')}
					>
						Home
					</GhostButton>
					<GhostButton
						shouldHover={router.pathname === '/about'}
						onMouseEnter={async () => router.prefetch('/about')}
						onClick={async () => router.push('/about')}
					>
						About
					</GhostButton>
					<GhostButton
						shouldHover={router.pathname === '/projects'}
						onMouseEnter={async () => router.prefetch('/projects')}
						onClick={async () => router.push('/projects')}
					>
						Projects
					</GhostButton>
					<GhostButton
						shouldHover={router.pathname === '/uses'}
						onMouseEnter={async () => router.prefetch('/uses')}
						onClick={async () => router.push('/uses')}
					>
						Uses
					</GhostButton>
					<GhostButton
						shouldHover={router.pathname === '/contact'}
						onMouseEnter={async () => router.prefetch('/contact')}
						onClick={async () => router.push('/contact')}
					>
						Contact
					</GhostButton>
				</nav>
			</div>
			<div className="w-full flex justify-center">
				{children}
			</div>
		</>
	);
};

export default Container;
