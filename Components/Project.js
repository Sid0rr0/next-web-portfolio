import { Collapse } from 'react-collapse';
import styles from '../styles/Project.module.css';
import { useState } from 'react'

export default function Project({isOpen}) {

	return (
		<>
			<Collapse isOpened={isOpen}>
				<div className={styles.project}>
					<div>
						Galery
					</div>
					<div>
						Random content
					</div>
				</div>
			</Collapse>
		</>
	)
}
