import { createDirectus, rest, staticToken, readItem } from '@directus/sdk';
import { DIRECTUS_URL, DIRECTUS_STATIC_TOKEN } from '$env/static/private';

export const prerender = true;
export const trailingSlash = 'always';

export async function load({ fetch }) {
    const options = fetch ? { globals: { fetch } } : {};
    const directus = createDirectus(DIRECTUS_URL, options).with(staticToken(DIRECTUS_STATIC_TOKEN)).with(rest());
    const result = await directus.request(readItem('pages', 'home'));

    return {
        header: result.header,
        body: result.body,
        skills: result.skills,
        footer: result.footer,
    }
}