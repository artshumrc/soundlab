export const IMAGES_LOADED = 'IMAGES_LOADED';

export const imagesLoaded = () => {
  return {
    type: IMAGES_LOADED,
		loaded: true,
  };
}
