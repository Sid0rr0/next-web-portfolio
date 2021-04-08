import styles from '../styles/Home.module.css';
import ProjectList from '../Components/ProjectList';
import Navbar from '../Components/Navbar';
import { fetchAPI } from "../lib/api";

import { useState, useEffect } from 'react';

export default function Home({ sortedPorjectList, about }) {
	//console.log(projectList)

	return (
		<>
			<Navbar about={about} />

			<main>
				<ProjectList projectList={sortedPorjectList} />
			</main>

			<footer className={styles.head_foot} id={styles.footer}>
			</footer>
		</>
	)
}

export async function getStaticProps() {
	const projectList = await fetchAPI("/projects");
	const about = await fetchAPI("/about");

	const sortedPorjectList = projectList.sort((a, b) => { return new Date(b.updated_at) - new Date(a.updated_at)})

  return {
	  props: { sortedPorjectList, about },
	  revalidate: 1,
  };
}
