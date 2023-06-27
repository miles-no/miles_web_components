import { propsToAttrs } from '../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args =>
    `<miles-fagblogg-teaser ${propsToAttrs(args)}>
      <ul class="wp-block-latest-posts__list has-dates has-author miles-fagblogg-teaser wp-block-latest-posts"><li><div class="wp-block-latest-posts__featured-image aligncenter"><img loading="lazy" width="260" height="260" src="https://www.miles.no/newsite/wp-content/uploads/2023/06/Kopi-av-_D__0061-260x260.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="" decoding="async" style="height: auto; cursor: pointer;" srcset="https://www.miles.no/newsite/wp-content/uploads/2023/06/Kopi-av-_D__0061-260x260.jpg 260w, https://www.miles.no/newsite/wp-content/uploads/2023/06/Kopi-av-_D__0061-550x550.jpg 550w, https://www.miles.no/newsite/wp-content/uploads/2023/06/Kopi-av-_D__0061-768x768.jpg 768w, https://www.miles.no/newsite/wp-content/uploads/2023/06/Kopi-av-_D__0061.jpg 1200w" sizes="(max-width: 260px) 100vw, 260px" data-post="https://www.miles.no/newsite/sertifisering-i-innovasjonsledelse/"></div><a class="wp-block-latest-posts__post-title" href="https://www.miles.no/newsite/sertifisering-i-innovasjonsledelse/">Sertifisering i innovasjonsledelse</a><div class="wp-block-latest-posts__post-author">av Ida Severinsen</div><time datetime="2023-06-13T13:29:54+02:00" class="wp-block-latest-posts__post-date">13.06.2023</time></li>
<li><div class="wp-block-latest-posts__featured-image aligncenter"><img width="260" height="260" src="https://www.miles.no/newsite/wp-content/uploads/2023/06/Midjourney-change-management-260x260.png" class="attachment-thumbnail size-thumbnail wp-post-image" alt="" decoding="async" loading="lazy" style="height: auto; cursor: pointer;" data-post="https://www.miles.no/newsite/smidig-samspill-hvordan-it-prosjektledelse-og-endringsledelse-utfyller-hverandre/"></div><a class="wp-block-latest-posts__post-title" href="https://www.miles.no/newsite/smidig-samspill-hvordan-it-prosjektledelse-og-endringsledelse-utfyller-hverandre/">Smidig samspill: Hvordan IT-prosjektledelse og endringsledelse utfyller hverandre</a><div class="wp-block-latest-posts__post-author">av Ida Severinsen</div><time datetime="2023-06-13T11:16:18+02:00" class="wp-block-latest-posts__post-date">13.06.2023</time></li>
<li><div class="wp-block-latest-posts__featured-image aligncenter"><img width="260" height="260" src="https://www.miles.no/newsite/wp-content/uploads/2023/06/Karsten_IMG_0915-1-260x260.jpg" class="attachment-thumbnail size-thumbnail wp-post-image" alt="" decoding="async" loading="lazy" style="height: auto; cursor: pointer;" data-post="https://www.miles.no/newsite/lyset-i-den-digitale-tunnelen/"></div><a class="wp-block-latest-posts__post-title" href="https://www.miles.no/newsite/lyset-i-den-digitale-tunnelen/">Lyset i den digitale tunnelen</a><div class="wp-block-latest-posts__post-author">av Ida Severinsen</div><time datetime="2023-06-13T11:05:28+02:00" class="wp-block-latest-posts__post-date">13.06.2023</time></li>
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
