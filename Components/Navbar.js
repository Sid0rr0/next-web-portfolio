import styles from '../styles/Home.module.css';

import { useState } from 'react';
import Info from './Info';

export default function Navbar({about}) {
	const [infoOpen, setInfoOpen] = useState(false);

	function handleClick(e) {
		e.preventDefault();
		
		setInfoOpen(!infoOpen);
	}

	return (
		<>
			<header className={styles.head_foot} id={styles.header}>
				<a href="#">L&#234; Th&#x1ECB; Ho&#224;i</a>
				<a href="#" onClick={handleClick}>info</a>
			</header>

			<Info isOpen={infoOpen} about={about} />
		</>
	)
}
