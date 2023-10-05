class MilesCardFilter extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    document.addEventListener('change', this.filterHandler);

    const area = this.readFromUrl('area');
    const office = this.readFromUrl('office');

    if (area && area !== null) {
      this.filterHandler({ detail: { value: area } });
    }

    if (office && office !== null) {
      this.filterHandler({ detail: { value: office } });
    }
  }

  disconnectedCallback() {
    document.removeEventListener('change', this.filterHandler);
  }

  filterHandler = e => {
    const regexp = new RegExp(/^[A-Za-z_-]+$/, 'g');
    const isArea = regexp.test(e.detail.value);
    const currentParam = isArea ? 'area' : 'office';
    this.resetFilter();

    const selector = isArea
      ? `miles-profile-card:not([roles*="${e.detail.value}"])`
      : `miles-profile-card:not([officeid="${e.detail.value}"])`;

    document.querySelectorAll(selector).forEach(card => {
      card.setAttribute('hidden', true);
    });

    this.addToUrl(currentParam, e.detail.value);
  };

  resetFilter = () => {
    document.querySelectorAll('miles-filter-button').forEach(button => {
      const shadowRoot = button.shadowRoot;
      if (shadowRoot) {
        const btn = shadowRoot.querySelector('button.selected');
        if (btn) {
          btn.classList.toggle('selected');
        }
      }
    });
    document.querySelectorAll('miles-profile-card').forEach(card => {
      card.removeAttribute('hidden');
    });
  };

  addToUrl = (key, value) => {
    this.resetUrlParams();
    const url = new URL(window.location.href);
    url.searchParams.set(key, value);
    window.history.pushState({}, '', url);
  };

  readFromUrl = key => {
    const url = new URL(window.location.href);
    return url.searchParams.get(key);
  };

  removeUrlParam = key => {
    const url = new URL(window.location.href);
    url.searchParams.delete(key);
    window.history.pushState({}, '', url);
  };

  resetUrlParams = () => {
    const url = new URL(window.location.href);
    url.searchParams.delete('area');
    url.searchParams.delete('office');
    window.history.pushState({}, '', url);
  };
}

const MilesFilterName = 'miles-filter';

if (!customElements.get(MilesFilterName)) {
  customElements.define(MilesFilterName, MilesCardFilter);
}

export default MilesCardFilter;
export { MilesCardFilter };
