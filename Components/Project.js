import { Collapse } from 'react-collapse';
import styles from '../styles/Project.module.css';
import { useState, useEffect } from 'react';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

export default function Project({isOpen}) {

	const [projects, setProjects] = useState([])

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
	}, [])

	function renderThumbs() {
		return
	}

	return (
		<>
			<Collapse isOpened={isOpen}>
				<div className={styles.project}>
					<div className={styles.carousel}>
						<Carousel
							showThumbs={false}
						>
							<div className={styles.image} >
								<img src="1.jpg" className="galleryImg" />
							</div>
							<div className={styles.image} >
								<img src="123.jpg" className="galleryImg" />
							</div>
						</Carousel>
					</div>
					<div className={styles.description}>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto sapiente id ab, culpa et unde cum at eaque voluptatum fugiat aperiam voluptatibus fugit magnam ipsam recusandae iure? Aperiam, reiciendis placeat?
						Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sint eum itaque dolore, odio officiis nesciunt non excepturi rerum voluptates eveniet iure dolorem architecto nisi, dignissimos asperiores quasi minima consequuntur iusto.
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error ab obcaecati consequuntur amet earum? Ipsa cum, consectetur laudantium autem voluptatibus molestiae magnam neque nostrum officia laboriosam non debitis eveniet, est iure quidem iusto. Deleniti, provident voluptates! Perferendis deleniti quae magni nisi quia sit odit laborum eveniet. Temporibus enim perferendis vero dignissimos! Maiores, nobis. Pariatur provident praesentium perferendis distinctio magnam ad animi atque ipsa odio iusto tempore deleniti cum ut laborum vitae explicabo sint facere itaque beatae dolores, corrupti modi maxime odit? Qui aliquid unde atque id, deserunt odio sunt maiores dignissimos incidunt. Ut modi sint nulla obcaecati, dicta dolorum vel?
					</div>
				</div>
			</Collapse>
		</>
	)
}
