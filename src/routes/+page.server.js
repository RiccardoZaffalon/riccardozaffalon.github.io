import { createDirectus, rest, staticToken, readItem, readItems } from '@directus/sdk';
import { DIRECTUS_URL, DIRECTUS_STATIC_TOKEN } from '$env/static/private';

export const prerender = true;
export const trailingSlash = 'always';

export async function load({ fetch }) {
    const options = fetch ? { globals: { fetch } } : {};
    const directus = createDirectus(DIRECTUS_URL, options).with(staticToken(DIRECTUS_STATIC_TOKEN)).with(rest());

    const home = await directus.request(readItem('pages', 'home'));
    const books = await directus.request(readItems('books'));

    return {
        header: home.header,
        body: home.body,
        skills: home.skills,
        books: {
            current: books.filter((book) => book.shelf === 'current'),
            lately: books.filter((book) => book.shelf === 'lately'),
        },
        footer: home.footer,
    }
}