import { Collapse } from 'react-collapse';
import styles from '../styles/Project.module.css';

import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import StrapiImage from '../Components/StrapiImage'

export default function Project({ project }) {

	//console.log(project)

/*	const [projects, setProjects] = useState([])

	useEffect(async () => {
		await fetch('http://localhost:1337/graphql', {
			method: 'POST',
			headers: { 'Content-Type': 'application/json' },
			body: JSON.stringify({
				query: `
						query {
							projects {
								Description
								id
								Link
							}
						}`
			}),
		})
			.then(res => res.json())
			.then(res => setProjects(res.data?.projects));
	}, []) */

	//console.log(project.Images)

	const carousel = project.Images.map(image => 
		<div className={styles.image} key={image.formats.medium.name} >
			<StrapiImage image={image.formats.medium} imgClass="galleryImg" />
		</div>
	)

	return (
		<Collapse isOpened={project.isOpen}>
			<div className={styles.project}>
				<div className={styles.carousel}>
					<Carousel showThumbs={false}>
						{carousel}
					</Carousel>
				</div>
				<div className={styles.description}>
					{project.Description}
				</div>
			</div>
		</Collapse>
	)
}
