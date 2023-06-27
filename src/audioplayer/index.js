import styles from './audioplayer.scss?inline';
import cssVariables from '../styles/variables.css?inline';

/**
 * Miles Audio Player
 */

const MilesAudioPlayerTemplate = document.createElement('template');
MilesAudioPlayerTemplate.innerHTML = `
  <style>
	${styles}
    ${cssVariables}
    </style>
    <div id="milesplayer" class="player">
      <audio id="player" crossorigin controls></audio>
        <button class="button button--back" id="backward" aria-label="seek" aria-description="seek 15 seconds backwards"><miles-seek direction="backward"></miles-seek></button>
        <div class="player__progress">
          <input type="range" max="100" value="0" id="progressbar" class="input">
        </div>
        <button class="button button--forward" id="forward" aria-label="seek" aria-description="seek 15 seconds forward"><miles-seek direction="forward"></miles-seek></button>
        <div class="player__time"><span id="current"></span><span id="length"></span></div>
        <button class="button button--play-pause" id="play" aria-label="play" aria-description="Play and pause sound playback" data-playing="false"><miles-play></miles-play></button>
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
    this.progressCurrentEl = this.shadowRoot.querySelector('#current');
    this.progressTotalLengthEl = this.shadowRoot.querySelector('#length');
    this.progressbarEl = this.shadowRoot.querySelector('#progressbar');
    this.backwardSeekEl = this.shadowRoot.querySelector('#backward');
    this.forwardSeekEl = this.shadowRoot.querySelector('#forward');

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
      'loadedmetadata',
      this.loadMetadataHandler
    );

    this.progressbarEl.removeEventListener(
      'change',
      this.progressChangeHandler
    );
  }

  getTimeString(time) {
    if (isNaN(time)) return '00:00';

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

  timeUpdateHandler = () => {
    this.progressCurrentEl.textContent = this.getTimeString(this.audioPlayerEl.currentTime);
    this.progressTotalLengthEl.textContent = this.getTimeString(this.audioPlayerEl.duration);

    this.progressbarEl.setAttribute('value', this.audioPlayerEl.currentTime);

    this.updateProgress();
  };

  progressChangeHandler = () => {
    this.audioPlayerEl.currentTime = this.progressbarEl.value;
    this.updateProgress();
  };

  loadMetadataHandler = () => {
    this.progressbarEl.max = this.audioPlayerEl.duration;


    this.progressCurrentEl.textContent = '0:00';
    this.progressTotalLengthEl.textContent = this.getTimeString(this.audioPlayerEl.duration);

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
    if (this.audioContext.state === 'suspended') {
      this.audioContext.resume();
    }

    if (this.playButtonEl.dataset.playing === 'false') {
      this.audioPlayerEl.play();
      this.playButtonEl.dataset.playing = 'true';
      this.playButtonEl.innerHTML = '<miles-pause></miles-pause>';
      this.playButtonEl.setAttribute('aria-label', 'pause');
    } else if (this.playButtonEl.dataset.playing === 'true') {
      this.audioPlayerEl.pause();
      this.playButtonEl.dataset.playing = 'false';
      this.playButtonEl.innerHTML = '<miles-play></miles-play>';
      this.playButtonEl.setAttribute('aria-label', 'play');
    }
  };
}

const MilesAudioPlayerName = 'miles-audio-player';

if (!customElements.get(MilesAudioPlayerName)) {
  customElements.define(MilesAudioPlayerName, MilesAudioPlayer);
}

export default MilesAudioPlayer;
export { MilesAudioPlayer };
