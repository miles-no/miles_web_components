import { propsToAttrs } from '../storybook.utils.js';

const BASE_URL = import.meta.env.VITE_BASE_URL;

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args => /*html*/ ` <miles-fagblogg-teaser ${propsToAttrs(args)}>
	    <ul class="wp-block-latest-posts__list has-dates has-author miles-fagblogg-teaser wp-block-latest-posts">
	        <li>
	            <div class="wp-block-latest-posts__featured-image aligncenter">
	                <img loading="lazy" width="260" height="260" src="https://loremflickr.com/960/1280/dog" class="attachment-thumbnail size-thumbnail wp-post-image" alt="" decoding="async" style="height: auto; cursor: pointer;" srcset="
					              https://loremflickr.com/960/1280/dog  260w,
					              https://loremflickr.com/960/1280/dog  550w,
					              https://loremflickr.com/960/1280/dog  768w,
					              https://loremflickr.com/960/1280/dog  1200w
					            " sizes="(max-width: 260px) 100vw, 260px" data-post="${BASE_URL}sertifisering-i-innovasjonsledelse/" />
	            </div>
	            <a class="wp-block-latest-posts__post-title" href="${BASE_URL}sertifisering-i-innovasjonsledelse/">Sertifisering i innovasjonsledelse
	            </a>
	            <div class="wp-block-latest-posts__post-author">av Ida Severinsen</div>
	            <time datetime="2023-06-13T13:29:54+02:00" class="wp-block-latest-posts__post-date">13.06.2023
	            </time>
	        </li>
	        <li>
	            <div class="wp-block-latest-posts__featured-image aligncenter">
	                <img width="260" height="260" src="https://loremflickr.com/960/1280/dog" class="attachment-thumbnail size-thumbnail wp-post-image" alt="" decoding="async" loading="lazy" style="height: auto; cursor: pointer;" data-post="${BASE_URL}smidig-samspill-hvordan-it-prosjektledelse-og-endringsledelse-utfyller-hverandre/" />
	            </div>
	            <a class="wp-block-latest-posts__post-title" href="${BASE_URL}smidig-samspill-hvordan-it-prosjektledelse-og-endringsledelse-utfyller-hverandre/">Smidig samspill: Hvordan IT-prosjektledelse og endringsledelse
	                utfyller hverandre
	            </a>
	            <div class="wp-block-latest-posts__post-author">av Ida Severinsen</div>
	            <time datetime="2023-06-13T11:16:18+02:00" class="wp-block-latest-posts__post-date">13.06.2023
	            </time>
	        </li>
	        <li>
	            <div class="wp-block-latest-posts__featured-image aligncenter">
	                <img width="260" height="260" src="https://loremflickr.com/960/1280/dog" class="attachment-thumbnail size-thumbnail wp-post-image" alt="" decoding="async" loading="lazy" style="height: auto; cursor: pointer;" data-post="${BASE_URL}lyset-i-den-digitale-tunnelen/" />
	            </div>
	            <a class="wp-block-latest-posts__post-title" href="${BASE_URL}lyset-i-den-digitale-tunnelen/">Lyset i den digitale tunnelen
	            </a>
	            <div class="wp-block-latest-posts__post-author">av Ida Severinsen</div>
	            <time datetime="2023-06-13T11:05:28+02:00" class="wp-block-latest-posts__post-date">13.06.2023
	            </time>
	        </li>
	    </ul>
	</miles-fagblogg-teaser>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const FagbloggTeaser = {
  args: {
    episode_title: 'My Podcast Episode',
    published_date: '2022-01-01',
    link: 'https://example.com',
  },
};
