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
        .curve {
          transform: inherit;
        }
        
        svg {
          color: inherit;
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
        <path d="M21.6008 21.6C27.5655 21.6 32.4008 16.7647 32.4008 10.8C32.4008 4.83532 27.5655 0 21.6008 0C15.6361 0 10.8008 4.83532 10.8008 10.8C10.8008 16.7647 15.6361 21.6 21.6008 21.6Z" fill="currentColor"/>
        <path d="M22.545 27.0276C15.174 26.7576 0 30.4296 0 37.8006V43.2006H25.758C19.089 35.7486 22.437 27.2976 22.545 27.0276Z" fill="currentColor"/>
        <path d="M47.061 37.8536C48.033 36.2606 48.6 34.3976 48.6 32.3996C48.6 26.4326 43.767 21.5996 37.8 21.5996C31.833 21.5996 27 26.4326 27 32.3996C27 38.3666 31.833 43.1996 37.8 43.1996C39.798 43.1996 41.661 42.6056 43.254 41.6606L50.193 48.5996L54 44.7926L47.061 37.8536ZM37.8 37.7996C34.83 37.7996 32.4 35.3696 32.4 32.3996C32.4 29.4296 34.83 26.9996 37.8 26.9996C40.77 26.9996 43.2 29.4296 43.2 32.3996C43.2 35.3696 40.77 37.7996 37.8 37.7996Z" fill="currentColor"/>
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
              transition: all 1s cubic-bezier(0.42, 0.16, 0.07, 0.96);
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
        this.svgEl.style.transform = 'scale(1.03)';
      } else {
        this.svgEl.setAttribute('fill', 'currentColor');
        this.svgEl.style.transform = 'scale(1)';
      }
    }
  }
}

const MilesPoddName = 'miles-pod';

if (!customElements.get(MilesPoddName)) {
  customElements.define(MilesPoddName, MilesPodd);
}

/**
 * Miles Phone Icon
 */

const templatePhone = document.createElement('template');
templatePhone.innerHTML = `
      <style> 
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <svg width="14" height="22" viewBox="0 0 14 22" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M1.5 22C1.1 22 0.75 21.85 0.45 21.55C0.15 21.25 0 20.9 0 20.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H12.5C12.9 0 13.25 0.15 13.55 0.45C13.85 0.75 14 1.1 14 1.5V20.5C14 20.9 13.85 21.25 13.55 21.55C13.25 21.85 12.9 22 12.5 22H1.5ZM1.5 19.75V20.5H12.5V19.75H1.5ZM1.5 18.25H12.5V3.75H1.5V18.25ZM1.5 2.25H12.5V1.5H1.5V2.25Z" fill="currentColor"/>
      </svg>
`;

class MilesPhone extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(templatePhone.content.cloneNode(true));
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

const MilesPhoneName = 'miles-phone';

if (!customElements.get(MilesPhoneName)) {
  customElements.define(MilesPhoneName, MilesPhone);
}

/**
 * Miles Email Icon
 */

const templateEmail = document.createElement('template');
templateEmail.innerHTML = `
      <style>
        :host {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      </style>
      <svg width="20" height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 16C1.1 16 0.75 15.85 0.45 15.55C0.15 15.25 0 14.9 0 14.5V1.5C0 1.1 0.15 0.75 0.45 0.45C0.75 0.15 1.1 0 1.5 0H18.5C18.9 0 19.25 0.15 19.55 0.45C19.85 0.75 20 1.1 20 1.5V14.5C20 14.9 19.85 15.25 19.55 15.55C19.25 15.85 18.9 16 18.5 16H1.5ZM18.5 2.875L10.4 8.175C10.3333 8.20833 10.2708 8.2375 10.2125 8.2625C10.1542 8.2875 10.0833 8.3 10 8.3C9.91667 8.3 9.84583 8.2875 9.7875 8.2625C9.72917 8.2375 9.66667 8.20833 9.6 8.175L1.5 2.875V14.5H18.5V2.875ZM10 6.95L18.4 1.5H1.625L10 6.95ZM1.5 3.05V2.06708V2.08538V1.5V2.075V2.0522V3.05Z" fill="currentColor"/>
</svg>

`;

class MilesEmail extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(templateEmail.content.cloneNode(true));
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

const MilesEmailName = 'miles-email';

if (!customElements.get(MilesEmailName)) {
  customElements.define(MilesEmailName, MilesEmail);
}

/**
 * Miles Play Icon
 */

const templatePlay = document.createElement('template');
templatePlay.innerHTML = `
      <style></style>
      <svg xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 -960 960 960" width="64">
        <path fill="#EB4645" d="m418-332 202-129q11-7 11-19t-11-19L418-628q-11-8-23-1.5T383-609v258q0 14 12 20.5t23-1.5Zm62 252q-82 0-155-31.5t-127.5-86Q143-252 111.5-325T80-480q0-83 31.5-156t86-127Q252-817 325-848.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 82-31.5 155T763-197.5q-54 54.5-127 86T480-80Zm0-60q142 0 241-99.5T820-480q0-142-99-241t-241-99q-141 0-240.5 99T140-480q0 141 99.5 240.5T480-140Zm0-340Z"/>
      </svg>

  `;

class MilesPlay extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(templatePlay.content.cloneNode(true));
  }
}

const MilesPlayName = 'miles-play';

if (!customElements.get(MilesPlayName)) {
  customElements.define(MilesPlayName, MilesPlay);
}

/**
 * Miles Pause Icon
 */

const templatePause = document.createElement('template');
templatePause.innerHTML = `
      <style></style>
<svg xmlns="http://www.w3.org/2000/svg" height="64" viewBox="0 -960 960 960" width="64">
  <path fill="#EB4645" d="M400.175-320q12.825 0 21.325-8.625T430-350v-260q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T370-610v260q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625Zm160 0q12.825 0 21.325-8.625T590-350v-260q0-12.75-8.675-21.375-8.676-8.625-21.5-8.625-12.825 0-21.325 8.625T530-610v260q0 12.75 8.675 21.375 8.676 8.625 21.5 8.625ZM480.266-80q-82.734 0-155.5-31.5t-127.266-86q-54.5-54.5-86-127.341Q80-397.681 80-480.5q0-82.819 31.5-155.659Q143-709 197.5-763t127.341-85.5Q397.681-880 480.5-880q82.819 0 155.659 31.5Q709-817 763-763t85.5 127Q880-563 880-480.266q0 82.734-31.5 155.5T763-197.684q-54 54.316-127 86Q563-80 480.266-80Zm.234-60Q622-140 721-239.5t99-241Q820-622 721.188-721 622.375-820 480-820q-141 0-240.5 98.812Q140-622.375 140-480q0 141 99.5 240.5t241 99.5Zm-.5-340Z"/>
</svg>   
  `;

class MilesPause extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });
    shadow.appendChild(templatePause.content.cloneNode(true));
  }
}

const MilesPauseName = 'miles-pause';

if (!customElements.get(MilesPauseName)) {
  customElements.define(MilesPauseName, MilesPause);
}

class MilesAudioSeek extends HTMLElement {
  constructor() {
    super();
    this.shadow = this.attachShadow({ mode: 'open' });
  }

  static get observedAttributes() {
    return ['direction'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'direction') {
      if (newValue === 'forward') {
        this.shadow.innerHTML = `
          <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_908_340)">
            <path d="M16.6728 32C20.8803 32 24.4877 30.5852 27.4952 27.7556C30.5027 24.9259 32.1694 21.437 32.4953 17.2889C32.525 16.9333 32.4138 16.6222 32.162 16.3556C31.9101 16.0889 31.5916 15.9556 31.2064 15.9556C30.8508 15.9556 30.5471 16.0815 30.2953 16.3333C30.0434 16.5852 29.8879 16.9037 29.8286 17.2889C29.5027 20.6963 28.0952 23.5556 25.6063 25.8667C23.1173 28.1778 20.1395 29.3333 16.6728 29.3333C12.9097 29.3333 9.72445 28.0148 7.11699 25.3778C4.50952 22.7407 3.20579 19.5407 3.20579 15.7778C3.20579 12.1037 4.52434 9 7.16143 6.46667C9.79853 3.93333 12.969 2.66667 16.6728 2.66667C18.6876 2.66667 20.5765 3.12593 22.3395 4.04444C24.1025 4.96296 25.6359 6.17778 26.9396 7.68889L23.6062 7.68889C23.221 7.68889 22.9025 7.81481 22.6507 8.06667C22.3988 8.31852 22.2729 8.63704 22.2729 9.02222C22.2729 9.40741 22.3988 9.72593 22.6507 9.97778C22.9025 10.2296 23.221 10.3556 23.6062 10.3556H30.2286C30.6138 10.3556 30.9323 10.2296 31.1842 9.97778C31.436 9.72593 31.562 9.40741 31.562 9.02222V2.44444C31.562 2.05926 31.436 1.74074 31.1842 1.48889C30.9323 1.23704 30.6138 1.11111 30.2286 1.11111C29.8434 1.11111 29.5249 1.23704 29.273 1.48889C29.0212 1.74074 28.8952 2.05926 28.8952 2.44444V5.82222C27.3545 4.01481 25.5248 2.59259 23.4062 1.55556C21.2877 0.518519 19.0432 0 16.6728 0C14.4505 0 12.3615 0.414815 10.4059 1.24444C8.45035 2.07407 6.7392 3.20741 5.2725 4.64444C3.8058 6.08148 2.65022 7.76296 1.80576 9.68889C0.961298 11.6148 0.539062 13.6889 0.539062 15.9111C0.539062 18.1333 0.961298 20.2222 1.80576 22.1778C2.65022 24.1333 3.8058 25.837 5.2725 27.2889C6.7392 28.7407 8.45035 29.8889 10.4059 30.7333C12.3615 31.5778 14.4505 32 16.6728 32Z" fill="#EB4645"/>
            <path d="M10.4964 22.4348V13.9594L8.53711 15.1652V13.171L10.4964 12H12.3398V22.4348H10.4964Z" fill="#EB4645"/>
            <path d="M19.661 22.6667C18.8649 22.6667 18.1577 22.4271 17.5394 21.9478C16.9211 21.4686 16.4999 20.8464 16.2757 20.0812L18.0147 19.6174C18.1152 20.0271 18.3316 20.3517 18.664 20.5913C18.9963 20.8232 19.3557 20.9391 19.7422 20.9391C20.2291 20.9391 20.6464 20.7652 20.9942 20.4174C21.3421 20.0696 21.516 19.6522 21.516 19.1652C21.516 18.8328 21.4348 18.5314 21.2725 18.2609C21.1179 17.9826 20.9015 17.7662 20.6233 17.6116C20.3527 17.4493 20.059 17.3681 19.7422 17.3681C19.348 17.3681 19.0195 17.4415 18.7567 17.5884C18.5017 17.7275 18.3084 17.8744 18.177 18.029L16.6351 17.542L16.9597 12H22.6405V13.6812H17.9336L18.5828 13.0783L18.3625 16.9159L18.0147 16.4754C18.2853 16.228 18.5983 16.0464 18.9538 15.9304C19.3093 15.8068 19.6533 15.7449 19.9856 15.7449C20.6349 15.7449 21.2107 15.8918 21.713 16.1855C22.2232 16.4792 22.6212 16.885 22.9072 17.4029C23.1931 17.9208 23.3361 18.5082 23.3361 19.1652C23.3361 19.8145 23.1661 20.4058 22.826 20.9391C22.4937 21.4647 22.0454 21.886 21.4812 22.2029C20.9247 22.5121 20.318 22.6667 19.661 22.6667Z" fill="#EB4645"/>
            </g>
            <defs>
            <clipPath id="clip0_908_340">
            <rect width="31.9609" height="32" fill="white" transform="matrix(-1 0 0 1 32.5 0)"/>
            </clipPath>
            </defs>
          </svg>
        `;
      } else {
        this.shadow.innerHTML = `
        <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_908_346)">
            <path d="M16.339 32C12.1315 32 8.52398 30.5852 5.51651 27.7556C2.50903 24.9259 0.84233 21.437 0.516397 17.2889C0.486767 16.9333 0.59788 16.6222 0.849738 16.3556C1.1016 16.0889 1.42012 15.9556 1.80531 15.9556C2.16088 15.9556 2.46459 16.0815 2.71645 16.3333C2.9683 16.5852 3.12386 16.9037 3.18312 17.2889C3.50906 20.6963 4.91649 23.5556 7.40544 25.8667C9.89438 28.1778 12.8722 29.3333 16.339 29.3333C20.102 29.3333 23.2873 28.0148 25.8947 25.3778C28.5022 22.7407 29.8059 19.5407 29.8059 15.7778C29.8059 12.1037 28.4874 9 25.8503 6.46667C23.2132 3.93333 20.0428 2.66667 16.339 2.66667C14.3241 2.66667 12.4352 3.12593 10.6722 4.04444C8.90917 4.96296 7.37581 6.17778 6.07207 7.68889H9.40548C9.79067 7.68889 10.1092 7.81481 10.3611 8.06667C10.6129 8.31852 10.7388 8.63704 10.7388 9.02222C10.7388 9.40741 10.6129 9.72593 10.3611 9.97778C10.1092 10.2296 9.79067 10.3556 9.40548 10.3556H2.78311C2.39792 10.3556 2.07939 10.2296 1.82754 9.97778C1.57568 9.72593 1.44975 9.40741 1.44975 9.02222V2.44444C1.44975 2.05926 1.57568 1.74074 1.82754 1.48889C2.07939 1.23704 2.39792 1.11111 2.78311 1.11111C3.16831 1.11111 3.48683 1.23704 3.73869 1.48889C3.99055 1.74074 4.11648 2.05926 4.11648 2.44444V5.82222C5.65725 4.01482 7.48692 2.59259 9.60549 1.55556C11.724 0.518519 13.9685 0 16.339 0C18.5612 0 20.6502 0.414815 22.6058 1.24444C24.5614 2.07407 26.2725 3.20741 27.7392 4.64444C29.2059 6.08148 30.3615 7.76296 31.206 9.68889C32.0504 11.6148 32.4727 13.6889 32.4727 15.9111C32.4727 18.1333 32.0504 20.2222 31.206 22.1778C30.3615 24.1333 29.2059 25.837 27.7392 27.2889C26.2725 28.7407 24.5614 29.8889 22.6058 30.7333C20.6502 31.5778 18.5612 32 16.339 32Z" fill="#EB4645"/>
            <path d="M10.4709 22.4348V13.9594L8.51172 15.1652V13.171L10.4709 12H12.3141V22.4348H10.4709Z" fill="#EB4645"/>
            <path d="M19.6348 22.6667C18.8387 22.6667 18.1316 22.4271 17.5133 21.9478C16.8951 21.4686 16.4739 20.8464 16.2497 20.0812L17.9886 19.6174C18.0891 20.0271 18.3055 20.3517 18.6378 20.5913C18.9701 20.8232 19.3295 20.9391 19.7159 20.9391C20.2028 20.9391 20.6201 20.7652 20.9679 20.4174C21.3157 20.0696 21.4896 19.6522 21.4896 19.1652C21.4896 18.8328 21.4084 18.5314 21.2461 18.2609C21.0916 17.9826 20.8752 17.7662 20.5969 17.6116C20.3265 17.4493 20.0328 17.3681 19.7159 17.3681C19.3218 17.3681 18.9933 17.4415 18.7305 17.5884C18.4755 17.7275 18.2823 17.8744 18.1509 18.029L16.6091 17.542L16.9337 12H22.6141V13.6812H17.9075L18.5567 13.0783L18.3364 16.9159L17.9886 16.4754C18.2591 16.228 18.5721 16.0464 18.9276 15.9304C19.2831 15.8068 19.627 15.7449 19.9594 15.7449C20.6085 15.7449 21.1843 15.8918 21.6866 16.1855C22.1967 16.4792 22.5947 16.885 22.8807 17.4029C23.1666 17.9208 23.3096 18.5082 23.3096 19.1652C23.3096 19.8145 23.1396 20.4058 22.7995 20.9391C22.4672 21.4647 22.019 21.886 21.4548 22.2029C20.8984 22.5121 20.2917 22.6667 19.6348 22.6667Z" fill="#EB4645"/>
            </g>
            <defs>
            <clipPath id="clip0_908_346">
            <rect width="31.9609" height="32" fill="white" transform="translate(0.5)"/>
            </clipPath>
            </defs>
      </svg>
`;
      }
    }
  }
}

const MilesAudioSeekName = 'miles-seek';

if (!customElements.get(MilesAudioSeekName)) {
  customElements.define(MilesAudioSeekName, MilesAudioSeek);
}

export default MilesPoddName;
export {
  MilesZoom,
  MilesPodd,
  MilesCloud,
  MilesCup,
  MilesBulb,
  MilesCurve,
  MilesPhone,
  MilesEmail,
  MilesPlay,
  MilesPause,
  MilesAudioSeek,
};
