const isIntersecting = (entry) => {
  return entry.isIntersecting;
};

const loadImage = (entry) => {
  const container = entry.target;
  const imageWrapper = container.firstChild;
  const image = imageWrapper.firstChild;
  const url = image.dataset.src;
  image.src = url;
  loadedImages++;
  printLog();

  observer.unobserve(container);
};

const observer = new IntersectionObserver((entries) => {
  entries.filter(isIntersecting).forEach(loadImage);
});

export const registerImage = (imagen) => {
  observer.observe(imagen);
};
