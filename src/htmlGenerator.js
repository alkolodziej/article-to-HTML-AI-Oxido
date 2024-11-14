import fs from "fs";

export async function generateHTML(htmlContent) {
  const template = fs.readFileSync("./assets/szablon.html", "utf-8");
  const transformedContent = template.replace("{{ htmlContent }}", htmlContent);
  return transformedContent;
}
