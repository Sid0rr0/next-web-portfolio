import Project from './Project';
import styles from '../styles/Home.module.css';
import { useState, useEffect } from 'react';


export default function ProjectList({ projectList, isArt, updateList }) {
	console.log(projectList, isArt)
	// const [projects, setProjects] = useState([])

	// useEffect(() => {
	// 	setProjects(projectList)
	// }, [projectList])


	const handleClick = (e, project) => {
		// set isOpen on clicked project and disables hover after it's been opened
		// setProjects(
		// 	projects.map(prevProject => {
		// 		return project.id === prevProject.id
		// 			? { ...project, isOpen: !prevProject.isOpen, opened: true }
		// 			: prevProject
		// }));

		updateList(project, isArt ? "art" : "design")


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

	function onHover(e, project) {
		const el = e.target.parentElement;

		// if (project.opened) {
		// 	return
		// }

		if(!project.isOpen && !project.opened)
			el.style.opacity === '1' ? el.style.opacity = 0 : el.style.opacity = 1;
	}

	const p = projectList.map(project => {
			return (
				<div
					key={project.id}
					style={project.isOpen || project.opened ? { backgroundImage: getColor(project.id, 80), opacity: 1 } : null}
					className={styles.project_list_item}
					onMouseEnter={e => onHover(e, project)}
					onMouseLeave={e => onHover(e, project)}
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
