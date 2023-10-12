import './src/main.js';
/* const BASE_URL = import.meta.VITE_BASE_URL; */
const BASE_URL = 'https://miles.no/newsite/';

document.querySelector('#app').innerHTML = `
<miles-image-slider>
  <figure data-slide-image="0">
    <div class="overlay tv2"></div>
    <img decoding="async" loading="lazy" width="825" height="550"
      src="${BASE_URL}wp-content/uploads/2023/01/AFH2336-@-Tony-Hall-825x550.jpg" alt="" class="wp-image-8854" srcset="
        ${BASE_URL}wp-content/uploads/2023/01/AFH2336-@-Tony-Hall-825x550.jpg   825w,
        ${BASE_URL}wp-content/uploads/2023/01/AFH2336-@-Tony-Hall-768x512.jpg   768w,
        ${BASE_URL}wp-content/uploads/2023/01/AFH2336-@-Tony-Hall-1080x721.jpg 1080w,
        ${BASE_URL}wp-content/uploads/2023/01/AFH2336-@-Tony-Hall-385x258.jpg   385w,
        ${BASE_URL}wp-content/uploads/2023/01/AFH2336-@-Tony-Hall.jpg          1200w
      " sizes="(max-width: 825px) 100vw, 825px" draggable="false" />
  </figure>
  <figure data-slide-image="1">
    <div class="overlay ruter"></div>
    <img decoding="async" loading="lazy" width="825" height="550"
      src="${BASE_URL}wp-content/uploads/2023/01/AFH2595-@-Tony-Hall-825x550.jpg" alt="" class="wp-image-8858" srcset="
        ${BASE_URL}wp-content/uploads/2023/01/AFH2595-@-Tony-Hall-825x550.jpg   825w,
        ${BASE_URL}wp-content/uploads/2023/01/AFH2595-@-Tony-Hall-768x512.jpg   768w,
        ${BASE_URL}wp-content/uploads/2023/01/AFH2595-@-Tony-Hall-1080x721.jpg 1080w,
        ${BASE_URL}wp-content/uploads/2023/01/AFH2595-@-Tony-Hall-385x258.jpg   385w,
        ${BASE_URL}wp-content/uploads/2023/01/AFH2595-@-Tony-Hall.jpg          1200w
      " sizes="(max-width: 825px) 100vw, 825px" draggable="false" />
  </figure>
  <figure data-slide-image="2">
    <div class="overlay fjordkraft"></div>
    <img decoding="async" loading="lazy" width="825" height="550"
      src="${BASE_URL}wp-content/uploads/2023/01/AFH2711-@-Tony-Hall-825x550.jpg" alt="" class="wp-image-8863" srcset="
        ${BASE_URL}wp-content/uploads/2023/01/AFH2711-@-Tony-Hall-825x550.jpg   825w,
        ${BASE_URL}wp-content/uploads/2023/01/AFH2711-@-Tony-Hall-768x512.jpg   768w,
        ${BASE_URL}wp-content/uploads/2023/01/AFH2711-@-Tony-Hall-1080x721.jpg 1080w,
        ${BASE_URL}wp-content/uploads/2023/01/AFH2711-@-Tony-Hall-385x258.jpg   385w,
        ${BASE_URL}wp-content/uploads/2023/01/AFH2711-@-Tony-Hall.jpg          1200w
      " sizes="(max-width: 825px) 100vw, 825px" draggable="false" />
  </figure>
  <figure data-slide-image="3">
    <div class="overlay cutters"></div>
    <img decoding="async" loading="lazy" width="825" height="550"
      src="${BASE_URL}wp-content/uploads/2023/01/AFH2400-@-Tony-Hall-825x550.jpg" alt="" class="wp-image-8861" srcset="
        ${BASE_URL}wp-content/uploads/2023/01/AFH2400-@-Tony-Hall-825x550.jpg   825w,
        ${BASE_URL}wp-content/uploads/2023/01/AFH2400-@-Tony-Hall-768x512.jpg   768w,
        ${BASE_URL}wp-content/uploads/2023/01/AFH2400-@-Tony-Hall-1080x721.jpg 1080w,
        ${BASE_URL}wp-content/uploads/2023/01/AFH2400-@-Tony-Hall-385x258.jpg   385w,
        ${BASE_URL}wp-content/uploads/2023/01/AFH2400-@-Tony-Hall.jpg          1200w
      " sizes="(max-width: 825px) 100vw, 825px" draggable="false" />
  </figure>
  <figure data-slide-image="4">
    <div class="overlay tv2"></div>
    <img decoding="async" loading="lazy" width="825" height="550"
      src="${BASE_URL}wp-content/uploads/2022/11/0U7A7621-825x550.jpg" alt="" class="wp-image-8707" srcset="
        ${BASE_URL}wp-content/uploads/2022/11/0U7A7621-825x550.jpg   825w,
        ${BASE_URL}wp-content/uploads/2022/11/0U7A7621-768x512.jpg   768w,
        ${BASE_URL}wp-content/uploads/2022/11/0U7A7621-1080x721.jpg 1080w,
        ${BASE_URL}wp-content/uploads/2022/11/0U7A7621-385x258.jpg   385w,
        ${BASE_URL}wp-content/uploads/2022/11/0U7A7621.jpg          1200w
      " sizes="(max-width: 825px) 100vw, 825px" draggable="false" />
  </figure>
  <figure data-slide-image="5">
    <div class="overlay scaleaq"></div>
    <img decoding="async" loading="lazy" width="463" height="550"
      src="${BASE_URL}wp-content/uploads/2023/05/Stavanger-463x550.jpg" alt="" class="wp-image-9826" srcset="
        ${BASE_URL}wp-content/uploads/2023/05/Stavanger-463x550.jpg  463w,
        ${BASE_URL}wp-content/uploads/2023/05/Stavanger-768x912.jpg  768w,
        ${BASE_URL}wp-content/uploads/2023/05/Stavanger.jpg         1010w
      " sizes="(max-width: 463px) 100vw, 463px" draggable="false" />
  </figure>
  <figure data-slide-image="6">
    <div class="overlay"></div>
    <img decoding="async" loading="lazy" width="508" height="550"
      src="${BASE_URL}wp-content/uploads/2023/05/Trondheim-3-508x550.jpg" alt="" class="wp-image-9825" srcset="
        ${BASE_URL}wp-content/uploads/2023/05/Trondheim-3-508x550.jpg  508w,
        ${BASE_URL}wp-content/uploads/2023/05/Trondheim-3-768x831.jpg  768w,
        ${BASE_URL}wp-content/uploads/2023/05/Trondheim-3.jpg         1109w
      " sizes="(max-width: 508px) 100vw, 508px" draggable="false" />
  </figure>
</miles-image-slider>
  `;
