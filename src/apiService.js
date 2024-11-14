import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function processArticle(articleText) {
  const response = await openai.chat.completions
    .create({
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: `
                    Jesteś zaawansowanym asystentem, który pozwala przekształcać tekst artykułu na strukturalny HTML.
                    Twój wynik powinien:
                    - Zawierać odpowiednie tagi HTML do strukturyzacji treści całego artykułu.
                    - Wskazywać odpowiednie miejsca na grafiki, które urozmaicą tekst, używając <img src="image_placeholder.jpg" alt="opis obrazu">, gdzie "opis obrazu" powinien być prawidłowo złożonym zapytaniem służącym do wygenerowania grafiki.
                    - Umieszczać podpisy pod grafikami, używając odpowiednich tagów HTML, np. <figcaption>.
                    - Zwracać jedynie kod wewnątrz tagów <body> (bez tagów <html>, <head> ani <body>).
                    - Nie dodawać żadnego CSS ani JavaScript.
                    - Zwracać jedynie plain text, bez bloku formatowania składni.
                `,
        },
        {
          role: "user",
          content: `Przekształć poniższy artykuł na HTML zgodnie z powyższymi wytycznymi:\n\n${articleText}`,
        },
      ],
    })
    .catch((e) => {
      console.error(e);
      throw new Error("Błąd podczas przetwarzania artykułu");
    });

  let result = response.choices[0].message.content;
  // Usuwanie bloków formatowania składni (np. ```html [...] ```), czasami pomimo próśb i błagań nadal są zwracane.
  result = result.replace(/```(?:\w+)?\n?([\s\S]*?)\n?```/g, '$1').trim();
  return result;
}
