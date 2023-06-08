import styles from './audioplayer.css?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles Audio Player
 */

const MilesAudioPlayerTemplate = document.createElement('template');
MilesAudioPlayerTemplate.innerHTML = `
  <style>
	${styles}\n
  ${cssVariables}
    </style>
	<div id="milesplayer">
		<audio id="player" controls></audio>
    <miles-seek direction="backward"></miles-seek>
        <div class="progress-indicator">
          <input type="range" max="100" value="0" id="progressbar">
        </div>
      <miles-seek direction="forward"></miles-seek>
    <div id="progresstime"></div>
		<button id="play" data-playing="false"><miles-play></miles-play></button>
	</div>
`;

class MilesAudioPlayer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.append(MilesAudioPlayerTemplate.content.cloneNode(true));
    this.audioEl = this.shadowRoot.querySelector('#milesplayer');
    this.audioPlayerEl = this.shadowRoot.querySelector('#player');
    this.playButtonEl = this.shadowRoot.querySelector('#play');
    this.progresstimeEl = this.shadowRoot.querySelector('#progresstime');
    this.progressbarEl = this.shadowRoot.querySelector('#progressbar');
    this.backwardSeekEl = this.shadowRoot.querySelector(
      'miles-seek[direction="backward"]'
    );
    this.forwardSeekEl = this.shadowRoot.querySelector(
      'miles-seek[direction="forward"]'
    );

    this.audioContext;
  }

  static get observedAttributes() {
    return ['src'];
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === 'src') {
      this.audioPlayerEl.src = newValue;
    }
  }

  connectedCallback() {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    this.audioContext = new AudioContext();
    const track = this.audioContext.createMediaElementSource(
      this.audioPlayerEl
    );
    track.connect(this.audioContext.destination);

    this.playButtonEl.addEventListener('click', this.play);
    this.audioPlayerEl.addEventListener(
      'durationchange',
      this.durationChnagehandler
    );

    this.audioPlayerEl.addEventListener('progress', this.durationChnagehandler);

    this.audioPlayerEl.addEventListener('timeupdate', this.timeUpdateHandler);

    this.audioPlayerEl.addEventListener(
      'loadedmetadata',
      this.loadMetadataHandler
    );

    this.progressbarEl.addEventListener('change', this.progressChangeHandler);

    this.forwardSeekEl.addEventListener('click', () => this.forwardSeek(15));
    this.backwardSeekEl.addEventListener('click', () => this.backwardSeek(15));
  }

  disconnectedCallback() {
    this.playButtonEl.removeEventListener('click', this.play);
    this.audioPlayerEl.removeEventListener(
      'durationchange',
      this.durationChnagehandler
    );
    this.audioPlayerEl.removeEventListener(
      'progress',
      this.durationChnagehandler
    );

    this.audioPlayerEl.removeEventListener(
      'loadedmetadata',
      this.loadMetadataHandler
    );

    this.progressbarEl.removeEventListener(
      'change',
      this.progressChangeHandler
    );
  }

  getTimeString(time) {
    const secs = `${parseInt(`${time % 60}`, 10)}`.padStart(2, '0');
    const min = parseInt(`${(time / 60) % 60}`, 10);

    return `${min}:${secs}`;
  }

  forwardSeek = seconds => {
    this.audioPlayerEl.currentTime = this.audioPlayerEl.currentTime + seconds;
  };

  backwardSeek = seconds => {
    this.audioPlayerEl.currentTime = this.audioPlayerEl.currentTime - seconds;
  };

  durationChnagehandler = event => {
    console.log(event.target.duration);
  };

  timeUpdateHandler = () => {
    this.progresstimeEl.textContent = `${this.getTimeString(
      this.audioPlayerEl.currentTime
    )} / ${this.getTimeString(this.audioPlayerEl.duration)}`;
    this.progressbarEl.setAttribute('value', this.audioPlayerEl.currentTime);

    this.updateProgress();
  };

  progressChangeHandler = () => {
    this.audioPlayerEl.currentTime = this.progressbarEl.value;
    this.updateProgress();
  };

  loadMetadataHandler = () => {
    this.progressbarEl.max = this.audioPlayerEl.duration;
    this.progresstimeEl.textContent = `0:00 / ${this.getTimeString(
      this.audioPlayerEl.duration
    )}`;

    this.updateProgress();
  };

  updateProgress = () => {
    console.log('progress');
    let target = this.progressbarEl;

    const min = 0;
    const max = target.max || 100;
    const val = this.audioPlayerEl.currentTime;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + '% 100%';
  };

  play = () => {
    // Check if context is in suspended state (autoplay policy)
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }

    // Play or pause track depending on state
    if (this.playButtonEl.dataset.playing === 'false') {
      this.audioPlayerEl.play();
      this.playButtonEl.dataset.playing = 'true';
      this.playButtonEl.innerHTML = '<miles-pause></miles-pause>';
    } else if (this.playButtonEl.dataset.playing === 'true') {
      this.audioPlayerEl.pause();
      this.playButtonEl.dataset.playing = 'false';
      this.playButtonEl.innerHTML = '<miles-play></miles-play>';
    }
  };
}

const MilesAudioPlayerName = 'miles-audio-player';

if (!customElements.get(MilesAudioPlayerName)) {
  customElements.define(MilesAudioPlayerName, MilesAudioPlayer);
}

export default MilesAudioPlayer;
export { MilesAudioPlayer };
