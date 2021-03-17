import Project from './Project';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';


export default function ProjectList({ projectList }) {
	const [projects, setProjects] = useState([])

	useEffect(() => {
		setProjects(projectList.map(r => {
			return { ...r, isOpen: false }
		}));
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

	function getColor(id, len) {
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
			el.style.opacity === '1' ? el.style.opacity = 0 : el.style.opacity = 1;

	}

	const p = projects.map(project => {
			return (
				<div
					key={project.id}
					style={project.isOpen ? { backgroundImage: getColor(project.id, 80) } : null}
					className={styles.project_list_item}
					onMouseEnter={e => onHover(e, project.isOpen)}
					onMouseLeave={e => onHover(e, project.isOpen)}
				>
					<div
						className={styles.project_list_item_title}
						onClick={e => handleClick(e, project)}
						style={project.isOpen ? null : { backgroundImage: getColor(project.id, 18) }}
					>
						{project?.Title}
					</div>
					<Project project={project} />
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
