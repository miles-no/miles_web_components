import './style.css';

document.querySelector('#app').innerHTML = `
<!--
<miles-banner image="https://www.miles.no/newsite/wp-content/uploads/2023/05/Trondheim-3-1109x810.jpg" slogan="We know a lot and we are not from Barcelona!" title="IT-konsulentselskap med kompetanse i særklasse"></miles-banner>
<miles-banner image="https://www.miles.no/newsite/wp-content/uploads/2023/05/Trondheim_web.jpg" variant="split" slogan="We know a lot and we are not from Barcelona!" title="IT-konsulentselskap med kompetanse i særklasse"></miles-banner>
  <div class="components">
  

  <miles-image-slider inview="3" autoplay="true" speed="4000">
  <figure class="wp-block-image equinor size-full"><img decoding="async" width="1200" height="800" data-id="8902" src="https://www.miles.no/newsite/wp-content/uploads/2023/01/U7A8645.jpg" alt="" class="wp-image-8902" srcset="https://www.miles.no/newsite/wp-content/uploads/2023/01/U7A8645.jpg 1200w, https://www.miles.no/newsite/wp-content/uploads/2023/01/U7A8645-825x550.jpg 825w, https://www.miles.no/newsite/wp-content/uploads/2023/01/U7A8645-768x512.jpg 768w, https://www.miles.no/newsite/wp-content/uploads/2023/01/U7A8645-1080x721.jpg 1080w, https://www.miles.no/newsite/wp-content/uploads/2023/01/U7A8645-385x258.jpg 385w" sizes="(max-width: 1200px) 100vw, 1200px"></figure>
  <figure class="wp-block-image fjordkraft size-full"><img decoding="async" loading="lazy" width="1200" height="800" data-id="8861" src="https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2400-@-Tony-Hall.jpg" alt="" class="wp-image-8861" srcset="https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2400-@-Tony-Hall.jpg 1200w, https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2400-@-Tony-Hall-825x550.jpg 825w, https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2400-@-Tony-Hall-768x512.jpg 768w, https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2400-@-Tony-Hall-1080x721.jpg 1080w, https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2400-@-Tony-Hall-385x258.jpg 385w" sizes="(max-width: 1200px) 100vw, 1200px"></figure>
  <figure class="wp-block-image tv2 size-full"><img decoding="async" loading="lazy" width="1200" height="800" data-id="8858" src="https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2595-@-Tony-Hall.jpg" alt="" class="wp-image-8858" srcset="https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2595-@-Tony-Hall.jpg 1200w, https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2595-@-Tony-Hall-825x550.jpg 825w, https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2595-@-Tony-Hall-768x512.jpg 768w, https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2595-@-Tony-Hall-1080x721.jpg 1080w, https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2595-@-Tony-Hall-385x258.jpg 385w" sizes="(max-width: 1200px) 100vw, 1200px"></figure>
  <figure class="wp-block-image cutters size-full"><img decoding="async" loading="lazy" width="1200" height="800" data-id="8854" src="https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2336-@-Tony-Hall.jpg" alt="" class="wp-image-8854" srcset="https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2336-@-Tony-Hall.jpg 1200w, https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2336-@-Tony-Hall-825x550.jpg 825w, https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2336-@-Tony-Hall-768x512.jpg 768w, https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2336-@-Tony-Hall-1080x721.jpg 1080w, https://www.miles.no/newsite/wp-content/uploads/2023/01/AFH2336-@-Tony-Hall-385x258.jpg 385w" sizes="(max-width: 1200px) 100vw, 1200px"></figure>
  </miles-image-slider>
  </div>


<miles-podcast-card url="https://sphinx.acast.com/p/open/s/63d28f41cd0f720011930608/e/645890f79b594e0011518b11/media.mp3" episode_title="Hvordan vil kunstig intelligens (AI) prege verden om 5 år?" published_date="Wed, 12 Apr 2023 06:00:07 GMT" link="https://shows.acast.com/milespodden/episodes/64354fa7c06561001192101b" description="" length="87411068">
  <p><em>Hvilket mulighetsrom finnes for norske bedrifter og hvilke faresignaler ser vi?</em></p><p><em>Dette og mye mer snakker vi om i denne episoden av MilesPodden.</em></p><p><em>I studio sitter Morten Goodwin, professor ved universitetet i Agder og Alfonso Canterla, Senior Data Scientist i Miles.</em></p><br><p><em>Podkasten er produsert av Gjenklangstudio.no</em></p><br /><hr><p style='color:grey; font-size:0.75em;'> Hosted on Acast. See <a style='color:grey;' target='_blank' rel='noopener noreferrer' href='https://acast.com/privacy'>acast.com/privacy</a> for more information.</p>
</miles-podcast-card>
<miles-business-card variant="wide" name="Janne Syversen" email="janne.syvertsen@miles.no" phone="+47 468 26 082" jobtitle="Pressekontakt / markedstjener" image="https://www.miles.no/newsite/wp-content/uploads/2022/10/Janne-Syversen_okt.jpg" style="--image-width: 320px;"></miles-business-card>

-->

<miles-podcast-card episode_number="6" episode_title="Bli kjent med ny konserntjener i Miles!" published_date="Mon, 05 Jun 2023 10:47:38 GMT" url="https://sphinx.acast.com/p/open/s/63d28f41cd0f720011930608/e/647dbd4bd035fa0011b20a66/media.mp3" length="37301367">
  <p>Hun heter Camilla Amundsen, har lang fartstid fra IT-bransjen og er klar for å drive selskapet videre.</p>
  <p>Hvorfor tok hun jobben, hvilke ambisjoner har hun for veien videre og er hun egentlig et A eller B-menneske?</p>
</miles-podcast-card>


  `;
