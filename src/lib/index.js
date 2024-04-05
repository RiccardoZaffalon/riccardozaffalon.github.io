import fs from 'fs';
import { micromark } from 'micromark';

export function md(str) {
    return micromark(str);
}

export async function content(name, lang) {
    const path = `./src/content/${lang}/${name}.md`;
    return fs.promises.readFile(path, 'utf-8');
}