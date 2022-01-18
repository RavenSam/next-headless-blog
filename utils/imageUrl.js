export default function imageUrl(featuredImage, format) {
  const url = `${featuredImage.data.attributes.formats[format].url}`;

  return url;
}
