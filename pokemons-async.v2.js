// gallery.mount(node, images, settings)
// gallery.nextSlide()
// gallery.prevSlide()
// gallery.toFirstSlide()
// gallery.unmount()

const galleryCreator = function() {
  const state = {
    node: null,
    images: [],
    settings: {},
    currentSlide: 1
  };

  const goToSlide = () => {};

  const mount = (node, images, settings) => {
    state.node = node;
    state.images = images;
    state.settings = { ...state.settings, ...settings };
  };

  const nextSlide = () => {
    const nextSlide = state.currentSlide + 1;

    goToSlide(nextSlide);
    state.currentSlide = nextSlide;
  };

  const prevSlide = () => {
    const nextSlide = state.currentSlide - 1;

    goToSlide(nextSlide);
    state.currentSlide = nextSlide;
  };

  const toFirstSlide = () => {
    const nextSlide = 1;

    goToSlide(nextSlide);
    state.currentSlide = nextSlide;
  };

  const unmount = () => {
    state.node.parentElement.removeChild(state.node);
  };

  return {
    mount,
    nextSlide,
    prevSlide,
    toFirstSlide,
    unmount
  };
};

const gallery1 = galleryCreator();
const gallery2 = galleryCreator();
