import './src/main.js';
const BASE_URL = import.meta.VITE_BASE_URL;

document.querySelector('#app').innerHTML = `
<main id="primary" class="site-main our_people">
  <div
        class="miles_offices_bar cv-filter-tags"
        aria-description="Våre kontor i Norge."
        aria-label="Kontor">
        <span>Kontor</span>
        <ul>
          <li>
            <miles-button
              color="#3F1221"
              filter="4f61bfd2875b526717000008"
              style="--color: #3f1221"
              >Bergen</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="6452624096588f0f836d19a3"
              style="--color: #3f1221"
              >Haugesund</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="61a9cacadffdc2114f4f4c5b"
              style="--color: #3f1221"
              >Komponent Bergen</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="61a9cab79134b2111ea0c34f"
              style="--color: #3f1221"
              >Komponent Kaunas</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="61a9cabfdffdc211534f4cd9"
              style="--color: #3f1221"
              >Komponent Oslo</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="61a733d488c4af000178107e"
              style="--color: #3f1221"
              >Komponent Vilnius</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="64808d93b0b97b0f42e62434"
              style="--color: #3f1221"
              >Miles AS</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="4f61bfce875b52672f00000a"
              style="--color: #3f1221"
              >Oslo</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="4f61bfd6875b52672f00000b"
              style="--color: #3f1221"
              >Stavanger</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="5d5d02f05b734b0ea79e02a6"
              style="--color: #3f1221"
              >Trondheim</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="635789bd6857c00fd739243d"
              style="--color: #3f1221"
              >Ålesund</miles-button
            >
          </li>
        </ul>
      </div>
      <div
        class="miles_areas_bar cv-filter-tags"
        aria-description="Hva vi er gode på."
        aria-label="Fagområder">
        <span>Fagområder</span>
        <ul>
          <li>
            <miles-button
              color="#3F1221"
              filter="ARCHITECTURE"
              style="--color: #3f1221"
              >Arkitektur</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="DATA_SCIENCE"
              style="--color: #3f1221"
              >Data Science</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="DESIGN"
              style="--color: #3f1221"
              >Design</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="PROJECT_MANAGEMENT"
              style="--color: #3f1221"
              >Prosjektledelse</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="ADVISORY"
              style="--color: #3f1221"
              >Rådgivning</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="AGILE"
              style="--color: #3f1221"
              >Smidig</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="TEST_MANAGEMENT"
              style="--color: #3f1221"
              >Testledelse</miles-button
            >
          </li>
          <li>
            <miles-button
              color="#3F1221"
              filter="DEVELOPMENT"
              style="--color: #3f1221"
              >Utvikling</miles-button
            >
          </li>
        </ul>
      </div>
      <section class="cv-filter">
        <miles-profile-card
          name="Agne Kriviciute"
          location="Komponent Vilnius"
          jobtitle="Test position"
          image=""
          email="agne.kriviciute@komponent.no"
          phone=""
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Aidas Šimkus"
          location="Komponent Vilnius"
          jobtitle="Senior Software Engineer"
          image=""
          email="aidas.simkus@komponent.no"
          phone=""
          roles="DEVELOPMENT"
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Aldona Čepliejūtė"
          location="Komponent Vilnius"
          jobtitle="UX/UI Designer"
          image=""
          email="aldona.cepliejute@komponent.no"
          phone="+37061210819"
          roles="DEVELOPMENT,DESIGN"
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Aleksander Akerø"
          location="Stavanger"
          jobtitle="Senior konsulent"
          image=""
          email="aleksander.akero@miles.no"
          phone="94489054"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Alexander Benjamin Asplund"
          location="Oslo"
          jobtitle="Konsulent"
          image=""
          email="alex.asplund@miles.no"
          phone="95187092"
          roles="DEVELOPMENT,DATA_SCIENCE"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Alexander Istad Funch"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="alexander.funch@miles.no"
          phone="91128799"
          roles="ADVISORY,AGILE"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Alfonso Martínez del Hoyo Canterla"
          location="Oslo"
          jobtitle="Senior Data Scientist"
          image=""
          email="alfonso.canterla@miles.no"
          phone="+47 97624304"
          roles="DATA_SCIENCE,ARCHITECTURE"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Anders Grinde"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="anders.grinde@miles.no"
          phone="48007974"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Anders Lima"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="anders.lima@miles.no"
          phone="92424995"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Andreas Aase"
          location="Komponent Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="andreas.aase@komponent.no"
          phone="45270779"
          roles="DEVELOPMENT"
          officeid="61a9cacadffdc2114f4f4c5b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Andreas Burkeland"
          location="Trondheim"
          jobtitle=""
          image=""
          email="andreas.burkeland@miles.no"
          phone=""
          roles=""
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Andreas Hage Storlien"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="andreas.storlien@miles.no"
          phone="41305872"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Andreas Johansen"
          location="Komponent Bergen"
          jobtitle="Senior Utvikler"
          image=""
          email="andreas.johansen@miles.no"
          phone="99749434"
          roles=""
          officeid="61a9cacadffdc2114f4f4c5b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Andrius Skučas"
          location="Komponent Vilnius"
          jobtitle="Senior Front-end engineer"
          image=""
          email="andrius.skucas@komponent.no"
          phone="+37068983632"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="André Bellefine Lindeløff"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="andre.lindeloff@miles.no"
          phone="+4793887997"
          roles="DEVELOPMENT"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="André Fagerlie Aronsen"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="andre.aronsen@miles.no"
          phone="40610588"
          roles="DEVELOPMENT"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Ann Kristin Haveland"
          location="Bergen"
          jobtitle=""
          image=""
          email="ann.kristin.haveland@miles.no"
          phone=""
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Anne Cecilie Heie"
          location="Oslo"
          jobtitle="Rådgiver"
          image=""
          email="anne.heie@miles.no"
          phone="+4795230885"
          roles="ADVISORY,PROJECT_MANAGEMENT"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Anne Elise Weiss"
          location="Bergen"
          jobtitle="Konsulent"
          image=""
          email="anneli.weiss@miles.no"
          phone="99228752"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Annika R. Fjeldstad"
          location="Oslo"
          jobtitle="HR og rekruttering"
          image=""
          email="annika.fjeldstad@miles.no"
          phone="+47 400 00 140"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Anny Marit Svendsen"
          location="Trondheim"
          jobtitle="Seniorkonsulent"
          image=""
          email="anny.marit.svendsen@miles.no"
          phone="93224901"
          roles="DEVELOPMENT"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Arild Strømhylden"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="arild.stromhylden@miles.no"
          phone="90727453"
          roles="PROJECT_MANAGEMENT"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Arnfinn Sandnes"
          location="Oslo"
          jobtitle="Senior Konsulent"
          image=""
          email="arnfinn.sandnes@miles.no"
          phone="41521543"
          roles="DEVELOPMENT,ARCHITECTURE"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Arturo Opsetmoen Amador"
          location="Oslo"
          jobtitle="ML Engineer"
          image=""
          email="arturo.amador@miles.no"
          phone="45492369"
          roles="DATA_SCIENCE"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Artūras Radzevičius"
          location="Komponent Vilnius"
          jobtitle="DevOps Architect"
          image=""
          email="arturas.radzevicius@komponent.no"
          phone="+37067122213"
          roles="ARCHITECTURE"
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Arve Søreide"
          location="Oslo"
          jobtitle="Rådgiver - Coach - Product Management for Hire"
          image=""
          email="arve.soreide@miles.no"
          phone="410 30 033"
          roles="ADVISORY,ARCHITECTURE,AGILE"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Arvid Sallaup"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="arvid.sallaup@miles.no"
          phone="97763516"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Arvydas Maciulis"
          location="Komponent Vilnius"
          jobtitle="DevOps engineer"
          image=""
          email="arvydas.maciulis@komponent.no"
          phone="'+37060191510"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Arvydas Mačiulis"
          location="Komponent Vilnius"
          jobtitle="DevOps engineer"
          image=""
          email="arvydas.maciulis@miles.no"
          phone="+37060191510"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Asgeir Storesund Nilsen"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="asgeir.nilsen@miles.no"
          phone="48402217"
          roles="ADVISORY,ARCHITECTURE"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Ask Juhl Markestad"
          location="Oslo"
          jobtitle="Data Scientist / Data Engineer"
          image=""
          email="ask.markestad@miles.no"
          phone="90870479"
          roles="DATA_SCIENCE"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Augustinas Grikis"
          location="Komponent Vilnius"
          jobtitle="Software developer"
          image=""
          email="augustinas.grikis@komponent.no"
          phone="+37062962830"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Aurimas Jankauskas"
          location="Komponent Kaunas"
          jobtitle="Senior software engineer"
          image=""
          email="aurimas.jankauskas@komponent.no"
          phone="+37067017397"
          roles=""
          officeid="61a9cab79134b2111ea0c34f"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Benedicte Selmer"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="benedicte.selmer@miles.no"
          phone="909 95 893"
          roles="PROJECT_MANAGEMENT,ARCHITECTURE"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Benjamin Antmark"
          location="Oslo"
          jobtitle="Senior Konsulent"
          image=""
          email="benjamin.antmark@miles.no"
          phone="46692359"
          roles="DEVELOPMENT"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Bjørn Asle Taranger"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="bjorn.asle.taranger@miles.no"
          phone="90928242"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Bjørn Nordgulen"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="bjorn.nordgulen@miles.no"
          phone="91 71 77 43"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Bjørn Wigdel"
          location="Stavanger"
          jobtitle="Prosjektleder"
          image=""
          email="bjorn.wigdel@miles.no"
          phone="91612448"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Borghild Selle"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="borghild.vikoyr@miles.no"
          phone="90243528"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Bradley T. Hughes"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="bradley.hughes@miles.no"
          phone="+4792019781"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Brent Field"
          location="Komponent Vilnius"
          jobtitle="Software Developer"
          image=""
          email="brent.field@komponent.no"
          phone="+447779294715"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Brigita Vileikyte"
          location="Komponent Kaunas"
          jobtitle=".NET Software developer"
          image=""
          email="brigita.vileikyte@komponent.no"
          phone=""
          roles=""
          officeid="61a9cab79134b2111ea0c34f"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Brynjar Steinbakk Ulriksen"
          location="Bergen"
          jobtitle="Fullstack-utvikler"
          image=""
          email="brynjar.ulriksen@miles.no"
          phone="47667861"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Camilla Amundsen"
          location="Miles AS"
          jobtitle="Konserntjener"
          image=""
          email="camilla.amundsen@miles.no"
          phone="+47 995 06 281"
          roles=""
          officeid="64808d93b0b97b0f42e62434"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Caroline Gannefors"
          location="Komponent Bergen"
          jobtitle="Team Lead &amp; Senior UX-designer"
          image=""
          email="caroline.gannefors@miles.no"
          phone="93496714"
          roles=""
          officeid="61a9cacadffdc2114f4f4c5b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Christian Høe"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="christian.hoe@miles.no"
          phone="98257883"
          roles="DEVELOPMENT,ARCHITECTURE"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Christian Mesloe Skaiaa"
          location="Trondheim"
          jobtitle="Seniorutvikler"
          image=""
          email="christian.skaiaa@miles.no"
          phone="91712234"
          roles="DEVELOPMENT"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Clemente Isager"
          location="Komponent Bergen"
          jobtitle="Salgs og forretningsutvikling"
          image=""
          email="clementine.isager@miles.no"
          phone="+47 922 94 756"
          roles=""
          officeid="61a9cacadffdc2114f4f4c5b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Dag Erik Løvgren"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="dag.erik.lovgren@miles.no"
          phone="97416110"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Daniel Bratteli"
          location="Stavanger"
          jobtitle="Salg og Forretningsutvikler"
          image=""
          email="daniel.bratteli@miles.no"
          phone="+47 954 00 728"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Daniel Selvik"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="daniel.selvik@miles.no"
          phone="97482188"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Daniel Tandberg Abrahamsen"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="daniel.abrahamsen@miles.no"
          phone="99359912"
          roles="DEVELOPMENT"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Daniel Wenner"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="daniel.wenner@miles.no"
          phone="91156191"
          roles="DEVELOPMENT"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="David Wall"
          location="Komponent Vilnius"
          jobtitle="Miles TaaS"
          image=""
          email="david.wall@miles.no"
          phone=""
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Dmitry Filonenko"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="dmitry.filonenko@miles.no"
          phone="48672748"
          roles="DEVELOPMENT"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Dovydas Pėkus"
          location="Komponent Vilnius"
          jobtitle="Software Engineer"
          image=""
          email="dovydas.pekus@komponent.no"
          phone="+37060354963"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Egil Bru"
          location="Stavanger"
          jobtitle="Konsulent"
          image=""
          email="egil.bru@miles.no"
          phone="47629626"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Eirik Brænd"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="eirik.brend@miles.no"
          phone="93421902"
          roles="DEVELOPMENT,ARCHITECTURE"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Eivind Lervik"
          location="Bergen"
          jobtitle="Backend-utvikler"
          image=""
          email="eivind.lervik@miles.no"
          phone="95444677"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Eivind Sørbø"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="eivind.sorbo@miles.no"
          phone="41638996"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Eivinn Hustveit"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="eivinn.hustveit@miles.no"
          phone="+47 977 77 594"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Erlend Skarpnes"
          location="Trondheim"
          jobtitle="Utvikler"
          image=""
          email="erlend.skarpnes@miles.no"
          phone="48189090"
          roles="DEVELOPMENT"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Espen Helmersen"
          location="Trondheim"
          jobtitle="Seniorkonsulent"
          image=""
          email="espen.helmersen@miles.no"
          phone="99103042"
          roles="DEVELOPMENT"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Espen Norderud"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="espen.norderud@miles.no"
          phone="99749888"
          roles="DEVELOPMENT"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Fredrik Bore"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="fredrik.bore@miles.no"
          phone="93687898"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Fredrik Lorentzen"
          location="Miles AS"
          jobtitle="Finanstjener"
          image=""
          email="fredrik.lorentzen@miles.no"
          phone="+47 993 61 663"
          roles=""
          officeid="64808d93b0b97b0f42e62434"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Fredrik Wigsnes"
          location="Stavanger"
          jobtitle="Konsulent"
          image=""
          email="fredrik.wigsnes@miles.no"
          phone="98889368"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Frode Nergård"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="frode.nergard@miles.no"
          phone="+47 91887578"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Geir Stene"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="geir.stene@miles.no"
          phone="48261153"
          roles="PROJECT_MANAGEMENT"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Geir Wavik"
          location="Oslo"
          jobtitle="Leder for teknologi og innovasjon"
          image=""
          email="geir.wavik@miles.no"
          phone="90265827"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Gerd Stalheim Wiggen"
          location="Oslo"
          jobtitle="Seniorkonsulent/Testleder"
          image=""
          email="gerd.wiggen@miles.no"
          phone="99274088"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Gerhard Holen Melseth"
          location="Ålesund"
          jobtitle="Seniorkonsulent"
          image=""
          email="gerhard.melseth@miles.no"
          phone="99748966"
          roles=""
          officeid="635789bd6857c00fd739243d"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Giedrius Kripaitis"
          location="Komponent Kaunas"
          jobtitle="Software Engineer"
          image=""
          email="giedrius.kripaitis@komponent.no"
          phone="+37062045812"
          roles=""
          officeid="61a9cab79134b2111ea0c34f"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Gorm-Erik Aarsheim"
          location="Stavanger"
          jobtitle="Konsulent"
          image=""
          email="gorm.aarsheim@miles.no"
          phone="47620558"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Greta Gedvilienė"
          location="Komponent Vilnius"
          jobtitle="QA | BA | TL"
          image=""
          email="greta.gedviliene@komponent.no"
          phone=""
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Gudsteinn Arnarson"
          location="Stavanger"
          jobtitle="Konsulent"
          image=""
          email="gudsteinn.arnarson@miles.no"
          phone="46421640"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Guro Schou Nordengen"
          location="Oslo"
          jobtitle="Funksjonell arkitekt og informasjonsarkitekt"
          image=""
          email="guro.nordengen@miles.no"
          phone="93495815"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Gøran Skeie Ellingsen"
          location="Komponent Vilnius"
          jobtitle="Project Director"
          image=""
          email="goran.skeie.ellingsen@miles.no"
          phone="+4792867696"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Hans Petter Simonsen"
          location="Oslo"
          jobtitle="Senior Konsulent"
          image=""
          email="hans.petter.simonsen@miles.no"
          phone="95949520"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Harald Thune"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="harald.thune@miles.no"
          phone="45254005"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Henriette Christensen"
          location="Trondheim"
          jobtitle="UX-designer og front-av-frontend-utvikler"
          image=""
          email="henriette.christensen@miles.no"
          phone="95813254"
          roles="DEVELOPMENT,DESIGN"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Henrik Haukaas"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="henrik.haukaas@miles.no"
          phone="47874725"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Henrik Hermansen"
          location="Oslo"
          jobtitle=""
          image=""
          email="henrik.hermansen@miles.no"
          phone="98086206"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Henrik Steen"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="henrik.steen@miles.no"
          phone="41620292"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Henry Sjøen"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="henry.sjoen@miles.no"
          phone="984 36 185"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Herjus Risbakken"
          location="Stavanger"
          jobtitle="Senior Konsulent"
          image=""
          email="herjus.risbakken@miles.no"
          phone="99730373"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Hilde Husevåg"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="hilde.husevag@miles.no"
          phone="95271953"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Hildegunn Hagen"
          location="Stavanger"
          jobtitle="Salg og forretningsutvikling"
          image=""
          email="hildegunn.hagen@miles.no"
          phone="+47 922 11 055"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Hosna Arzani Larsen"
          location="Oslo"
          jobtitle="Salg og forretningsutvikling"
          image=""
          email="hosna.larsen@miles.no"
          phone="+47 926 48 861"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Håkan Silfvernagel"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="hakan.silfvernagel@miles.no"
          phone="46418340"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Håvard Engum"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="havard.engum@miles.no"
          phone="48011379"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Håvard Haug"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="havard.haug@miles.no"
          phone="412 11 358"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Ida Kjær"
          location="Oslo"
          jobtitle="Smidig tjener"
          image=""
          email="ida.kjar@miles.no"
          phone=""
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Ieva Pakėnaitė"
          location="Komponent Vilnius"
          jobtitle="Front End Developer"
          image=""
          email="ieva.pakenaite@komponent.no"
          phone="'+37068510443"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Igoris Azanovas"
          location="Komponent Vilnius"
          jobtitle="Software architect"
          image=""
          email="igoris.azanovas@komponent.no"
          phone=""
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Ingrid Lindaas"
          location="Haugesund"
          jobtitle="Avdelingstjener Miles Haugesund"
          image=""
          email="ingrid.lindaas@miles.no"
          phone="40021573"
          roles=""
          officeid="6452624096588f0f836d19a3"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Irene Mjelde"
          location="Ålesund"
          jobtitle="Daglig Tjener"
          image=""
          email="irene.mjelde@miles.no"
          phone="+47 90017771"
          roles=""
          officeid="635789bd6857c00fd739243d"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Jan Gunnar Helgaland"
          location="Stavanger"
          jobtitle="Prosjekt &amp; Endringsleder"
          image=""
          email="jan.gunnar.helgaland@miles.no"
          phone="95262936"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Jan-Helge Bergesen"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="jan-helge.bergesen@miles.no"
          phone="+4797516690"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Janne Rødsand Helling"
          location="Trondheim"
          jobtitle="Daglig tjener Miles Trondheim"
          image=""
          email="janne.helling@miles.no"
          phone="+47 915 44 412"
          roles=""
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Janne Syversen"
          location="Miles AS"
          jobtitle="Pressekontakt / markedstjener"
          image=""
          email="janne.syversen@miles.no"
          phone="+47 468 26 082"
          roles=""
          officeid="64808d93b0b97b0f42e62434"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Jarle Friestad"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="jarle.friestad@miles.no"
          phone="48019902"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Jarle Salhus Eriksen"
          location="Haugesund"
          jobtitle="Senior prosjektleder"
          image=""
          email="jarle.s.eriksen@miles.no"
          phone="97476670"
          roles=""
          officeid="6452624096588f0f836d19a3"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Jaunius Pisaravičius"
          location="Komponent Vilnius"
          jobtitle="Lead developer"
          image=""
          email="jaunius.pisaravicius@komponent.no"
          phone="'+37065228470"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Jayne Burdeshaw"
          location="Oslo"
          jobtitle="Testleder"
          image=""
          email="jayne.burdeshaw@miles.no"
          phone="41848994"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Jean Richard Løvaas"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="jean.richard.lovaas@miles.no"
          phone="91335701"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Jens Hittenkofer"
          location="Haugesund"
          jobtitle="Seniorkonsulent"
          image=""
          email="jens.hittenkofer@miles.no"
          phone="+4740760042"
          roles=""
          officeid="6452624096588f0f836d19a3"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Joep Lijnen"
          location="Haugesund"
          jobtitle="Seniorkonsulent"
          image=""
          email="joep.lijnen@miles.no"
          phone="48480553"
          roles=""
          officeid="6452624096588f0f836d19a3"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Johanna Kinstad"
          location="Trondheim"
          jobtitle="Frontend-utvikler"
          image=""
          email="johanna.kinstad@miles.no"
          phone="91316568"
          roles="DEVELOPMENT,DATA_SCIENCE"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="John St. Clair"
          location="Oslo"
          jobtitle="Sr. Developer/Architect"
          image=""
          email="john.stclair@miles.no"
          phone="40550780"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Jon-Gunnar Aasen"
          location="Oslo"
          jobtitle="CEO / Daglig tjener Miles Oslo"
          image=""
          email="jon-gunnar.aasen@miles.no"
          phone="92094767"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Jon-Håkon Bøe Røli"
          location="Bergen"
          jobtitle="Utviker"
          image=""
          email="jon.roli@miles.no"
          phone="45022920"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Jonatan Hoff"
          location="Trondheim"
          jobtitle="Konsulent"
          image=""
          email="jonatan.hoff@miles.no"
          phone="99267362"
          roles="DEVELOPMENT"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Jone Lura"
          location="Stavanger"
          jobtitle="Senior Konsulent"
          image=""
          email="jone.lura@miles.no"
          phone="90974040"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Joseph Sterling Grah"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="joseph.sterling.grah@miles.no"
          phone="95104669"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Julian P. M. Ertel"
          location="Bergen"
          jobtitle="Utvikler"
          image=""
          email="julian.ertel@miles.no"
          phone="950 04 430"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Justas Tamosaitis"
          location="Komponent Kaunas"
          jobtitle="Senior software engineer"
          image=""
          email="justas.tamosaitis@komponent.no"
          phone=""
          roles=""
          officeid="61a9cab79134b2111ea0c34f"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Justinas Černiauskas"
          location="Komponent Vilnius"
          jobtitle="Software Engineer"
          image=""
          email="justinas.cerniauskas@komponent.no"
          phone=""
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Jørgen Baardsen"
          location="Oslo"
          jobtitle="Kommersiell tjener/ CCO"
          image=""
          email="jorgen.baardsen@miles.no"
          phone="95144636"
          roles="ADVISORY"
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Kamilla Emilie Davidsen"
          location="Stavanger"
          jobtitle="UX Designer "
          image=""
          email="kamilla.emilie.davidsen@miles.no"
          phone="91876404"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Kamilla Nyborg Gregertsen"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="kamilla.nyborg@miles.no"
          phone="95176232"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Karl Olav Nordengeng"
          location="Miles AS"
          jobtitle="CEO / Daglig Tjener Innlandet"
          image=""
          email="karl.olav.nordengen@miles.no"
          phone="97071326"
          roles=""
          officeid="64808d93b0b97b0f42e62434"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Karoline Erstad Raudstein"
          location="Bergen"
          jobtitle="UX designer"
          image=""
          email="karoline.raudstein@miles.no"
          phone="938 93 900"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Karsten Holth"
          location="Oslo"
          jobtitle="Seniorrådgiver og -konsulent"
          image=""
          email="karsten.holth@miles.no"
          phone="99629868"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Kate Henriksen"
          location="Bergen"
          jobtitle="Daglig tjener Miles Bergen"
          image=""
          email="kate.henriksen@miles.no"
          phone="+47 951 15 159"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Ken-Thomas Nilsen"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="ken.nilsen@miles.no"
          phone="48131863"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Kenneth Røkke"
          location="Trondheim"
          jobtitle="Teknisk prosjektleder / Løsningsarkitekt"
          image=""
          email="kenneth.rokke@miles.no"
          phone="95085370"
          roles="PROJECT_MANAGEMENT"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Kim Frostad Røen"
          location="Bergen"
          jobtitle="Senior konsulent"
          image=""
          email="kim.roen@miles.no"
          phone="+47 41 54 48 79"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Kim Long Vu"
          location="Oslo"
          jobtitle="Konsulent"
          image=""
          email="kim.vu@miles.no"
          phone="95180574"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Kjartan Juvik"
          location="Bergen"
          jobtitle="Leder Salg og forretningsutvikling"
          image=""
          email="kjartan.juvik@miles.no"
          phone="+4793053965"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Kjersti Fagerholt"
          location="Trondheim"
          jobtitle="Utvikler"
          image=""
          email="kjersti.fagerholt@miles.no"
          phone="90150509"
          roles="DEVELOPMENT"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Kjetil W. Husebø"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="kjetil.husebo@miles.no"
          phone="90617303"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Knut Einar Moldekleiv"
          location="Bergen"
          jobtitle="Seniorkonsulent "
          image=""
          email="knut.moldekleiv@miles.no"
          phone="91775996"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Knut T. Hufthammer"
          location="Komponent Bergen"
          jobtitle="Utvikler"
          image=""
          email="knut.hufthammer@miles.no"
          phone="95412369"
          roles=""
          officeid="61a9cacadffdc2114f4f4c5b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Krister Vindenes"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="krister.vindenes@miles.no"
          phone="91557242"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Kristian Hiim"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="kristian.hiim@miles.no"
          phone="40643901"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Kristine Tveit"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="kristine.tveit@miles.no"
          phone="93830025"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Kristoffer Marthinsen"
          location="Stavanger"
          jobtitle="Konsulent"
          image=""
          email="kristoffer.marthinsen@miles.no"
          phone="41637950"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Kurt André Askeland"
          location="Stavanger"
          jobtitle="Salg, rekruttering og forretningsutvikling"
          image=""
          email="kurt.andre.askeland@miles.no"
          phone="+47 900 66 490"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Kåre Laukli"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="kare.laukli@miles.no"
          phone="+47 93204661"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Lars Eirik Danielsen"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="lars.eirik.danielsen@miles.no"
          phone="97655280"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Lars Gunnar Lundestad"
          location="Oslo"
          jobtitle="Senior rådgiver"
          image=""
          email="lars.gunnar.lundestad@miles.no"
          phone="+47 407 21 019"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Lars Vegard"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="lars.vegard@miles.no"
          phone="907 25 309"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Leiv Halvor Lauvsnes"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="leiv.halvor.lauvsnes@miles.no"
          phone="48027833"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Ligia Leombruno Rekkedal"
          location="Stavanger"
          jobtitle="Senior konsulent"
          image=""
          email="ligia.leombruno@miles.no"
          phone="46613242"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Linas Sinkunas"
          location="Komponent Vilnius"
          jobtitle=""
          image=""
          email="linas.sinkunas@komponent.no"
          phone="'+37062806224"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Linn Siri Overaae"
          location="Trondheim"
          jobtitle="Relasjonsbygger"
          image=""
          email="linn.siri.overaae@miles.no"
          phone="90093292"
          roles=""
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Long Cui"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="long.cui@miles.no"
          phone="+4790970927"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Lukas Juodikis"
          location="Komponent Vilnius"
          jobtitle="Senior UX designer"
          image=""
          email="lukas.juodikis@komponent.no"
          phone="+37067821055"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Mads Tordal"
          location="Haugesund"
          jobtitle="Seniorkonsulent"
          image=""
          email="mads.tordal@miles.no"
          phone="91776389"
          roles=""
          officeid="6452624096588f0f836d19a3"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Magnulf Pilskog"
          location="Miles AS"
          jobtitle="Teknologitjener"
          image=""
          email="magnulf.pilskog@miles.no"
          phone="+47 975 97 978"
          roles=""
          officeid="64808d93b0b97b0f42e62434"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Magnus Vadøy"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="magnus.vadoy@miles.no"
          phone="46886881"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Mahdi Islam"
          location="Komponent Bergen"
          jobtitle="Senior Developer"
          image=""
          email="mahdi.islam@miles.no"
          phone="90272085"
          roles=""
          officeid="61a9cacadffdc2114f4f4c5b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Malin Jakobsen"
          location="Bergen"
          jobtitle="Konsulent"
          image=""
          email="malin.jakobsen@miles.no"
          phone="91770018"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Marianne Johansen"
          location="Oslo"
          jobtitle="Prosjektleder"
          image=""
          email="marianne.johansen@miles.no"
          phone="95300166"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Marius Sørensen"
          location="Stavanger"
          jobtitle="Konsulent"
          image=""
          email="marius.sorensen@miles.no"
          phone="90912359"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Markas Gedminas"
          location="Komponent Vilnius"
          jobtitle="Senior Technical Lead"
          image=""
          email="markas.gedminas@komponent.no"
          phone="+37068513960"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Martin Burheim Tingstad"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="martin.burheim.tingstad@miles.no"
          phone="90551468"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Martin Hebnes Pedersen"
          location="Bergen"
          jobtitle="Utvikler"
          image=""
          email="martin.h.pedersen@miles.no"
          phone=""
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Martin Markman"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="martin.markman@miles.no"
          phone="97678420"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Martynas Mikalajūnas"
          location="Komponent Vilnius"
          jobtitle="Senior Software Engineer"
          image=""
          email="martynas.mikalajunas@komponent.no"
          phone="+37069964970"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Mathias Ciarlo Thorstensen"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="mathias.thorstensen@miles.no"
          phone="924 06 268"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Mauricio Londono"
          location="Stavanger"
          jobtitle="Prosjektleder"
          image=""
          email="mauricio.londono@miles.no"
          phone="91380857"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Mikael Kolkinn"
          location="Trondheim"
          jobtitle="Senior Utvikler"
          image=""
          email="mikael.kolkinn@miles.no"
          phone="97481292"
          roles="DEVELOPMENT"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Mikael Tysvær"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="mikael.tysvar@miles.no"
          phone="92200956"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Monica Wenaas"
          location="Oslo"
          jobtitle="Senior Konsulent"
          image=""
          email="monica.wenaas@miles.no"
          phone="93045828"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Morten L. Holla"
          location="Oslo"
          jobtitle="Senior Prosjektleder"
          image=""
          email="morten.holla@miles.no"
          phone="+47 41690124"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Morten Salte"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="morten.salte@miles.no"
          phone="478 04 137"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Natalie Berg"
          location="Ålesund"
          jobtitle="Seniorutvikler"
          image=""
          email="natalie.berg@miles.no"
          phone="47271721"
          roles="DEVELOPMENT,ARCHITECTURE"
          officeid="635789bd6857c00fd739243d"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Natcha Nanthawisit"
          location="Oslo"
          jobtitle="Konsulent/ utvikler"
          image=""
          email="nanthawisit.natacha@gmail.com"
          phone="95906260"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Nichole Chiang"
          location="Stavanger"
          jobtitle="UX Designer"
          image=""
          email="nichole.chiang@miles.no"
          phone="96849108"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Nils Bøhmer Sjøberg"
          location="Oslo"
          jobtitle="Senior Konsulent"
          image=""
          email="nils.sjoberg@miles.no"
          phone="+47 410 01 111"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Nils Jørgen Mittet"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="nils.jorgen.mittet@miles.no"
          phone="48157834"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Nils Tjøstheim"
          location="Trondheim"
          jobtitle="Teknisk Prosjektleder / Utviklingsleder / Agile Coach"
          image=""
          email="nils.tjostheim@miles.no"
          phone="40202233"
          roles="PROJECT_MANAGEMENT,AGILE,TEST_MANAGEMENT"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Nina Børslien"
          location="Bergen"
          jobtitle="Senior Prosjektleder/Prosessleder"
          image=""
          email="nina.borslien@miles.no"
          phone="+47 480 35 303"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Nina Ripmann"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="nina.ripmann@miles.no"
          phone="+47 988 22 050"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Nour Alabbasi-Balcombe"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="nour.alabbasi@miles.no"
          phone="40601358"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Olav Gjerde"
          location="Ålesund"
          jobtitle="Seniorkonsulent"
          image=""
          email="olav.gjerde@miles.no"
          phone="+4792891201"
          roles="DEVELOPMENT"
          officeid="635789bd6857c00fd739243d"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Olav Loen"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="olav.loen@miles.no"
          phone="95758971"
          roles="ADVISORY,PROJECT_MANAGEMENT,AGILE,TEST_MANAGEMENT"
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Olav Rossøy"
          location="Trondheim"
          jobtitle="Arkitekt / Utvikler"
          image=""
          email="olav.rossoy@miles.no"
          phone=""
          roles="DEVELOPMENT,ARCHITECTURE"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Oleksandr Lebedynskyi"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="oleksandr.lebedynskyi@miles.no"
          phone="46823038"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Ove Jørgensen"
          location="Stavanger"
          jobtitle="Konsulent"
          image=""
          email="ove.kristian.jorgensen@miles.no"
          phone="91158933"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Paal Kristian Minne"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="paal.kristian.minne@miles.no"
          phone="99452966"
          roles="PROJECT_MANAGEMENT,DEVELOPMENT"
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Paulius Vilkaitis"
          location="Komponent Vilnius"
          jobtitle="Junior Software Engineer"
          image=""
          email="paulius.vilkaitis@komponent.no"
          phone="+37064335242"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Povilas Galčius"
          location="Komponent Vilnius"
          jobtitle="Software Engineer"
          image=""
          email="povilas.galcius@komponent.no"
          phone="+37063917863"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Povilas Žvirblis"
          location="Komponent Vilnius"
          jobtitle="Team Lead/Senior Software Engineer"
          image=""
          email="povilas.zvirblis@komponent.no"
          phone="+37062488676"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Prakash Prasad"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="prakash.prasad@miles.no"
          phone="94263344"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Pär Wiger"
          location="Bergen"
          jobtitle="Kompetanseansvarlig"
          image=""
          email="par.wiger@miles.no"
          phone="+47-970 18 827"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Quentin Lauv"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="quentin.lauv@miles.no"
          phone=""
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Randi Ulleland Rø"
          location="Oslo"
          jobtitle="Funksjonell arkitekt"
          image=""
          email="randi.ro@miles.no"
          phone="+47 90516335"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Rashid Sultan"
          location="Oslo"
          jobtitle="Senior konsulent"
          image=""
          email="rashid.sultan@miles.no"
          phone="93851937"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Renata Šulekauskė"
          location="Komponent Vilnius"
          jobtitle="ODM"
          image=""
          email="renata.sulekauske@komponent.no"
          phone=""
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Richard Haugen Olsen"
          location="Bergen"
          jobtitle="Konsulent"
          image=""
          email="richard.haugen.olsen@miles.no"
          phone="92077881"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Roar Frantsvåg"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="roar.frantsvag@miles.no"
          phone="91880098"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Roar Nikolay Ytre-Eide"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="roar.ytreeide@miles.no"
          phone="952 30 508"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Robert Waagbø"
          location="Bergen"
          jobtitle="UX / UI designer"
          image=""
          email="robert.waagbo@miles.no"
          phone="40763307"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Robertas Rutkauskas"
          location="Komponent Vilnius"
          jobtitle="Senior software engineer"
          image=""
          email="robertas.rutkauskas@komponent.no"
          phone="+37067469460"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Roger Westerbø"
          location="Trondheim"
          jobtitle="Senior dataingeniør"
          image=""
          email="roger.westerbo@miles.no"
          phone="92080377"
          roles="DEVELOPMENT"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Rohnny Moland"
          location="Stavanger"
          jobtitle="Senior konsulent"
          image=""
          email="rohnny.moland@miles.no"
          phone="98625548"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Rolf Jacob Dramdal"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="rolf.dramdal@miles.no"
          phone="47305228"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Romas Čebis"
          location="Komponent Vilnius"
          jobtitle="Software Architect"
          image=""
          email="romas.cebis@komponent.no"
          phone="'+370 610 37105"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Ronny Njaastad"
          location="Bergen"
          jobtitle="Senior Utvikler"
          image=""
          email="ronny.njaastad@miles.no"
          phone="+4790066303"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Rune Forberg"
          location="Oslo"
          jobtitle=""
          image=""
          email="rune.forberg@miles.no"
          phone="40041142"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Saulius Petrauskas"
          location="Komponent Vilnius"
          jobtitle="Team Lead / Test Lead"
          image=""
          email="saulius.petrauskas@komponent.no"
          phone=""
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Sergejus Bartoš"
          location="Komponent Vilnius"
          jobtitle="Senior Business Analyst / Senior Test Analyst"
          image=""
          email="sergejus.bartos@komponent.no"
          phone="+37068730277"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Shangavi Logeswaran"
          location="Bergen"
          jobtitle="Konsulent"
          image=""
          email="shangavi.logeswaran@miles.no"
          phone="97386341"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Shimin Sun"
          location="Trondheim"
          jobtitle="Utvikler"
          image=""
          email="shimin.sun@miles.no"
          phone="47670467"
          roles="DEVELOPMENT"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Sigita Stanynaitė"
          location="Komponent Vilnius"
          jobtitle="Software Engineer"
          image=""
          email="sigita.stanynaite@komponent.no"
          phone="+37069015122"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Sigurd Gimre"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="sigurd.gimre@miles.no"
          phone="92801294"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Sigurd Grøneng"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="sigurd.groneng@miles.no"
          phone="97090975"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Simas Kižys"
          location="Komponent Vilnius"
          jobtitle="Senior Software engineer"
          image=""
          email="simas.kizys@komponent.no"
          phone="+37063462324"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Simon Degen"
          location="Bergen"
          jobtitle="Konsulent"
          image=""
          email="simon.degen@miles.no"
          phone="48263325"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Sindre Vatnaland"
          location="Stavanger"
          jobtitle="Konsulent"
          image=""
          email="sindre.vatnaland@miles.no"
          phone="46473802"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Sondre Lefsaker"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="sondre.lefsaker@miles.no"
          phone="476 56 837"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Steffen Skarås"
          location="Stavanger"
          jobtitle="Konsulent"
          image=""
          email="steffen.skaras@miles.no"
          phone="47258792"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Steinar Dragsnes"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="steinar.dragsnes@miles.no"
          phone="+47 91361021"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Stian Grønås"
          location="Stavanger"
          jobtitle="Konsulent"
          image=""
          email="stian.gronas@miles.no"
          phone="94974842"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Stian Sanden Skauge"
          location="Bergen"
          jobtitle="Seniorkunsulent"
          image=""
          email="stian.skauge@miles.no"
          phone="41649239"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Stig Atle Freitag"
          location="Ålesund"
          jobtitle="Seniorkonsulent"
          image=""
          email="stig.atle.freitag@miles.no"
          phone="97704442"
          roles=""
          officeid="635789bd6857c00fd739243d"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Stig Ottosen"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="stig.ottosen@miles.no"
          phone="+47 90991967"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Stine Gran Gabrielsen"
          location="Trondheim"
          jobtitle="Admin/økad"
          image=""
          email="stine.gran@miles.no"
          phone="99492020"
          roles=""
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Svein Ormel"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="svein.ormel@miles.no"
          phone="92866930"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Sveinung Sande Dalatun"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="sveinung.dalatun@miles.no"
          phone="41552866"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Sverre Thommesen"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="sverre.thommesen@miles.no"
          phone="924 926 05"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Sören Krum"
          location="Trondheim"
          jobtitle="Utvikler / Arkitekt"
          image=""
          email="soren.krum@miles.no"
          phone="94422574"
          roles="DEVELOPMENT"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Tadas Bilevičius"
          location="Komponent Vilnius"
          jobtitle="Senior software engineer"
          image=""
          email="tadas.bilevicius@komponent.no"
          phone=""
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Taurintas Kudirka"
          location="Komponent Kaunas"
          jobtitle="Software Engineer"
          image=""
          email="taurintas.kudirka@komponent.no"
          phone="+37065393060"
          roles=""
          officeid="61a9cab79134b2111ea0c34f"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Teis Lindemark"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="teis.lindemark@miles.no"
          phone="920 82 839"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Terje Olsøybakk"
          location="Trondheim"
          jobtitle="Senior fullstack-utvikler"
          image=""
          email="terje.olsoybakk@miles.no"
          phone="45404652"
          roles="DEVELOPMENT"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Thomas Bærheim"
          location="Stavanger"
          jobtitle="CEO/Rådgiver"
          image=""
          email="thomas.barheim@miles.no"
          phone="94156350"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Thomas Fauskanger"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="thomas.fauskanger@miles.no"
          phone="+4741564696"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Thomas Heritier"
          location="Komponent Bergen"
          jobtitle="Utvikler"
          image=""
          email="thomas.heritier@miles.no"
          phone="91118793"
          roles=""
          officeid="61a9cacadffdc2114f4f4c5b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Thomas Storm Dahl"
          location="Stavanger"
          jobtitle="Prosjektleder &amp; Forretningsutvikler"
          image=""
          email="thomas.storm.dahl@miles.no"
          phone="98111958"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Thomas Thorbjørnsen"
          location="Komponent Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="thomas.thorbjornsen@miles.no"
          phone="93491309"
          roles=""
          officeid="61a9cacadffdc2114f4f4c5b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Thor Halvor Frivold"
          location="Trondheim"
          jobtitle="Seniorkonsulent"
          image=""
          email="thor.halvor.frivold@miles.no"
          phone="91557813"
          roles="DEVELOPMENT,ARCHITECTURE"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Thorfinn Sørensen"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="thorfinn.sorensen@miles.no"
          phone="40636737"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Tomas Teleiša"
          location="Komponent Vilnius"
          jobtitle="Chief Technology Officer"
          image=""
          email="tomas.teleisa@komponent.no"
          phone=""
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Tor-Erik Hauge"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="tor-erik.hauge@miles.no"
          phone="+4747753527"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Tor-Inge Jenssen"
          location="Komponent Bergen"
          jobtitle=""
          image=""
          email="tor.inge.jenssen@komponent.no"
          phone="40495070"
          roles=""
          officeid="61a9cacadffdc2114f4f4c5b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Torstein Sandaa-Johansen"
          location="Bergen"
          jobtitle=""
          image=""
          email="torstein.sandaa@miles.no"
          phone=""
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Torstein Taksdal"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="torstein.taksdal@miles.no"
          phone="99277148"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Trond Eskeland"
          location="Stavanger"
          jobtitle="Seniorkonsulent"
          image=""
          email="trond.eskeland@miles.no"
          phone="41617247"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Unni Tran-Thorsen"
          location="Oslo"
          jobtitle="Seniorkonsulent "
          image=""
          email="unni.tran-thorsen@miles.no"
          phone="95938740"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Vagif Abilov"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="vagif.abilov@miles.no"
          phone="92821221"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Valdemaras Ziezys"
          location="Komponent Vilnius"
          jobtitle="Software Engineer"
          image=""
          email="valdemaras.ziezys@komponent.no"
          phone="+37061874532"
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Valentas Milčius"
          location="Komponent Vilnius"
          jobtitle="Software Architect"
          image=""
          email="valentas.milcius@komponent.no"
          phone=""
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Vegard Dehlen"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="vegard.dehlen@miles.no"
          phone="97691099"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Vegard Eldøen"
          location="Ålesund"
          jobtitle="Senior Rådgiver"
          image=""
          email="vegard.eldoen@miles.no"
          phone="90574916"
          roles="ADVISORY,PROJECT_MANAGEMENT,AGILE"
          officeid="635789bd6857c00fd739243d"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Vegard Holter"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="vegard.holter@miles.no"
          phone="95750649"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Vegard Smedsvik"
          location="Bergen"
          jobtitle="Frontend-utvikler"
          image=""
          email="vegard.smedsvik@miles.no"
          phone="47965007"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Vermund Vedøy"
          location="Bergen"
          jobtitle="Seniorkunsulent"
          image=""
          email="vermund.vedoy@miles.no"
          phone="97177746"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Vidar Vevik"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="vidar.vevik@miles.no"
          phone="92610819"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Vilius Pankauskas"
          location="Komponent Vilnius"
          jobtitle="IT Security Architect"
          image=""
          email="vilius.pankauskas@komponent.no"
          phone=""
          roles=""
          officeid="61a733d488c4af000178107e"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Vladimir Civilgins"
          location="Komponent Bergen"
          jobtitle="Junior Utvikler"
          image=""
          email="vladimir.civilgins@komponent.no"
          phone="+4748642470"
          roles=""
          officeid="61a9cacadffdc2114f4f4c5b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Vladimirs Civilgins"
          location="Bergen"
          jobtitle="Junior Utvikler"
          image=""
          email="vladimirs.civilgins@miles.no"
          phone="+4748642470"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Wenche Aarøen"
          location="Trondheim"
          jobtitle="UX-designer / Tjenestedesigner"
          image=""
          email="wenche.aaroen@miles.no"
          phone="45247301"
          roles="DESIGN"
          officeid="5d5d02f05b734b0ea79e02a6"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Wenche Tollevsen"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="wenche.tollevsen@miles.no"
          phone="98679194"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Yngve Aas"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="yngve.aas@miles.no"
          phone="934 84 686"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Yngve Sundfjord"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="yngve.sundfjord@miles.no"
          phone="90698369"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Yngve Toppen Nøtsund"
          location="Bergen"
          jobtitle="Seniorkonsulent"
          image=""
          email="yngve.notsund@miles.no"
          phone="41252068"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Yuriy Lianguzov"
          location="Oslo"
          jobtitle="Konsulent"
          image=""
          email="yuriy.lianguzov@miles.no"
          phone="98193119"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="caroline.gannefors@komponent.no"
          location="Bergen"
          jobtitle=""
          image=""
          email="caroline.gannefors@komponent.no"
          phone=""
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="clementine.isager@komponent.no"
          location="Komponent Kaunas"
          jobtitle=""
          image=""
          email="clementine.isager@komponent.no"
          phone=""
          roles=""
          officeid="61a9cab79134b2111ea0c34f"
          style=""></miles-profile-card
        ><miles-profile-card
          name="david.wall@komponent.no"
          location="Oslo"
          jobtitle=""
          image=""
          email="david.wall@komponent.no"
          phone=""
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="magnulf.pilskog@komponent.no"
          location="Komponent Oslo"
          jobtitle=""
          image=""
          email="magnulf.pilskog@komponent.no"
          phone=""
          roles=""
          officeid="61a9cabfdffdc211534f4cd9"
          style=""></miles-profile-card
        ><miles-profile-card
          name="miles.drift@miles.no"
          location="Bergen"
          jobtitle=""
          image=""
          email="miles.drift@miles.no"
          phone=""
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="oystein.vikane@miles.no"
          location="Komponent Bergen"
          jobtitle=""
          image=""
          email="oystein.vikane@miles.no"
          phone=""
          roles=""
          officeid="61a9cacadffdc2114f4f4c5b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="siri.pedersen@miles.no"
          location="Stavanger"
          jobtitle=""
          image=""
          email="siri.pedersen@miles.no"
          phone=""
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="therese.sorensen@miles.no"
          location="Bergen"
          jobtitle=""
          image=""
          email="therese.sorensen@miles.no"
          phone=""
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="thomas.heritier@komponent.no"
          location="Bergen"
          jobtitle=""
          image=""
          email="thomas.heritier@komponent.no"
          phone=""
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="zoe.birkeland@komponent.no"
          location="Bergen"
          jobtitle="Head of Komponent Bergen"
          image=""
          email="zoe.birkeland@komponent.no"
          phone="93865086"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="zoe.birkeland@miles.no"
          location="Bergen"
          jobtitle=""
          image=""
          email="zoe.birkeland@miles.no"
          phone=""
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Ådne Aarthun Jacobsen"
          location="Stavanger"
          jobtitle="Konsulent"
          image=""
          email="adne.jacobsen@miles.no"
          phone="+4797674427"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Ådne Tobiesen"
          location="Stavanger"
          jobtitle="Konsulent"
          image=""
          email="adne.tobiesen@miles.no"
          phone="99321892"
          roles=""
          officeid="4f61bfd6875b52672f00000b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Øystein Helmersen Vikane"
          location="Komponent Bergen"
          jobtitle="Junior utvikler"
          image=""
          email="oeystein.vikane@komponent.no"
          phone="+4745114455"
          roles=""
          officeid="61a9cacadffdc2114f4f4c5b"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Øyvind Bremar Johannessen"
          location="Bergen"
          jobtitle="Konsulent"
          image=""
          email="oyvind.johannessen@miles.no"
          phone="+47 40019920"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Øyvind Hjulstad"
          location="Oslo"
          jobtitle="Seniorkonsulent"
          image=""
          email="oyvind.hjulstad@miles.no"
          phone="90182388"
          roles=""
          officeid="4f61bfce875b52672f00000a"
          style=""></miles-profile-card
        ><miles-profile-card
          name="Øyvind Straume Almli"
          location="Bergen"
          jobtitle="Konsulent"
          image=""
          email="oyvind.almli@miles.no"
          phone="+47 47917632"
          roles=""
          officeid="4f61bfd2875b526717000008"
          style=""></miles-profile-card>
      </section>
      </main>
      <miles-filter></miles-filter>
  `;
