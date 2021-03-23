import { Collapse } from "react-collapse";
import styles from "../styles/Project.module.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import StrapiImage from "../Components/StrapiImage";
import YouTube from 'react-youtube';

export default function Project({ project }) {
	//console.log(project)

	{/* <StrapiImage image={image.formats?.large || image.formats.medium} imgClass="galleryImg" key={image.formats.large?.name || image.formats.medium.name} /> */ }

	let carousel = project.Images.map(image => (
		<StrapiImage image={image} imgClass="galleryImg" key={image.name} />
	));

	{/* <div className={styles.image} key={image.formats.large?.name || image.formats.medium.name}>
		<StrapiImage image={image.formats?.large || image.formats.medium} imgClass="galleryImg" />
	</div> */}

	if (project?.Link) carousel.push(<YouTube key={project.Link} videoId={project.Link} className={styles.image} />)

	return (
		<Collapse isOpened={project.isOpen}>
			<div className={styles.project}>
				<div className={styles.carousel}>
					<Carousel showThumbs={false} showIndicators={false} showStatus={false}>
						{carousel}
					</Carousel>
				</div>
				<div className={styles.description}>{project.Description}</div>
			</div>
		</Collapse>
	);
}
