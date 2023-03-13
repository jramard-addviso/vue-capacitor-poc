const getImagePath = (imageFile) => {
  return new URL(`../assets/images/${imageFile}`, import.meta.url).href
}

export { getImagePath }
