import { propsToAttrs } from '../../storybook.utils.js';

export default {
  title: 'Miles/Components',
  tags: ['autodocs'],
  render: args => `<miles-blog-card  ${propsToAttrs(args)}>
    <figure slot="image">
			<img width="1080" height="721" src="https://www.miles.no/newsite/wp-content/uploads/2023/06/Kopi-av-_D__0061-1080x721.jpg" class="attachment-feature-image size-feature-image wp-post-image" alt="" decoding="async" srcset="https://www.miles.no/newsite/wp-content/uploads/2023/06/Kopi-av-_D__0061-1080x721.jpg 1080w, https://www.miles.no/newsite/wp-content/uploads/2023/06/Kopi-av-_D__0061-385x258.jpg 385w" sizes="(max-width: 1080px) 100vw, 1080px" style="object-fit: cover; aspect-ratio: 2 / 3; width: 100%;">
      </figure>
    <h2 slot="title">Sertifisering i innovasjonsledelse</h2>
        </miles-blog-card>`,
};

// More on writing stories with args: https://storybook.js.org/docs/web-components/writing-stories/args
export const BloggCard = {
  args: {
    author: 'Ida SeverinsenIda Severinsen',
    email: 'ola.miles.no',
    posted: '12/12/2022',
    url: 'https://www.vg.no',
    id: 'post-9903',
  },
};

// id="post-9903"
