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

	if (project?.Link) carousel.push(<YouTube key={project.Link} videoId={project.Link} className="h-full" />)

	const arrowStyles = {
		position: 'absolute',
		zIndex: 2,
		top: 0,
		width: '2.5em',
		height: '100%',
		cursor: 'pointer',
		outline: 'none',
		paddingBottom: '2em'
	};

	const arrowRight = {
		width: 0,
		height: 0,
		borderTop: '1em solid transparent',
		borderBottom: '1em solid transparent',
		borderLeft: '1em solid white',
		cursor: 'pointer',
	}

	const arrowLeft = {
		width: 0,
		height: 0,
		borderTop: '1em solid transparent',
		borderBottom: '1em solid transparent',
		borderRight: '1em solid white',
		cursor: 'pointer',
		paddingLeft: '1em',
	}

	return (
		<Collapse isOpened={project.isOpen}>
			<div className={styles.project}>
				<div className={styles.carousel}>
					<Carousel
						dynamicHeight={false}
						showThumbs={false}
						showIndicators={false}
						showStatus={false}
						renderArrowNext={
							(onClickHandler, hasNext, label) =>
							hasNext && (
								<button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, right: 0, }}>
									<div style={{ ...arrowRight }}></div>
								</button>
						)}
						renderArrowPrev={
							(onClickHandler, hasPrev, label) =>
								hasPrev && (
									<button type="button" onClick={onClickHandler} title={label} style={{ ...arrowStyles, left: 0, }}>
										<div style={{ ...arrowLeft }}></div>
									</button>
						)}
					>
						{carousel}
					</Carousel>
				</div>
				<div className={styles.description}>{project.Description}</div>
			</div>
		</Collapse>
	);
}
