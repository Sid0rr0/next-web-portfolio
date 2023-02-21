import styles from '../styles/Home.module.css';
import ProjectList from '../Components/ProjectList';
import Navbar from '../Components/Navbar';
import { fetchAPI } from "../lib/api";

import { useState, useMemo, useEffect } from 'react';

export default function Home({ sortedProjectList, about }) {
	const [isArtSelected, setIsArtSelected] = useState(false)
	const [artList, setArtList] = useState(() => sortedProjectList.filter(list => list.Type === "art"))
	const [list, setList] = useState(() => sortedProjectList.filter(list => list.Type !== "art"))

	const handleSetIsArtSelected = (bool) => {
		setIsArtSelected(bool)
	}

	const updateProjectList = (project, type) => {
		console.log(project, type)
		if (type === "art") {
			setArtList(artList.map(p => {
				return project.id === p.id
					? { ...project, isOpen: !p.isOpen, opened: true }
					: p
			}))
		} else {
			setList(list.map(p => {
				return project.id === p.id
					? { ...project, isOpen: !p.isOpen, opened: true }
					: p
			}))
		}
	}

	const [bgHeaderGradient, setBgHeaderGradient] = useState(styles.head_foot + " bg-gradient-to-b from-pink-500")
	const [bgFootrGradient, setBgFootrGradient] = useState(styles.head_foot + " bg-gradient-to-t from-pink-500")


	useEffect(() => {
		setBgHeaderGradient(styles.head_foot + (isArtSelected ? " bg-gradient-to-b from-red-500" : " bg-gradient-to-b from-pink-500"))
		setBgFootrGradient(styles.head_foot + (isArtSelected ? " bg-gradient-to-t from-red-500" : " bg-gradient-to-t from-pink-500"))
	}, [isArtSelected])

	return (
		<>
			<Navbar about={about} headerStyles={bgHeaderGradient} changeList={handleSetIsArtSelected} />

			<main>
				<ProjectList projectList={isArtSelected ? artList : list} isArt={isArtSelected} updateList={updateProjectList} />
			</main>

			<footer className={bgFootrGradient} id={styles.footer}>
			</footer>
		</>
	)
}

export async function getStaticProps() {
	const projectList = await fetchAPI("/projects");
	const about = await fetchAPI("/about");

	const sortedProjectList = projectList.sort((a, b) => {
		return a.Position && b.Position ? a.Position - b.Position : new Date(b.updated_at) - new Date(a.updated_at)
	}).map(r => {
		return { ...r, isOpen: false, opened: false }
	})

  return {
	  props: { sortedProjectList, about },
	  revalidate: 1,
  };
}
