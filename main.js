import './style.css';
import './src/main.js';
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

-->




<!--
<miles-podcast-card episode_number="6" episode_title="Bli kjent med ny konserntjener i Miles!" published_date="Mon, 05 Jun 2023 10:47:38 GMT" url="https://sphinx.acast.com/p/open/s/63d28f41cd0f720011930608/e/647dbd4bd035fa0011b20a66/media.mp3" length="37301367">
<p>Hun heter Camilla Amundsen, har lang fartstid fra IT-bransjen og er klar for å drive selskapet videre.</p>
<p>Hvorfor tok hun jobben, hvilke ambisjoner har hun for veien videre og er hun egentlig et A eller B-menneske?</p>
</miles-podcast-card>

<miles-podcast-card episode_number="6" episode_title="Bli kjent med ny konserntjener i Miles!" published_date="Mon, 05 Jun 2023 10:47:38 GMT" url="https://sphinx.acast.com/p/open/s/63d28f41cd0f720011930608/e/647dbd4bd035fa0011b20a66/media.mp3" length="37301367">
  <p>Hun heter Camilla Amundsen, har lang fartstid fra IT-bransjen og er klar for å drive selskapet videre.</p>
  <p>Hvorfor tok hun jobben, hvilke ambisjoner har hun for veien videre og er hun egentlig et A eller B-menneske?</p>
</miles-podcast-card>
-->
<miles-site-menu>
  <nav class="main-navigation site-nav">
    <ul id="menu-topmenu" class="menu-topmenu">
      <li class="menu-item has-mega-menu has-hamburger">
        <ul class="mega-menu-block">
          <div class="mega-menu-container">
            <ul id="mega-menu-7827" class="mega-menu-grid">
              <li id="nav_menu-9" class="widget widget_nav_menu">
                <h3 class="widget-title">Hvem er vi</h3>
                <div class="menu-hvem-er-vi-container">
                  <ul id="menu-hvem-er-vi" class="menu">
                    <li id="menu-item-9733"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9733"><a
                        href="https://www.miles.no/newsite/vi-er-miles/">Vi er Miles</a></li>
                    <li id="menu-item-9744"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9744"><a
                        href="https://www.miles.no/newsite/vi-er-miles/om-miles/">Historien vår</a></li>
                    <li id="menu-item-9736"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9736"><a
                        href="https://www.miles.no/newsite/cv-kompetanse/">Folkene</a></li>
                    <li id="menu-item-9870"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9870"><a
                        href="https://www.miles.no/newsite/vi-er-miles/samfunnsengasjement/">Samfunnsengasjement</a>
                    </li>
                    <li id="menu-item-9754"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9754"><a
                        href="https://www.miles.no/newsite/team-as-a-service-komponent/">Team as a service –
                        Komponent</a></li>
                  </ul>
                </div>
              </li>
              <li id="nav_menu-10" class="widget widget_nav_menu">
                <h3 class="widget-title">Hva gjør vi</h3>
                <div class="menu-hva-gjor-vi-container">
                  <ul id="menu-hva-gjor-vi" class="menu">
                    <li id="menu-item-9757"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9757"><a
                        href="https://www.miles.no/newsite/fagomrader/">Kompetansen vår</a></li>
                    <li id="menu-item-9738"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9738"><a
                        href="https://www.miles.no/newsite/pafyll/">Faglige verktøy</a></li>
                    <li id="menu-item-9753"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9753"><a
                        href="https://www.miles.no/newsite/prosjekter/">Prosjekter</a></li>
                  </ul>
                </div>
              </li>
              <li id="nav_menu-13" class="widget widget_nav_menu">
                <h3 class="widget-title">Kontakt oss</h3>
                <div class="menu-kontakt-oss-container">
                  <ul id="menu-kontakt-oss" class="menu">
                    <li id="menu-item-9758"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9758"><a
                        href="https://www.miles.no/newsite/vare-kontorer/">Våre kontorer</a></li>
                  </ul>
                </div>
              </li>
              <li id="custom_html-23" class="widget_text widget widget_custom_html">
                <div class="textwidget custom-html-widget">
                  <h2>
                    <a href="https://innivarmen.miles.no">
                      Jobb i Miles <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                        fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                        <path fill-rule="evenodd"
                          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z">
                        </path>
                        <path fill-rule="evenodd"
                          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z">
                        </path>
                      </svg>
                    </a>
                  </h2>
                </div>
              </li>
              <li id="nav_menu-11" class="widget widget_nav_menu">
                <h3 class="widget-title">Faglig inspirasjon</h3>
                <div class="menu-faglig-inspirasjon-container">
                  <ul id="menu-faglig-inspirasjon" class="menu">
                    <li id="menu-item-9796"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9796"><a
                        href="https://www.miles.no/newsite/fagblogg/">Vår egen blogg</a></li>
                    <li id="menu-item-9740"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9740"><a
                        href="https://www.miles.no/newsite/milespodden/">MilesPodden</a></li>
                    <li id="menu-item-9739"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9739"><a
                        href="https://www.miles.no/newsite/se-hva-som-skjer/">Aktivitetskalenderen</a></li>
                  </ul>
                </div>
              </li>
              <li id="nav_menu-12" class="widget widget_nav_menu">
                <h3 class="widget-title">Mediesenter</h3>
                <div class="menu-mediesenter-container">
                  <ul id="menu-mediesenter" class="menu">
                    <li id="menu-item-9756"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9756"><a
                        href="https://www.miles.no/newsite/nyhetssaker/">Nyhetssaker</a></li>
                    <li id="menu-item-9755"
                      class="menu-item menu-item-type-post_type menu-item-object-page menu-item-9755"><a
                        href="https://www.miles.no/newsite/logo/">Logo</a></li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
        </ul>
      </li>
    </ul>
  </nav>
</miles-site-menu>


<miles-office-banner city="Test" background="https://www.miles.no/wp-content/uploads/2021/06/Trondheim.jpg">
    <miles-contact-card slot="office" name="Testplace" email="ronny@njaastad.no" address="Morvikveien 252" orgnr="sd234423" phone="90066303"></miles-contact-card>
    <miles-business-card cvemail="bjorn@miles.no" name="Bjørn Olav Semindseth" email="bjorn@miles.no" phone="906 52 950" jobtitle="Daglig tjener Miles Oslo" image="https://www.miles.no/newsite/wp-content/uploads/2020/10/bjorn-olav.png"></miles-business-card>
    <miles-business-card cvemail="annika.fjeldstad@miles.no" phone="400 00 140" jobtitle="HR og rekruttering" image="https://www.miles.no/newsite/wp-content/uploads/2021/05/Annika-1.jpg" name="Annika R. Fjeldstad" office="Oslo" officeid="4f61bfce875b52672f00000a" country="no" email="annika.fjeldstad@miles.no"></miles-business-card>
</miles-office-banner>

</miles-office-banner>
  `;
