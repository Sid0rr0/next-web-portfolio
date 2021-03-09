import styles from '../styles/Home.module.css';
import ProjectList from '../Components/ProjectList';
import Navbar from '../Components/Navbar';
import { fetchAPI } from "../lib/api";

import { useState, useEffect } from 'react';

export default function Home({ projectList, about }) {

	//console.log({projects, about})

	/* const [projectList, setProjectList] = useState([])

	useEffect(async () => {
		const res = await fetchAPI("/projects");

		setProjectList(res);
	}, [])

	console.log(projectList) */

	return (
		<>
			<Navbar about={about} />

			<main>
				<ProjectList projectList={projectList} />
			</main>

			<footer className={styles.head_foot} id={styles.footer}>
			</footer>
		</>
	)
}

export async function getStaticProps() {
	const projectList = await fetchAPI("/projects");
	const about = await fetchAPI("/about");

  return {
	  props: { projectList, about },
	  revalidate: 1,
  };
}
