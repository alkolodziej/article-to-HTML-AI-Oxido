import "dotenv/config";
import fs from "fs";
import { processArticle } from "./apiService.js";
import { generateHTML } from "./htmlGenerator.js";

async function main() {
  const article = fs.readFileSync(
    "./data/Zadanie dla JJunior AI Developera - tresc artykulu.txt",
    "utf-8"
  );
  const response = await processArticle(article);
  console.log(response);
  fs.writeFileSync("./output/artykul.html", response, "utf-8");
  const htmlContent = await generateHTML(response);
  fs.writeFileSync("./output/podglad.html", htmlContent, "utf-8");
  console.log("Artykuł został przetworzony i zapisany jako HTML.");
}

main().catch(console.error);
