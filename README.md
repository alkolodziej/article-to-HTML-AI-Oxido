# Article to HTML

Oxido recruitment exercise by Alan Kołodziej. Some commits use the Git author name `GamePL7`.

A Node.js script that sends the included sample article to the OpenAI API and saves an HTML fragment and a preview based on `assets/szablon.html`.

## Run locally

Use Node.js 22 or later and an OpenAI API key with access to `gpt-4o`. Copy `.env.example` to `.env` and fill in `OPENAI_API_KEY`, or export it in your shell. Run from the repository root.

```sh
npm ci
npm start
```

The repository includes an original example in `data/sample-article.txt`. Edit that file locally to try another article. The script writes `output/artykul.html` and `output/podglad.html`. Use input you can share with the API provider. Review the generated markup as text before rendering it.
