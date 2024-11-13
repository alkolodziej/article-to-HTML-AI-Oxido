import 'dotenv/config';
import fs from 'fs';
import { processArticle } from './apiService.js';

async function main() {
    const article = fs.readFileSync('./data/Zadanie dla JJunior AI Developera - tresc artykulu.txt', 'utf-8');
    const response = await processArticle(article);
    fs.writeFileSync('./output/result.html', response, 'utf-8');
    console.log('Artykuł został zapisany.');
}

main().catch(console.error);
