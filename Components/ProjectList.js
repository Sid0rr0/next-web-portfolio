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

		e.target.parentElement.style.opacity === 1 
			? e.target.parentElement.style.opacity = 0
			: e.target.parentElement.style.opacity = 1
	}

	function returnCol(id, len) {
		const colors = [
			`linear-gradient(0deg, rgba(255,255,255,1) ${len}%, rgba(0,0,255,0.6) 100%)`,
			`linear-gradient(0deg, rgba(255,255,255,1) ${len}%, rgba(0,255,139,0.6) 100%)`,
			`linear-gradient(0deg, rgba(255,255,255,1) ${len}%, rgba(161,0,255,0.6) 100%)`,
			`linear-gradient(0deg, rgba(255,255,255,1) ${len}%, rgba(255,0,0,0.6) 100%)`,
		];

		return colors[id % colors.length]
	}

	function onHover(e, isOpen) {
		const el = e.target.parentElement;

		if(!isOpen)
			el.style.opacity === '0' ? el.style.opacity = 1 : el.style.opacity = 0

	}

	const p = projects.map(project => {
			return (
				<div 
					key={project.id} 
					style={project.isOpen ? { backgroundImage: returnCol(project.id, 80) } : null}
					className={styles.project_list_item}
					onMouseEnter={e => onHover(e, project.isOpen)}
					onMouseLeave={e => onHover(e, project.isOpen)}
				>
					<div 
						className={styles.project_list_item_title}
						onClick={e => handleClick(e, project)}
						style={project.isOpen ? null : { backgroundImage: returnCol(project.id, 18) }}
					>
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
