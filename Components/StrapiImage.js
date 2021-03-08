import { getStrapiMedia } from "../lib/media";
import Image from 'next/image'

const StrapiImage = ({ image, style, imgClass }) => {
	const imageUrl = getStrapiMedia(image);

	return (
		<img
			src={imageUrl}
			alt={image?.alternativeText || image?.name}
			style={style}
			className={imgClass}
		/>
	);
};

export default StrapiImage;