import styles from '../styles/Home.module.css';

import { useState } from 'react';
import Info from './Info';
import Image from 'next/image'


export default function Navbar({about, headerStyles, changeList}) {
	const [infoOpen, setInfoOpen] = useState(false);

	function handleClick(e) {
		e.preventDefault();

		setInfoOpen(!infoOpen);
	}

	return (
		<>
			<header className={headerStyles} id={styles.header}>
				<li className="w-full flex flex-row justify-between">
					<ul>
						<a href="#">L&#234; Th&#x1ECB; Ho&#224;i</a>
					</ul>
					<ul>
						<button onClick={e => {
							e.stopPropagation()
							changeList(false)
						}}>
							<Image src="/fire1.png" width={30} height={30} alt="Art" />
						</button>
					</ul>
					<ul>
						<button onClick={e => {
							e.stopPropagation()
							changeList(true)
						}}>
							<Image src="/fire2.png" width={30} height={30} alt="Art" />
						</button>
					</ul>
					<ul>
						<a href="#" onClick={handleClick}>info</a>
					</ul>
				</li>
			</header>

			<Info isOpen={infoOpen} about={about} />
		</>
	)
}
