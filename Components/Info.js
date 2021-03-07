import React from 'react';
import { Collapse } from 'react-collapse';
import styles from '../styles/Home.module.css';

export default function Info({ isOpen, Description, profileImage}) {

	return (
		<Collapse isOpened={isOpen}>
			<div className={styles.info}>
				<div>
					galery
				</div>
				<pre>
					{Description}
				</pre>
			</div>
		</Collapse>
	)
}

export async function getStaticProps() {
	const res = await fetchAPI("/about");

	const about = await res.json()

	return {
		props: { about },

		// description: about.Description, profileImage: about.ProfileImage
	}
}
