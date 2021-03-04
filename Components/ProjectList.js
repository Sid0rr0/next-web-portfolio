import Project from './Project';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';


export default function ProjectList() {

	const [projects, setProjects] = useState([])

	useEffect(async () => {
		fetch('http://localhost:1337/graphql', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query: `
						query {
							projects {
								Title
								id
							}
						}`
				}),
			})
			.then(res => res.json())
			.then(res => setProjects(res.data?.projects.map(project => {return {id: project.id, title: project.Title, isOpen: false }})));

	}, [])


	const handleClick = (e, project) => {
		setProjects(
			projects.map(prevProject => {
				return project.id === prevProject.id 
					? { ...project, isOpen: !prevProject.isOpen } 
					: prevProject
		}));


		e.target.scrollIntoView({ behavior: 'smooth', block: 'start' })
		setTimeout(() => {
			e.target.scrollIntoView({ behavior: 'smooth', block: 'start' })
		}, 350);
	}

	const p = projects.map(project => {
			return (
				<div key={project.id}>
					<div className={styles.project_list_item_title} onClick={e => handleClick(e, project)}>
						{project?.title}
					</div>
					<Project isOpen={project.isOpen} />
				</div>
			)
		}
	)

	return (
		<div id={styles.project_list}>
			{p}
		</div>
	)
}
