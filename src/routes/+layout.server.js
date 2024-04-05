import { content, md } from '$lib';

export const prerender = true;
export const trailingSlash = 'always';

export async function load(event) {
    const lang = event?.url?.pathname?.startsWith('/it') ? 'it' : 'en';

    const intro = await content('intro', lang);
    const bio = await content('bio', lang);
    const footer = await content('footer', lang);

    return {
        lang,
        intro: md(intro),
        bio: md(bio),
        footer: md(footer),
    }
}