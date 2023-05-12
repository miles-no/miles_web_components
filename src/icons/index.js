import cssVariables from '../styles/variables.css?inline';
/**
 * Miles Cloud
 */

const templateCloud = document.createElement('template');
templateCloud.innerHTML = `
  <style>
    ${cssVariables}\n

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
  `;

class MilesCloud extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(templateCloud.content.cloneNode(true));
    this.svg = shadow.querySelector('svg');
  }

  static get observedAttributes() {
    return ['width', 'height', 'color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'width') {
      this.svg.setAttribute('width', newValue);
    }
    if (name === 'height') {
      this.svg.setAttribute('height', newValue);
    }
    if (name === 'color') {
      this.svg.setAttribute('fill', newValue);
    }
  }
}

const MilesCloudName = 'miles-cloud';

if (!customElements.get(MilesCloudName)) {
  customElements.define(MilesCloudName, MilesCloud);
}

/**
 * Miles heart
 */

const templateHeart = document.createElement('template');
templateHeart.innerHTML = ` 
  <style>
    ${cssVariables}\n
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
    `;

class MilesHeart extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(templateHeart.content.cloneNode(true));
    this.svg = shadow.querySelector('svg');
  }

  static get observedAttributes() {
    return ['width', 'height', 'color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'width') {
      this.svg.setAttribute('width', newValue);
    }
    if (name === 'height') {
      this.svg.setAttribute('height', newValue);
    }
    if (name === 'color') {
      this.svg.setAttribute('fill', newValue);
    }
  }
}

const MilesHeartName = 'miles-heart';

if (!customElements.get(MilesHeartName)) {
  customElements.define(MilesHeartName, MilesHeart);
}

/**
 * Miles Curve
 */

const templateCurve = document.createElement('template');
templateCurve.innerHTML = `
    <style>
      ${cssVariables}\n
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
      `;

class MilesCurve extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(templateCurve.content.cloneNode(true));
    this.svg = shadow.querySelector('svg');
  }

  static get observedAttributes() {
    return ['width', 'height', 'color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'width') {
      this.svg.setAttribute('width', newValue);
    }
    if (name === 'height') {
      this.svg.setAttribute('height', newValue);
    }
    if (name === 'color') {
      this.svg.setAttribute('fill', newValue);
    }
  }
}

const MilesCurveName = 'miles-curve';

if (!customElements.get(MilesCurveName)) {
  customElements.define(MilesCurveName, MilesCurve);
}

/**
 * Miles Bulb
 */

const templateBulb = document.createElement('template');
templateBulb.innerHTML = `
    <style>
        ${cssVariables}\n
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
    `;

class MilesBulb extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(templateBulb.content.cloneNode(true));
    this.svg = shadow.querySelector('svg');
  }

  static get observedAttributes() {
    return ['width', 'height', 'color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'width') {
      this.svg.setAttribute('width', newValue);
    }
    if (name === 'height') {
      this.svg.setAttribute('height', newValue);
    }
    if (name === 'color') {
      this.svg.setAttribute('fill', newValue);
    }
  }
}

const MilesBulbName = 'miles-bulb';

if (!customElements.get(MilesBulbName)) {
  customElements.define(MilesBulbName, MilesBulb);
}

/**
 * Miles Cup
 */

const templateCup = document.createElement('template');
templateCup.innerHTML = `
    <style>
      ${cssVariables}\n
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
      `;

class MilesCup extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(templateCup.content.cloneNode(true));
    this.svg = shadow.querySelector('svg');
  }

  static get observedAttributes() {
    return ['width', 'height', 'color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'width') {
      this.svg.setAttribute('width', newValue);
    }
    if (name === 'height') {
      this.svg.setAttribute('height', newValue);
    }
    if (name === 'color') {
      this.svg.setAttribute('fill', newValue);
    }
  }
}

const MilesCupName = 'miles-cup';

if (!customElements.get(MilesCupName)) {
  customElements.define(MilesCupName, MilesCup);
}

/**
 * Miles Zoom
 */
class MilesZoom extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.innerHTML = `
        <style>
          ${cssVariables}\n
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
      `;
  }
}

const MilesZoomName = 'miles-zoom';

if (!customElements.get(MilesZoomName)) {
  customElements.define(MilesZoomName, MilesZoom);
}

const templatePodd = document.createElement('template');
templatePodd.innerHTML = `
          <style>
            ${cssVariables}\n
            :host {
              display: inline-block;
              color: var(--miles_primary_light, #fbf0e5);
              
            }

            path {
              transition: fill 0.5s cubic-bezier(0.42, 0.16, 0.07, 0.96);
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
        `;

/**
 * Miles Podcast Icon
 */
class MilesPodd extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(templatePodd.content.cloneNode(true));
    this.svgEl = shadow.querySelector('path');
  }

  static get observedAttributes() {
    return ['color'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'color') {
      if (newValue && newValue.length > 0) {
        this.svgEl.setAttribute('fill', newValue);
      } else {
        this.svgEl.setAttribute('fill', 'currentColor');
      }
    }
  }
}

const MilesPoddName = 'miles-pod';

if (!customElements.get(MilesPoddName)) {
  customElements.define(MilesPoddName, MilesPodd);
}

export default MilesPoddName;
export { MilesZoom, MilesPodd, MilesCloud, MilesCup, MilesBulb, MilesCurve };
