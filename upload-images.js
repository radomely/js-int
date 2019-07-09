const imagesList = [
  "http://gallery-motorcycles.com/wp-content/uploads/2017/05/gallery-motorcycles-harley-davidson-SHOWROOM_sx.jpg",
  "https://journal.riserapp.com/wp-content/uploads/2019/02/48_riserblog_yard_built_yamaha_bunkers_eu_custom-6.jpg",
  "http://gallery-motorcycles.com/wp-content/uploads/2017/05/gallery-motorcycles-harley-davidson-SHOWROOM_REV.jpg",
  "http://gallery-motorcycles.com/wp-content/uploads/2016/12/fronte-copia.jpg",
  "https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-4.jpg",
  "http://gallery-motorcycles.com/wp-content/uploads/2016/12/retro-copia.jpg",
  "http://gallery-motorcycles.com/wp-content/uploads/2016/12/trequarti.jpg",
  "https://journal.riserapp.com/wp-content/uploads/2019/02/48_riserblog_yard_built_yamaha_bunkers_eu_custom-7.jpg",
  "https://journal.riserapp.com/wp-content/uploads/2019/02/21_riserblog-yamaha-mt-10-naked-eicma-2015-10.jpg",
  "https://journal.riserapp.com/wp-content/uploads/2019/02/36_riserblog-yamaha-mt-07-fluo-3.jpg",
  "https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-3.jpg",
  "https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-6.jpg",
  "https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-7.jpg",
  "https://journal.riserapp.com/wp-content/uploads/2019/02/30_riserblog-harley-davidson-883-iron-2016-1.jpg"
];

const gallery = document.querySelector(".gallery");
const PAUSE = 2000;

const renderImage = src => {
  const img = document.createElement("img");
  img.setAttribute("src", src);
  gallery.appendChild(img);
};

function resolveImage(list) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(list.map(el => renderImage(el)));
    }, PAUSE);
  });
}
const size = 3;
let subarrayOfImages = [];
for (let i = 0; i < Math.ceil(imagesList.length / size); i++) {
  subarrayOfImages[i] = imagesList.slice(i * size, i * size + size);
}

subarrayOfImages[0].map(el => renderImage(el));
const fetchImagesAsync = () => {
  async function renderAsync() {
    const first = await resolveImage(subarrayOfImages[1]);
    const second = await resolveImage(subarrayOfImages[2]);
    const third = await resolveImage(subarrayOfImages[3]);
    const last = await resolveImage(subarrayOfImages[4]);
  }
  renderAsync();
};

fetchImagesAsync();
