(function(s,o){typeof exports=="object"&&typeof module<"u"?o(exports):typeof define=="function"&&define.amd?define(["exports"],o):(s=typeof globalThis<"u"?globalThis:s||self,o(s["Miles web component library"]={}))})(this,function(s){"use strict";var je=Object.defineProperty;var Ie=(s,o,d)=>o in s?je(s,o,{enumerable:!0,configurable:!0,writable:!0,value:d}):s[o]=d;var a=(s,o,d)=>(Ie(s,typeof o!="symbol"?o+"":o,d),d);const o=`@charset "UTF-8";@import"https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap";:root{--miles_primary_dark: #b72318;--miles_primary_light: #fbf0e5;--miles_secondary_one: #004047;--miles_secondary_two: #78e8db;--miles_secondary_three: #000000;--miles_secondary_four: #450d21;--miles_secondary_five: #ff303b;--miles_link_color: #183f46;--miles_link_color_hover: #94e5db;--miles_link_color_ondark: #94e5db;--miles_link_color_ondark_hover: #183f46;--miles_default_bg: #f5f5f5;--miles_effect_shadow_low: 0 0 4px 0 #00000033;--miles_effect_shadow_high: 0 0 16px 0 #00000033;--content_width: 80vw;--content_width_max: 1440px;--default_padding: 1rem .625rem;--default_padding_large: 2rem 1.25rem;--vertical_spacing: 4rem;--vertical_spacing_large: 8rem;--header-height: 72px;--miles-h1: 2.5rem;--miles-h2: 3rem;--miles-h3: 1.25rem;--miles-line-height: 150%;--miles-h1-lineheight: calc(var(--miles-h1) * 1.5);--miles-h2-lineheight: calc(var(--miles-h2) * 1.5);--miles-h3-lineheight: calc(var(--miles-h3) * 1.5);--halve_margin_offset: calc(calc(100vw - var(--content_width)) / 2);--halve_margin_offset_large: calc(100vw - var(--content_width))}
`,d=document.createElement("template");d.innerHTML=`
  <style>
    ${o}


    :host {
      display: inline-block;
      width: inherit;
      box-sizing: border-box;
    }
  </style>
  <div class="cloud">
    <svg fill="#b72a26" width="100" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 386 200.89">
      <defs>
        <clipPath id="clippath">
          <rect width="386" height="200.89"/>
        </clipPath>
      </defs>
      <g>
        <polygon points="325.22 180.9 193.99 180.95 60.79 180.89 60.79 200.88 120.37 200.88 193.15 200.88 194.82 200.88 251.59 200.88 325.44 200.88 325.22 180.9"/>
        <g>
          <path d="m60.79,100.96v-19.99C24.82,80.97,0,107.79,0,140.93s24.82,59.95,60.79,59.95v-19.99c-21.98,0-38.31-17.98-38.31-39.97s16.33-39.97,38.31-39.97"/>
          <path d="m178.63,60.78h19.99c0-35.97-26.82-60.78-59.96-60.78s-59.96,24.81-59.96,60.78h19.99c0-21.98,17.98-38.3,39.97-38.3s39.97,16.32,39.97,38.3"/>
          <path d="m319.55,100.97h19.99c0-35.97-26.82-60.78-59.96-60.78s-59.96,24.81-59.96,60.78h19.99c0-21.98,17.98-38.3,39.97-38.3s39.97,16.32,39.97,38.3"/>
          <path d="m178.65,61c21.98,0,38.3,17.99,38.3,39.97h22.48c0-33.14-24.81-59.95-60.78-59.95v19.99Z"/>
          <path d="m98.8,61c-21.98,0-38.3,17.99-38.3,39.97h-22.48c0-33.14,24.81-59.95,60.78-59.95v19.99Z"/>
          <path d="m325.14,100.96c21.97,0,38.3,17.99,38.3,39.97h22.48c0-33.14-24.81-59.96-60.78-59.96v19.99Z"/>
          <path d="m325.22,180.9c21.98,0,38.3-17.99,38.3-39.97h22.48c0,33.14-24.81,59.95-60.78,59.95v-19.99Z"/>
        </g>
      </g>
    </svg>
  </div>  
  `;class f extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.appendChild(d.content.cloneNode(!0)),this.svg=e.querySelector("svg")}static get observedAttributes(){return["width","height","color"]}attributeChangedCallback(e,i,t){e==="width"&&this.svg.setAttribute("width",t),e==="height"&&this.svg.setAttribute("height",t),e==="color"&&this.svg.setAttribute("fill",t)}}const v="miles-cloud";customElements.get(v)||customElements.define(v,f);const b=document.createElement("template");b.innerHTML=` 
  <style>
    ${o}

    :host {
      display: inline-block;
    }
  </style>
  <div class="heart">
    <svg fill="#b8261c" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 259.85 207.9">
      <defs>
        <clipPath id="clippath"><rect y="0" width="259.85" height="207.9"/></clipPath>
      </defs>
      <g>
        <path d="m242.73,95.09l-112.28,112.28-19.75-19.75,110.84-110.84c13.31-13.31,12.88-27.76,1.15-39.49-12.02-12.02-26.33-12.3-39.64,1l-53.12,53.12-19.75-19.75,54.55-54.55c24.89-24.9,55.51-20.89,77.26.86,21.6,21.6,25.61,52.22.72,77.12"/>
        <path d="m17.12,95.09l112.81,112.81,19.74-19.75L38.3,76.78c-13.31-13.31-12.88-27.76-1.15-39.49,12.02-12.02,26.33-12.3,39.64,1l53.16,53.16,19.75-19.75-54.59-54.59c-24.89-24.9-55.51-20.89-77.26.86-21.6,21.6-25.61,52.22-.72,77.12"/>
      </g>
    </svg>
  </div>
    `;class Ee extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.appendChild(b.content.cloneNode(!0)),this.svg=e.querySelector("svg")}static get observedAttributes(){return["width","height","color"]}attributeChangedCallback(e,i,t){e==="width"&&this.svg.setAttribute("width",t),e==="height"&&this.svg.setAttribute("height",t),e==="color"&&this.svg.setAttribute("fill",t)}}const w="miles-heart";customElements.get(w)||customElements.define(w,Ee);const y=document.createElement("template");y.innerHTML=`
    <style>
      ${o}

        :host {
          display: inline-block;
        } 
    </style>
    <div class="curve">
      <svg fill="#b8261c" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 171.16 85.58">
        <defs>
          <clipPath id="clippath">
            <rect class="cls-1" width="171.16" height="85.58"/>
          </clipPath>
          </defs>
            <g>
              <path d="m85.58,85.58c22.86,0,44.35-8.9,60.52-25.07,16.16-16.16,25.07-37.66,25.07-60.52h-28.74c0,31.34-25.5,56.84-56.84,56.84S28.74,31.34,28.74,0H0C0,22.86,8.9,44.35,25.07,60.52c16.16,16.16,37.66,25.07,60.52,25.07"/>
            </g>
          </svg>
    </div>
      `;class x extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.appendChild(y.content.cloneNode(!0)),this.svg=e.querySelector("svg")}static get observedAttributes(){return["width","height","color"]}attributeChangedCallback(e,i,t){e==="width"&&this.svg.setAttribute("width",t),e==="height"&&this.svg.setAttribute("height",t),e==="color"&&this.svg.setAttribute("fill",t)}}const C="miles-curve";customElements.get(C)||customElements.define(C,x);const k=document.createElement("template");k.innerHTML=`
    <style>
        ${o}

    </style>
    <div class="bulb">
      <svg fill="#b8261c" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 386 360.88">
        <defs>
          <clipPath>
            <rect width="386" height="360.88"/>
          </clipPath>
          </defs>
            <g>
              <path d="m228.15,270.25h-70.3v-16.81h70.3v16.81Zm0,32.09h-70.3v-16.81h70.3v16.81Z"/>
              <polygon points="182.72 0 182.72 47.22 182.72 106.64 203.28 106.64 203.28 0 182.72 0"/>
              <polygon points="350.47 72.39 365.01 86.93 289.61 162.33 275.07 147.79 317.08 105.78 350.47 72.39"/>
              <polygon points="338.78 207.95 279.37 207.95 279.37 228.52 386 228.52 386 207.95 338.78 207.95"/>
              <polygon points="59.41 207.95 0 207.95 0 228.52 106.64 228.52 106.64 207.95 59.41 207.95"/>
              <polygon points="120.6 147.79 106.06 162.33 30.66 86.93 45.2 72.39 87.21 114.4 120.6 147.79"/>
            <g>
              <path d="m192.47,360.88c22.01,0,36.06-18.03,36.06-38.67,0-1.67-.09-3.3-.26-4.89h-70.34c-.31,1.68-.46,3.67-.46,5.66,0,20.63,14.52,37.9,35,37.9m15.89-29.04c-.92,6.72-7.64,12.99-15.89,12.99s-14.06-6.42-14.67-12.99h30.57Z"/>
              <path d="m218.93,170.13c14.26,14.26,13.19,36.53-1.08,50.79l14.59,14.59c21.51-21.51,22.8-55.01-.54-78.35l-12.97,12.97Z"/>
              <path d="m167.07,222c-14.26-14.26-13.19-36.53,1.08-50.79l-14.59-14.59c-21.51,21.51-22.8,55.01.54,78.35l12.97-12.97Z"/>
              <path d="m218.93,170.13c-14.26-14.26-36.53-13.19-50.79,1.08l-14.59-14.59c21.51-21.51,55.01-22.8,78.35.54l-12.97,12.97Z"/>
            </g>
          </g>
        </svg>
    </div>  
    `;class E extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.appendChild(k.content.cloneNode(!0)),this.svg=e.querySelector("svg")}static get observedAttributes(){return["width","height","color"]}attributeChangedCallback(e,i,t){e==="width"&&this.svg.setAttribute("width",t),e==="height"&&this.svg.setAttribute("height",t),e==="color"&&this.svg.setAttribute("fill",t)}}const M="miles-bulb";customElements.get(M)||customElements.define(M,E);const _=document.createElement("template");_.innerHTML=`
    <style>
      ${o}

      :host {
        display: inline-block;
      }
    </style>
    <div class="cup">
      <svg fill="#b8261c" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 205.08 385.35">
        <defs>
          <clipPath id="clippath">
            <rect width="205.08" height="385.35"/>
          </clipPath>
        </defs>
          <g><rect x="182.4" y="182.17" width="22.68" height="134.2"/>
          <rect x="68.99" y="182.17" width="22.68" height="134.2"/>
            <g>
              <path d="m155.26,58.11h-31.76c-11.91,0-20.6,6.8-23.81,18.9h0s0,21.17,0,21.17h10.58c0-10.77,4.73-19.1,17.58-19.1h26.84c24.76,0,36.48-13.98,36.48-36.47v-5.86h-19.09v5.48c0,9.45-4.35,15.88-16.82,15.88"/>
              <path d="m131.7,21.36h-31.75c-11.91,0-20.6,6.81-23.81,18.9h0s0,21.17,0,21.17h10.58c0-10.77,4.73-19.1,17.58-19.1h26.84c24.76,0,36.48-13.98,36.48-36.47V0h-19.09v5.48c0,9.45-4.35,15.88-16.82,15.88"/>
              <path d="m205.08,316.36h-22.68c0,24.95-20.41,43.47-45.36,43.47s-45.36-18.52-45.36-43.47h-22.68c0,40.83,30.43,68.99,68.04,68.99s68.05-28.16,68.05-68.99"/>
              <path d="m205.08,182.17h-22.68c0,24.95-20.41,43.47-45.36,43.47s-45.36-18.52-45.36-43.47h-22.68c0,40.83,30.43,68.99,68.04,68.99s68.05-28.16,68.05-68.99"/>
              <path d="m68.99,182.17h22.68c0-24.95,20.41-43.47,45.36-43.47s45.36,18.52,45.36,43.47h22.68c0-40.83-30.43-68.99-68.05-68.99s-68.04,28.16-68.04,68.99"/>
              <path d="m68.99,325.05v-22.68c-24.95,0-43.47-20.41-43.47-45.36s18.52-45.36,43.47-45.36v-22.68C28.16,188.97,0,219.4,0,257.01s28.16,68.04,68.99,68.04"/>
            </g>
          </g>
          </svg>
    </div>
      `;class A extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.appendChild(_.content.cloneNode(!0)),this.svg=e.querySelector("svg")}static get observedAttributes(){return["width","height","color"]}attributeChangedCallback(e,i,t){e==="width"&&this.svg.setAttribute("width",t),e==="height"&&this.svg.setAttribute("height",t),e==="color"&&this.svg.setAttribute("fill",t)}}const L="miles-cup";customElements.get(L)||customElements.define(L,A);class S extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.innerHTML=`
        <style>
          ${o}

          :host {
            display: inline-block;
          }
        </style>
        <div class="icon">
        <svg width="54" height="49" viewBox="0 0 54 49" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21.6008 21.6C27.5655 21.6 32.4008 16.7647 32.4008 10.8C32.4008 4.83532 27.5655 0 21.6008 0C15.6361 0 10.8008 4.83532 10.8008 10.8C10.8008 16.7647 15.6361 21.6 21.6008 21.6Z" fill="#3F1221"/>
        <path d="M22.545 27.0276C15.174 26.7576 0 30.4296 0 37.8006V43.2006H25.758C19.089 35.7486 22.437 27.2976 22.545 27.0276Z" fill="currentColor"/>
        <path d="M47.061 37.8536C48.033 36.2606 48.6 34.3976 48.6 32.3996C48.6 26.4326 43.767 21.5996 37.8 21.5996C31.833 21.5996 27 26.4326 27 32.3996C27 38.3666 31.833 43.1996 37.8 43.1996C39.798 43.1996 41.661 42.6056 43.254 41.6606L50.193 48.5996L54 44.7926L47.061 37.8536ZM37.8 37.7996C34.83 37.7996 32.4 35.3696 32.4 32.3996C32.4 29.4296 34.83 26.9996 37.8 26.9996C40.77 26.9996 43.2 29.4296 43.2 32.3996C43.2 35.3696 40.77 37.7996 37.8 37.7996Z" fill="#3F1221"/>
        </svg>
        </div>
      `}}const T="miles-zoom";customElements.get(T)||customElements.define(T,S);class H extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.innerHTML=`
          <style>
            ${o}

            :host {
              display: inline-block;
              color: var(--miles_primary_light, #fbf0e5);
            }
          </style>
          <div class="icon">
          <svg width="37" height="74" viewBox="0 0 37 74" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g clip-path="url(#clip0_193_1597)">
          <path d="M18.5954 39.2082C15.9429 39.2082 13.7222 38.3469 11.9333 36.6243C10.1444 34.9018 9.25 32.8101 9.25 30.3493V9.3721C9.25 7.05057 10.158 5.07729 11.9741 3.45227C13.7902 1.82719 15.9955 1.01465 18.59 1.01465C21.1844 1.01465 23.3915 1.82719 25.2112 3.45227C27.031 5.07729 27.9408 7.05057 27.9408 9.3721V30.3493C27.9408 32.8101 27.0464 34.9018 25.2575 36.6243C23.4686 38.3469 21.2479 39.2082 18.5954 39.2082ZM19.4911 60.8711V64.8399C21.8256 65.0539 23.7857 65.9196 25.3714 67.4371C26.9571 68.9545 27.75 70.7444 27.75 72.8066H25.7679C25.7679 71.0362 25.0599 69.5479 23.6441 68.3417C22.2282 67.1355 20.5158 66.5324 18.507 66.5324C16.4982 66.5324 14.7835 67.1355 13.3629 68.3417C11.9424 69.5479 11.2321 71.0362 11.2321 72.8066H9.25C9.25 70.7444 10.0429 68.9545 11.6286 67.4371C13.2143 65.9196 15.1744 65.0539 17.5089 64.8399V60.8711H19.4911ZM16.5179 65.6453V49.1743C11.8488 48.7367 7.92857 46.9663 4.75714 43.863C1.58571 40.7598 0 37.0996 0 32.8824H3.96429C3.96429 36.5028 5.38015 39.5464 8.21189 42.013C11.0436 44.4797 14.4683 45.713 18.486 45.713C22.5037 45.713 25.933 44.4797 28.7741 42.013C31.6152 39.5464 33.0357 36.5028 33.0357 32.8824H37C37 37.0996 35.4143 40.7598 32.2429 43.863C29.0714 46.9663 25.1512 48.7367 20.4821 49.1743V65.6453H16.5179ZM18.3294 33.9534C19.4397 33.9534 20.3496 33.5774 21.059 32.8252C21.7684 32.073 22.1231 31.1676 22.1231 30.109V9.13182C22.1231 8.18464 21.7595 7.39069 21.0324 6.74995C20.3053 6.10921 19.4043 5.78884 18.3294 5.78884C17.2545 5.78884 16.3535 6.10921 15.6264 6.74995C14.8993 7.39069 14.5357 8.18464 14.5357 9.13182V30.109C14.5357 31.1676 14.8904 32.073 15.5998 32.8252C16.3092 33.5774 17.2191 33.9534 18.3294 33.9534Z" fill="currentColor"/>
          </g>
          <defs>
          <clipPath id="clip0_193_1597">
          <rect width="37" height="74" fill="white"/>
          </clipPath>
          </defs>
          </svg>
          </div>
        `}}const q="miles-pod";customElements.get(q)||customElements.define(q,H);const Me=`:host{display:inline-block;width:inherit;box-sizing:border-box}
`,$=document.createElement("template");$.innerHTML=`
<style>
  	${Me}

  ${o}
</style>
  <div class="logo">
    <svg version="1.1" fill="#b8261c" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 96 32" xml:space="preserve" class="miles-logo">
    <g>
      <path  d="M86.2,16.5c0-1.1,1.3-1.6,2.8-1.6c1.4,0,2.8,0.5,3.9,1.4l2.6-4c-1.3-1-4.2-2-6.9-2c-4,0-7.8,2.4-7.8,6.3c0,6.5,9.8,5.4,9.8,8.5c0,1-1.1,1.7-2.6,1.7c-2,0-4-0.7-5.6-2l-2.6,3.9c2.4,1.8,5.2,2.7,8.2,2.8c4.3,0,8.1-2.4,8.1-6.3
  C96,18.1,86.2,19.2,86.2,16.5z"></path>
      <path  d="M14.7,10.8C14.7,10.8,14.7,10.8,14.7,10.8c-5,0-9.1-4.1-9-9.1c0,0,0,0,0,0H0V31h5.7V12.7
  c0.1,0.2,0.3,0.4,0.5,0.5c2.4,1.9,5.5,2.9,8.5,2.9c3.1,0,6.1-1,8.5-2.9c0.2-0.1,0.3-0.3,0.5-0.5V31h5.7V1.7h-5.7
  C23.7,6.7,19.7,10.8,14.7,10.8z"></path>
      <path  d="M38.5,0C38.5,0,38.4,0,38.5,0c-2,0-3.5,1.5-3.6,3.5c0,1.9,1.5,3.4,3.4,3.5c1.9,0,3.5-1.5,3.6-3.4
  C41.9,1.6,40.4,0,38.5,0z"></path>
      <rect x="35.8" y="10.7"  width="5.4" height="20.3"></rect>
      <path  d="M67.4,10.2c-6,0-9.9,4.9-9.9,10.6c0,6.4,4.6,10.5,10.6,10.5c3.1,0,6.4-1.3,8.3-3.6l-3.1-3.1
  c-1.3,1.4-3.1,2.3-5.1,2.3c-2.8,0.1-5.2-2-5.5-4.8h14c0.1-0.5,0.1-1,0.1-1.5C77,15,73,10.2,67.4,10.2z M63,18.2
  c0.4-2.1,2.2-3.6,4.4-3.6c2,0,3.8,1.5,4,3.6H63z"></path>
      <rect x="47.5" y="1.3"  width="5.4" height="29.7"></rect>
    </g>
  </svg>
  </div>
`;class R extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.appendChild($.content.cloneNode(!0)),this.svg=e.querySelector("svg")}static get observedAttributes(){return["width","height","color"]}attributeChangedCallback(e,i,t){e==="width"&&this.svg.setAttribute("width",t),e==="height"&&this.svg.setAttribute("height",t),e==="color"&&this.svg.setAttribute("fill",t)}}const N="miles-logo";customElements.get(N)||customElements.define(N,R);const B=document.createElement("template");B.innerHTML=`
        <style>
          ${o}

          :host {
            display: inline-block;
            color: var(--miles_primary_dark);
          }
          a {
            display: inline-block;
            color: var(--color);
            padding: 0.5rem 1rem;
            border-radius: 3rem;
            border: 2px solid var(--color);
            text-decoration: none;
            font-weight: bold;
            transition: all 0.5s ease;
            white-space: nowrap;
          }
          a:hover {
            color: var(--miles_primary_light);
            background-color: var(--color);
          }
        </style>
        <a id="buttonTarget"">
          <slot></slot>
        </a>
      `;class z extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.append(B.content.cloneNode(!0)),this.buttontarget=e.querySelector("#buttonTarget")}static get observedAttributes(){return["href","color"]}attributeChangedCallback(e,i,t){e==="href"&&this.buttontarget.setAttribute("href",t),e==="color"&&this.style.setProperty("--color",t)}connectedCallback(){}}const P="miles-button-anchor";customElements.get(P)||customElements.define(P,z);const _e=`:host{display:inline-block;--width: 215px}.profile-card{display:flex;flex-direction:column;width:var(--width);border-radius:5px;overflow:hidden}figure{border-radius:.5rem;height:var(--width);margin:0 0 .5rem;padding:0}img{background-color:#fff;filter:grayscale(1);width:100%;object-fit:cover;aspect-ratio:1 / 1}.profile-card__info{display:flex;background-color:var(--miles_secondary_four);padding:1.2rem;min-height:140px;flex-direction:column}.jobtitle{flex-grow:1}.jobtitle p{overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}.description{display:flex;flex-direction:row;align-items:baseline;gap:.2rem}h3,p{margin:0;color:var(--miles_primary_light)}
`,j=document.createElement("template");j.innerHTML=`
        <style>
          	${_e}

           ${o}
        </style>
       
        <div class="profile-card">
        <a href="">  
          <figure>
          <img class="profile-card__image" id="profileimage" /> 
        </figure>
        </a>
          <div class="profile-card__info">
            <h3 id="name"</h3>
            <div class="description jobtitle">
              <p id="jobtitle"></p>
            </div>
            <div class="description location">
            <svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.6 6.61789V1.62965H11.2V4.07671L8 0.688477L0 9.15907H2.4V16.6885H6.4V11.0414H9.6V16.6885H13.6V9.15907H16L13.6 6.61789ZM6.4 7.27671C6.4 6.24142 7.12 5.39436 8 5.39436C8.88 5.39436 9.6 6.24142 9.6 7.27671H6.4Z" fill="#EB4645"/>
            </svg>
            <p id="location"></p>
          </div>
          </div>
        </div>  
      `;class I extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}).append(j.content.cloneNode(!0)),this.officeLocation=this.shadowRoot.querySelector("#location"),this.jobTitle=this.shadowRoot.querySelector("#jobtitle"),this.consultantName=this.shadowRoot.querySelector("#name"),this.profileImage=this.shadowRoot.querySelector("#profileimage")}static get observedAttributes(){return["image","name","jobtitle","location"]}attributeChangedCallback(e,i,t){if(e==="image")if(t===""||t===null){const r="https://www.miles.no/newsite/wp-content/uploads/2019/06/miles_smile.png";this.profileImage.setAttribute("src",r),this.profileImage.setAttribute("alt","Miles Profile Card Image")}else this.profileImage.setAttribute("src",t),this.profileImage.setAttribute("alt","Miles Profile Card Image");e==="location"&&(this.officeLocation.textContent=t),e==="jobtitle"&&(this.jobTitle.textContent=t),e==="name"&&(this.shadowRoot.querySelector("a").setAttribute("href",t.split(" ").join("-").toLowerCase()),this.consultantName.textContent=t)}connectedCallback(){}disconnectedCallback(){}}const Z="miles-profile-card";customElements.get(Z)||customElements.define(Z,I);const Ae=`:host{display:inline-block;color:var(--miles_primary_light)}.info{background-color:var(--miles_secondary_four);border-radius:0 99rem 99rem;overflow:hidden;padding:1rem 3rem;display:flex;justify-content:center;align-items:center;flex-direction:row;gap:1.5rem;color:inherit}.info__icon{font-size:1.2rem;font-weight:700}.info__description{font-weight:700;max-width:15rem;font-size:1rem}
`;class O extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.innerHTML=`
        <style>
      	${Ae}

        ${o}
        </style>
        <div class="info">
          <span class="info__icon">
            <slot name="icon"></slot>
          </span>
          <span class="info__description">
            <slot></slot>
          </span>
        </div>
      `}}const F="miles-info";customElements.get(F)||customElements.define(F,O);const Le=`:host{display:block;color:inherit}.podcast-teaser{box-sizing:border-box;width:100vw;position:relative;height:300px}.bg{background-color:#ff303b1a;width:100%;height:66%;position:absolute;bottom:0}.inner{height:100%;display:flex;flex-direction:column;width:80%;margin:auto;align-items:center;gap:1em;padding-top:2em}miles-info{right:10%;left:10%;position:absolute;top:.75em}@media (min-width: 768px){.inner{flex-direction:row;padding-top:0}.podcast-teaser{height:210px}}@media (max-width: 1024px) and (min-width: 769px){miles-info{width:28%;left:unset;top:1em;right:var(--halve_margin_offset_large)}}@media (min-width: 1025px){miles-info{max-width:250px;left:unset;width:unset;top:1em;right:var(--halve_margin_offset_large)}}.left{display:flex;flex-direction:row;align-items:center;gap:1em}.text{display:flex;flex-direction:column}h3,p{margin:0}p{font-size:.8em;color:var(--miles_primary_dark)}svg{height:70px;width:70px}a{color:inherit;right:var(--halve_margin_offset_large);bottom:1em;position:absolute;display:inline-block}a:after{content:"\\2192"}
`;class D extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.innerHTML=`
      <style>
      	${Le}

        ${o}
        </style>
        <div class="podcast-teaser">
        <div class="bg">
          <div class="inner">
            <div class="left">
              <svg width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="46" cy="46" r="46" fill="#EB4645"/>
                <path d="M32 27V65L70 46L32 27Z" fill="#FCF8F3"/>
              </svg>
              <div class="text">
                <h3>UX - med brukeren i sentrum</h3>
                <p>22. Mars - MilesPodden</p>
              </div>
            </div>
            <a class="more" href="/milespodden">Hør alle episodene</a>
          </div>
        </div>
          <miles-info>
          <miles-pod slot="icon"></miles-pod>
          Hør siste episode av MilesPodden!
          </miles-info>
        </div>
        `}}const U="miles-podcast-teaser";customElements.get(U)||customElements.define(U,D);const Se=`:host{display:inline-block;color:red;--arrow-bg-color: #ffffff;--arrow-color: #b72a26}#arrow-nav{display:flex;padding:.8rem;border-radius:50%;background-color:#94e5db}svg{display:inline-block}
`,V=document.createElement("template");V.innerHTML=`
  <style>
	${Se}

  ${o}
  </style>
  <div id="arrow-nav">
    <svg width="24" height="24" viewBox="0 0 14 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.125 22.9234C12.5313 23.5171 11.5687 23.5171 10.975 22.9234L0 11.9484L10.975 0.973437C11.5687 0.379731 12.5313 0.379732 13.125 0.973438C13.7187 1.56714 13.7187 2.52973 13.125 3.12344L4.3 11.9484L13.125 20.7734C13.7187 21.3671 13.7187 22.3297 13.125 22.9234Z" fill="#3F1221"/>
    </svg>
  </div>
  `;class W extends HTMLElement{constructor(){super();const e=this.attachShadow({mode:"open"});e.appendChild(V.content.cloneNode(!0)),this.nav=e.querySelector("#arrow-nav")}static get observedAttributes(){return["width","height","color"]}attributeChangedCallback(e,i,t){e==="width"&&this.nav.setAttribute("width",t),e==="height"&&this.nav.setAttribute("height",t),e==="color"&&this.nav.setAttribute("color",t)}}const X="miles-arrow-nav";customElements.get(X)||customElements.define(X,W);const Te=`:host{--slide-container-height:calc(100vw - 2rem);--slide-container-width: 100vw;--slides-offset: 0;display:block;width:var(--slide-container-width);height:var(--slide-container-height);background-color:#f8ebe8;height:100%;padding-top:100px;padding-bottom:100px}@media (min-width: 768px){:host{--slide-container-height: 500px}}section{width:var(--slide-container-width);height:calc(var(--slide-container-height) + 3rem);position:relative}#leftnav,#rightnav{cursor:pointer;height:calc(500px - 2rem);top:1rem;width:80px;position:absolute;z-index:10;flex-direction:column;display:flex;align-items:center;justify-content:center}#nav-overlay-left,#nav-overlay-right{transition:opacity .5s ease-in-out;width:80px;top:1rem;z-index:10;position:absolute;height:calc(500px - 2rem);top:0rem;opacity:0;background-color:#fff}#nav-overlay-left:hover,#nav-overlay-right:hover{opacity:.6}miles-arrow-nav{z-index:15;opacity:.9}#nav-overlay-right{right:0}#rightnav{transform:rotate(180deg);right:0}section .slides{transform:translate(calc(var(--slides-offset) * var(--slide-container-height)));position:absolute;display:flex;flex-direction:row;transition:transform 1s cubic-bezier(.46,.03,.52,.96)}section .slides figure{position:relative;box-sizing:border-box;padding:1rem;height:var(--slide-container-height);aspect-ratio:1 / 1;margin:0}.overlay{position:absolute;height:100%;width:100%;background-repeat:no-repeat;background-size:contain;background-position:center;background-color:transparent;transform:scale(1.5);pointer-events:none}.overlay.equinor{background-image:url(https://www.miles.no/newsite/wp-content/uploads/2021/06/equinor-logo-1.png)}.overlay.fjordkraft{background-image:url(https://www.miles.no/newsite/wp-content/uploads/2021/06/fjordkraft-logo.png);background-position:center}.overlay.tv2{background-image:url(https://www.miles.no/newsite/wp-content/uploads/2021/06/tv2-logo-1.png)}.overlay.cutters{background-image:url(https://www.miles.no/newsite/wp-content/uploads/2021/06/cutters-logo.png)}section .slides figure img{height:100%;width:100%;object-fit:cover;border-radius:30px;app-region:no-drag}nav{max-width:100vw;position:absolute;width:100%;display:flex;flex-direction:row;justify-content:center;align-items:center;gap:1em;bottom:0;height:3rem}.nav-dot{border-radius:50%;display:inline-block;height:.5em;width:.5em;background-color:var(--miles_secondary_four);cursor:pointer}#slide-wrapper{width:100vw}h2{font-size:2rem;margin:3rem auto;text-align:center}@media (min-width: 768px){h2{font-size:3rem}.nav-dot{height:1em;width:1em}}.active{background-color:var(--miles_secondary_five)}
`,G=document.createElement("template");G.innerHTML=`
  <style>
	${Te}

  ${o}
  </style>
  <div id="slide-wrapper">
    <h2>Våre prosjekter</h2>
    <section>
      <div id="leftnav">
        <div id="nav-overlay-left"></div>
        <miles-arrow-nav color="#3F1221"></miles-arrow-nav>
      </div>
      <div class="slides"></div>
      <div id="rightnav">
        <div id="nav-overlay-right"></div>
        <miles-arrow-nav color="#3F1221"></miles-arrow-nav>
      </div>
      <slot></slot>
      <nav class="controls"> </nav>
    </section>
  </div>
    `;class J extends HTMLElement{constructor(){super();a(this,"goRight",()=>{this.startAutoPlay(!1),Math.abs(this.index)!==0&&(this.index++,this.setActiveDot(this.index),this.slides.style.setProperty("--slides-offset",this.index))});a(this,"goLeft",()=>{this.startAutoPlay(!1),Math.abs(this.index)!==this.numberOfSlides-1&&(this.index--,this.setActiveDot(this.index),this.slides.style.setProperty("--slides-offset",this.index))});a(this,"goToSlide",i=>{let t=parseInt(i.target.dataset.slide)*-1;this.numberOfSlides-1===parseInt(i.target.dataset.slide)&&(t=0),this.startAutoPlay(!1),this.slides.style.setProperty("--slides-offset",t),this.setActiveDot(t)});a(this,"startAutoPlay",i=>{i?this.autoPlay=setInterval(()=>{Math.abs(this.index)===this.numberOfSlides-2?this.index=0:this.index--,this.setActiveDot(this.index),this.slides.style.setProperty("--slides-offset",this.index)},5e3):clearInterval(this.autoPlay)});a(this,"setActiveDot",i=>{const t=this.controls.querySelectorAll(".nav-dot");t.forEach(r=>{r.classList.remove("active")}),t.forEach(r=>{parseInt(r.getAttribute("data-slide"))===Math.abs(i)&&r.classList.add("active")})});const i=this.attachShadow({mode:"open"});i.appendChild(G.content.cloneNode(!0)),this.slides=i.querySelector(".slides"),this.controls=i.querySelector(".controls"),this.wrapper=i.querySelector("#slide-wrapper"),this.numberOfSlides=0,this.autoPlay=0,this.index=0,this.logos=["equinor","fjordkraft","tv2","cutters"],this.rightNav=i.querySelector("#rightnav"),this.leftNav=i.querySelector("#leftnav")}connectedCallback(){let i={root:null,rootMargin:"0px",threshold:1};this.observer=new IntersectionObserver(r=>{r.forEach(n=>{n.isIntersecting?this.startAutoPlay(!0):this.startAutoPlay(!1)})},i),this.observer.observe(this.wrapper),this.controls.addEventListener("click",this.goToSlide),this.rightNav.addEventListener("click",this.goLeft),this.leftNav.addEventListener("click",this.goRight);const t=this.shadowRoot.querySelector("slot");if(t){let r=t.assignedElements().length===1?t.assignedElements()[0].children:t.assignedElements();if(typeof r=="object")try{const n=Array.from(r);this.numberOfSlides=r.length,n.forEach((c,ke)=>{const m=document.createElement("figure"),g=document.createElement("div");if(g.setAttribute("class","overlay"),c.classList.forEach(h=>{this.logos.includes(h)&&g.classList.add(h)}),m.setAttribute("data-slide-image",ke),m.appendChild(g),c.querySelector("img")){const h=c.querySelector("img");h.setAttribute("draggable",!1),m.appendChild(h),this.slides.appendChild(m);const u=document.createElement("span");u.setAttribute("class","nav-dot"),u.setAttribute("data-slide",ke),this.controls.appendChild(u)}})}catch{console.log(r)}}this.setActiveDot(this.index)}disconnectedCallback(){this.controls.removeEventListener("click",this.goToSlide),this.observer.unobserve(this.wrapper),this.rightNav.removeEventListener("click",this.goLeft),this.leftNav.removeEventListener("click",this.goRight)}static get observedAttributes(){return["inview","autoplay"]}attributeChangedCallback(i,t,r){}}const K="miles-image-slider";customElements.get(K)||customElements.define(K,J);const He=`:host{display:block;color:inherit;--maxWidth: 350px}#header{display:flex;max-width:80vw;margin:auto;flex-direction:column}#fagblogg-teaser{box-sizing:border-box;width:100vw;position:relative;min-height:800px}.bg{width:100%;height:50%;position:absolute;top:5rem}.inner{width:80vw;justify-content:center;position:absolute;display:flex;flex-direction:column;margin:auto;align-items:center;gap:1em;padding-top:2em;top:320px;right:10%}miles-info{position:relative;max-width:300px}@media (min-width: 768px){.inner{flex-direction:row;padding-top:0;top:160px}#header{flex-direction:row}.podcast-teaser{height:210px}}@media (max-width: 1024px) and (min-width: 769px){miles-info{width:28%;left:unset;top:1em;right:var(--halve_margin_offset_large)}.bg{width:100%;height:35%;position:absolute;top:5rem}}@media (min-width: 1025px){miles-info{left:unset;width:unset}}.left{display:flex;flex-direction:row;align-items:center;gap:1em}.text{display:flex;flex-direction:column}h2,p{width:var(--content_width);margin:auto}h2{line-height:150%;font-size:var(--miles-h2);color:#000;padding-top:50px}p{font-size:.8em;color:var(--miles_primary_dark)}svg{height:70px;width:70px}a{color:inherit;right:var(--halve_margin_offset_large);bottom:1em;position:absolute;display:inline-block}a:after{content:"\\2192"}
`,Q=document.createElement("template");Q.innerHTML=`
  <style>
	${He}

  ${o}
  </style>
  <div id="fagblogg-teaser">
    <div class="bg">
      <div id="header">
        <h2>Miles fagblogg</h2>
        <miles-info >
        <miles-pod slot="icon"></miles-pod>
          <div>Interessert i faglig påfyll?</div>
          <div>Sjekk ut faagpodden vår</div>
        </miles-info>
      </div>
      <div class="inner">
        <slot></slot>
      </div>
    </div>

  </div>
`;class Y extends HTMLElement{constructor(){super();a(this,"goToPost",i=>{window.location.href=escape(i.target.dataset.post)});this.attachShadow({mode:"open"}),this.shadowRoot.append(Q.content.cloneNode(!0))}connectedCallback(){const i=this.shadowRoot.querySelector("slot").assignedElements()[0];if(i){const t=i.querySelectorAll("img"),r=Array.from(i.querySelectorAll("a"));Array.from(t).forEach((n,c)=>{n.setAttribute("style","max-width: var(--maxWidth); height: auto; cursor: pointer;"),n.setAttribute("data-post",r[c].href),n.addEventListener("click",this.goToPost)})}}disconnectedCallback(){}}const ee="miles-fagblogg-teaser";customElements.get(ee)||customElements.define(ee,Y);const qe=`:host{display:block;color:inherit;width:inherit;height:inherit}#blog-card{display:flex;flex-direction:column;gap:.2rem;width:100%;border-radius:1rem;overflow:hidden}slot[name=title]::slotted(*){font-size:1.5rem;margin:0}a{display:block;width:100%;text-decoration:none;color:inherit}.text{background-color:var(--miles_secondary_four);color:var(--miles_primary_light);padding:2rem;height:110px;display:flex;flex-direction:column}slot[name=title]::slotted(*){overflow:hidden;text-overflow:ellipsis;display:-webkit-box;-webkit-line-clamp:2;line-clamp:2;-webkit-box-orient:vertical}slot[name=meta]{display:block;flex-grow:1}#updated{display:none}::slotted(figure){margin:0;aspect-ratio:4/5;overflow:hidden}
`,te=document.createElement("template");te.innerHTML=`
  <style>
	${qe}

  ${o}
  </style>
  <div id="blog-card">
    <a href="#">
      <slot name="image"></slot>
    </a>
    <div class="text">
    <a href="#">
      <slot name="title"></slot>
    </a>
    <slot name="meta"></slot>
    
    <div>Skrevet av <span id="author"></span></div>
    <div><span id="posted"></span></div>
    <span id="updated"></span>
    </div>
  </div>
`;class ie extends HTMLElement{constructor(){super();a(this,"timeFormat",i=>new Intl.DateTimeFormat("no",{month:"short",day:"numeric",year:"numeric"}).format(i));this.attachShadow({mode:"open"}),this.shadowRoot.append(te.content.cloneNode(!0)),this.posted=this.shadowRoot.querySelector("#posted"),this.updated=this.shadowRoot.querySelector("#updated"),this.author=this.shadowRoot.querySelector("#author")}static get observedAttributes(){return["url","author","posted","updated"]}attributeChangedCallback(i,t,r){i==="url"&&this.shadowRoot.querySelectorAll("a").forEach(n=>{n.setAttribute("href",r)}),i==="author"&&(this.author.textContent=r)}connectedCallback(){const i=this.shadowRoot.querySelector('slot[name="image"]').assignedElements();i[0]?.children&&Array.from(i[0]?.children).forEach(r=>{r.style.objectFit="cover",r.style.aspectRatio="2/3",r.style.width="100%"});const t=this.shadowRoot.querySelector('slot[name="meta"]').assignedElements();t[0]?.children&&(Array.from(t[0]?.children).forEach(r=>{const n=Array.from(r.children[0].children);this.posted.textContent=`${this.timeFormat(new Date(n[0].dateTime))}`,this.updated.textContent=`${this.timeFormat(new Date(n[1].dateTime))}`}),t[0].remove())}disconnectedCallback(){}}const oe="miles-blog-card";customElements.get(oe)||customElements.define(oe,ie);const $e=`:host{--topOffset: 1rem;--bottomOffset: 5rem;--blockRadius: 30px;color:inherit;display:block}#overlap-block{padding:0 2rem;position:relative}#feature-block{border-radius:30px;background-color:#f8ebe8;padding:3rem;width:var(--width);position:relative}@media (min-width: 768px){:host{--topOffset: 16rem}#overlap-block{width:80vw;margin:auto;position:relative}.parent{display:grid;grid-template-columns:repeat(12,1fr);grid-template-rows:var(--topOffset) auto var(--bottomOffset);grid-column-gap:0px;grid-row-gap:0px}.div1{grid-area:1 / 1 / 2 / 6}.div2{grid-area:1 / 5 / 2 / 13;background-color:var(--miles_secondary_four)}.inner{position:relative;z-index:1;grid-area:2 / 1 / 2 / 13}.inner #content_grid{display:flex;flex-direction:row}#feature-block{border-radius:30px;background-color:#f8ebe8;padding:3rem;width:var(--width);position:relative}::slotted(div){font-size:1.5rem}#feature-block:after{z-index:-1;width:100px;height:100%;content:"";position:absolute;top:0;right:0;background-color:var(--miles_secondary_four)}.div1,.div2{border-top-left-radius:var(--blockRadius);border-top-right-radius:var(--blockRadius);height:var(--topOffset)}.div4{border-bottom-left-radius:var(--blockRadius);border-bottom-right-radius:var(--blockRadius)}.div3{grid-area:1 / 1 / 2 / 6}.div4{grid-area:3 / 5 / 3 / 13;background-color:var(--miles_secondary_four)}#list{width:100%;border-radius:30px;display:flex;flex-direction:column;color:var(--miles_primary_light);background-color:var(--miles_secondary_four);padding:3rem;margin:0;position:relative;z-index:5;min-width:fit-content;left:-10vw;bottom:10vw}}#list{border-radius:unset;left:unset;bottom:unset;display:flex;flex-direction:column;color:var(--miles_primary_light);background-color:var(--miles_secondary_four);padding:3rem;margin:0;position:relative;z-index:5;min-width:fit-content}#list ul{position:relative;top:calc(-1 * var(--topOffset));padding:0}#list li{line-height:38px;list-style:none;padding:.5rem 0;font-size:1.5rem}miles-bulb{position:absolute;right:6rem;bottom:5rem;z-index:20}miles-curve{margin-right:.5em}
`,se=document.createElement("template");se.innerHTML=`
  <style>
	${$e}

  ${o}
  </style>
  <div id="overlap-block">
    <div class="parent">
      <div class="div1"> </div>
      <div class="div2"> </div>
      <div class="inner">
        <div id="content_grid">
          <div id="feature-block">
          <slot></slot>
          </div>
          <div id="list"></div>
        </div>
      </div>
      <div class="div3"> </div>
      <div class="div4"> </div>
    </div>
   <!-- <miles-bulb color="var(--miles_secondary_two)" width="3rem"></miles-bulb> -->
  </div>
`;class re extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.append(se.content.cloneNode(!0)),this.list=this.shadowRoot.querySelector("#list")}connectedCallback(){const e=["Systemutvikling","Prosjektledelse","Testledelse","Smidig Coaching","Design","Arkitektur","Rådgivning"],i=document.createElement("ul");e.forEach(t=>{const r=document.createElement("li");r.innerHTML=`<miles-curve color="currentColor" width="1em"></miles-curve><span>${t}</span>`,i.append(r)}),this.list.append(i)}disconnectedCallback(){}}const le="miles-overlap-block";customElements.get(le)||customElements.define(le,re);const Re=`:host{--headerHeight: 200px}#banner{height:300px;overflow:hidden;border-radius:30px;position:relative;box-sizing:border-box;font-size:12px;line-height:1.25}#banner.open{height:unset}#banner img{transform:scale(1.1);width:100%;object-fit:cover}#banner figure{margin:0}#menu{display:flex;flex-direction:column-reverse;justify-content:start;padding:1rem;right:0;left:0;width:100%;z-index:100;top:100%;position:absolute;background-color:var(--miles_secondary_four);height:100%;transition:top .5s cubic-bezier(.46,.03,.52,.96);gap:2rem}#menu.open{top:100px}#triggerEl miles-arrow{width:20px;height:20px}@media (max-width: 1024px) and (min-width: 769px){#menu.open{top:150px;width:100%;left:0;right:unset}}@media (min-width: 1025px){#menu{bottom:0;right:0;left:unset;width:50%;padding:4rem}#menu.open{top:0;width:50%;left:unset}}#menu h2{display:inline-block}#menu ul{padding:0;margin:0;list-style:none}#menu .miles-banner-card .wp-block-group__inner-container{justify-items:center;display:flex;flex-direction:row-reverse;justify-content:flex-end;gap:1rem}#menu .miles-banner-card figure{margin:0;height:100px;aspect-ratio:1/1;border-radius:50%;overflow:hidden}#menu .miles-banner-card li:first-child{font-size:1.2rem;font-weight:600}#menu .miles-banner-card img{width:100%;height:100%}#people{display:grid;grid-template-columns:repeat(1,1fr);gap:1rem}#triggerEl h2{color:var(--miles_primary_light);font-size:2rem;line-height:150%;margin:0;text-align:left;z-index:10;position:relative}#triggerBg{margin:auto;position:relative;width:100%;z-index:10;bottom:unset;top:0;height:calc(calc(var(--headerHeight) / 2) + 5px);padding:1rem}#triggerBg:after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,.2);transition:all .5s cubic-bezier(.46,.03,.52,.96);z-index:1}#triggerBg:hover:after{background:rgba(0,0,0,.8)}@media (min-width: 769px){#banner{font-size:16px;height:unset}#banner.open{height:unset}#people{display:grid;grid-template-columns:repeat(2,50%);gap:1rem}#triggerEl h2{font-size:64px;line-height:150%}#triggerBg{bottom:unset;top:unset;bottom:0;height:200px;padding:2rem;position:absolute}#triggerEl miles-arrow{width:30px;height:30px}}
`,ne=document.createElement("template");ne.innerHTML=`
  <style>
	${Re}

  ${o}
  </style>
  <div id="banner">
  <div id="menu">
    <div id="people"></div>
  </div>
  <div id="triggerBg">
    <div id="triggerEl"></div>
  </div>
  <div id="content">
    <slot></slot>
  </div>
  </div>
`;class ae extends HTMLElement{constructor(){super();a(this,"toggleMenu",()=>{const i=this.menu.querySelectorAll("miles-business-card"),t=this.banner.getBoundingClientRect();this.menu.classList.toggle("open"),this.banner.classList.toggle("open"),this.menu.classList.contains("open")?(this.triggerEl.querySelector("miles-arrow").classList.remove("open"),t.width<769&&this.banner.setAttribute("style",`height: calc(calc(${i.length} * var(--headerHeight)) + 300px);`)):(this.banner.removeAttribute("style"),this.triggerEl.querySelector("miles-arrow").classList.add("open"),this.banner.classList.toggle("open"))});this.attachShadow({mode:"open"}),this.shadowRoot.append(ne.content.cloneNode(!0)),this.banner=this.shadowRoot.querySelector("#banner"),this.menu=this.shadowRoot.querySelector("#menu"),this.people=this.shadowRoot.querySelector("#people"),this.triggerEl=this.shadowRoot.querySelector("#triggerEl"),this.header=null}connectedCallback(){const i=this.shadowRoot.querySelector("slot").assignedElements()[0];this.menu.append(i.querySelector(".miles-office-menu")),this.trigger=i.querySelector("h2"),this.setAttribute("id",this.trigger.textContent.replace(/\s/g,"").toLowerCase()),this.trigger.innerHTML=`<span>${this.trigger.textContent}</span><miles-arrow class="open" style="margin-left:1rem;"></miles-arrow>`,this.triggerEl.append(this.trigger),this.banner.append(i.querySelector(".feature-image"));const t=this.menu.querySelectorAll("miles-business-card");t&&t.forEach(n=>{this.people.append(n)});const r=this.banner.getBoundingClientRect();this.trigger&&r.width>769?(this.trigger.setAttribute("style","cursor: pointer; "),this.trigger.addEventListener("click",this.toggleMenu)):(this.triggerEl.querySelector("miles-arrow").classList.add("open"),this.menu.classList.add("open"),this.banner.classList.add("open"))}disconnectedCallback(){this.trigger.removeEventListener("click",this.toggleMenu)}}const de="miles-office-banner";customElements.get(de)||customElements.define(de,ae);const Ne=`:host{display:inline-block;transform:rotate(180deg);transition:transform .5s cubic-bezier(.46,.03,.52,.96)}#arrow{justify-content:center;display:flex;width:inherit;height:inherit;align-items:center}:host(.open){transform:rotate(0)}svg{width:inherit;height:inherit}
`,ce=document.createElement("template");ce.innerHTML=`
  <style>
	${Ne}

  ${o}
    </style>
    <div id="arrow">
    <svg width="24" height="41" viewBox="0 0 24 41" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3.20039 40.8984L0.400391 38.0484L17.5504 20.8984L0.400391 3.74844L3.20039 0.898438L23.2004 20.8984L3.20039 40.8984Z" fill="#FCF8F3"/>
    </svg>
    
    </div>
   `;class he extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.append(ce.content.cloneNode(!0))}}const me="miles-arrow";customElements.get(me)||customElements.define(me,he);const Be=`:host{display:block;color:inherit;--image-width: 120px}#card-wrapper{box-sizing:border-box}#card{max-width:400px;margin:0 auto;background-color:var(--miles_secondary_four);border-radius:4px;display:flex;flex-direction:row;gap:1em}#card.author{max-width:100%;background-color:transparent}#card.wide{flex-direction:column;background-color:transparent}@media (min-width: 768px){#card.wide{max-width:100%;margin:0;max-height:calc(var(--image-width) / 2);flex-direction:row}}h3{margin:0}#title{margin-bottom:.5em}#card.wide span#title{order:0}#card.wide #name{order:1}#card.wide span{order:2}figure{margin:0;padding:0;aspect-ratio:1/1;width:var(--image-width);min-width:var(--image-width);overflow:hidden}@media (min-width: 768px){#card.wide figure{justify-content:center;display:flex;aspect-ratio:2 / 3;width:var(--image-width);min-width:var(--image-width);background-color:#fff}}::slotted(img),img{object-fit:cover;width:100%;background-color:#fff;filter:grayscale(1);aspect-ratio:1 / 1;border-radius:50%}#card.wide ::slotted(img),#card.wide img{border-radius:0;aspect-ratio:1 / 1;min-width:100%}@media (min-width: 768px){#card.wide ::slotted(img),#card.wide img{width:calc(var(--image-width) / 2);min-width:calc(var(--image-width) / 2)}}::slotted(*){color:inherit}#extras{background-color:var(--miles_secondary_four)}a,span{color:inherit;text-decoration:none;display:inline}span{display:flex;flex-direction:column;overflow:hidden;line-height:1.2em;gap:.2em}#card.wide span{flex-direction:row}#group{display:flex;flex-direction:column;gap:.2em}#card.author #group{justify-content:center;display:flex;flex-direction:column;gap:.5em}#card.wide #group{background-color:#f8ebe8;width:unset;padding:1rem 2rem;justify-content:center}@media (min-width: 768px){#card.wide #group{padding:0 2rem;width:100%}}#email_el,#phone_el{display:none}
`,pe=document.createElement("template");pe.innerHTML=`
  <style>
	${Be}

  ${o}
    </style>
  <div id="card-wrapper">
      <div id="card">
      <figure>
        <slot name="image"></slot>
      </figure>
      <div id="group">
        <h3 id="name"></h3>
        <span id="title"></span>
        <span id="email_el">Epost: <a id="email"></a></span>
        <span id="phone_el">Telefon: <a id="phone"></a></span>
      </div>
    </div>
      <div id="extras">
        <slot></slot>
      </div>
    </div>
    `;class p extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.append(pe.content.cloneNode(!0)),this.emailEl=this.shadowRoot.querySelector("#email"),this.nameEl=this.shadowRoot.querySelector("#name"),this.phoneEl=this.shadowRoot.querySelector("#phone"),this.titleEl=this.shadowRoot.querySelector("#title"),this.firgureEl=this.shadowRoot.querySelector("figure"),this.card=this.shadowRoot.querySelector("#card")}static get observedAttributes(){return["email","name","phone","jobtitle","image","variant"]}attributeChangedCallback(e,i,t){if(e==="email"&&(this.emailEl.setAttribute("href",`mailto:${t}`),this.phoneEl.style.display="block",this.emailEl.textContent=t),e==="name"&&(this.nameEl.textContent=t),e==="phone"&&(this.phoneEl.setAttribute("href",`tel:${t}`),this.phoneEl.style.display="block",this.phoneEl.textContent=t),e==="jobtitle"&&(this.titleEl.textContent=t),e==="image"){const r=document.createElement("img");r.setAttribute("src",t),this.firgureEl.append(r)}e==="variant"&&(t==="wide"&&(this.card.classList.add("wide"),this.style.setProperty("--image-width","320px")),t==="author"&&(this.card.classList.add("author"),this.style.setProperty("--image-width","180px")))}connectedCallback(){}disconnectedCallback(){}}const ge="miles-business-card";customElements.get(ge)||customElements.define(ge,p);class ue extends p{constructor(){super()}connectedCallback(){super.connectedCallback(),this.setAttribute("variant","author")}attributeChangedCallback(e,i,t){e!=="phone"&&e!=="email"&&super.attributeChangedCallback(e,i,t)}}const fe="miles-author-card";customElements.get(fe)||customElements.define(fe,ue);const ze=`:host{display:block;color:inherit}@media (min-width: 768px){:host{padding-left:calc(8rem - 2em)}}#wrapper{border:4px solid var(--miles_secondary_four);color:var(--miles_secondary_three);border-radius:2em;padding:2em;position:relative;line-height:2.5em}#heading{max-width:100%;background-color:var(--miles_secondary_four);color:var(--miles_primary_light);border-radius:2em;padding:1em 2em;position:relative;z-index:5;left:-4rem;margin-bottom:4rem}@media (min-width: 768px){#heading{max-width:60%;left:-8rem}}p,p::slotted(*){font-size:1rem;line-height:2.5rem;font-weight:400}
`,ve=document.createElement("template");ve.innerHTML=`
  <style>
	${ze}

  ${o}
    </style>
    <div id="wrapper">
    <div id="heading">
      <h2><slot name="heading"></slot></h2>
    </div>
      <p><slot></slot></p>
    </div>
    `;class be extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.append(ve.content.cloneNode(!0)),this.headingEl=this.shadowRoot.querySelector("h2")}static get observedAttributes(){return["heading"]}attributeChangedCallback(e,i,t){e==="heading"&&(this.headingEl.textContent=t)}connectedCallback(){}disconnectedCallback(){}}const we="miles-info-block";customElements.get(we)||customElements.define(we,be);const Pe=`:host{display:inline-block;color:inherit}#wrapper{background-color:var(--miles_secondary_four);display:flex;flex-direction:column}h2{margin:0}a{text-decoration:none;color:inherit}#address,#phone{margin-bottom:1rem}
`,ye=document.createElement("template");ye.innerHTML=`
  <style>
	${Pe}

  ${o}
    </style>
    <div id="wrapper">
      <h2></h2>
      <div id="address"></div>
      <a id="email"></a>
      <a id="phone"></a>
      <div id="orgnrlabel">Organisasjonsnummer:</div>
      <div aria-describedby="ordnrlabel" id="orgnr"></div>
    </div>
    `;class xe extends HTMLElement{constructor(){super(),this.attachShadow({mode:"open"}),this.shadowRoot.append(ye.content.cloneNode(!0)),this.nameEl=this.shadowRoot.querySelector("h2"),this.adresseEl=this.shadowRoot.querySelector("#address"),this.emailEl=this.shadowRoot.querySelector("#email"),this.phoneEl=this.shadowRoot.querySelector("#phone"),this.orgnrEl=this.shadowRoot.querySelector("#orgnr")}static get observedAttributes(){return["name","address","email","phone","orgnr","image"]}attributeChangedCallback(e,i,t){e==="name"&&(this.nameEl.textContent=t),e==="address"&&(this.adresseEl.textContent=t),e==="email"&&(this.emailEl.setAttribute("href",`mailto:${t}`),this.emailEl.textContent=t),e==="phone"&&(this.phoneEl.setAttribute("href",`tel:${t}`),this.phoneEl.textContent=t),e==="orgnr"&&(this.orgnrEl.textContent=t)}connectedCallback(){}disconnectedCallback(){}}const Ce="miles-contact-card";customElements.get(Ce)||customElements.define(Ce,xe),s.MilesArrow=he,s.MilesArrowNav=W,s.MilesAuthorCard=ue,s.MilesBlogCard=ie,s.MilesBulb=E,s.MilesBusinessCard=p,s.MilesButtonAnchor=z,s.MilesCloud=f,s.MilesContactCard=xe,s.MilesCup=A,s.MilesCurve=x,s.MilesFagbloggTeaser=Y,s.MilesImageSlider=J,s.MilesInfo=O,s.MilesInfoBlock=be,s.MilesLogo=R,s.MilesOfficeBanner=ae,s.MilesOverlapBlock=re,s.MilesPodcastTeaser=D,s.MilesPodd=H,s.MilesProfileCard=I,s.MilesZoom=S,Object.defineProperty(s,Symbol.toStringTag,{value:"Module"})});
//# sourceMappingURL=miles-wc.umd.js.map
