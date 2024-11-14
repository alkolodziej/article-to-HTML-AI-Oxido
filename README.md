# Article-to-HTML Converter

This project converts a plain-text article into structured HTML using OpenAI's API. It generates an HTML document with appropriate tags for text and placeholders for images, making the content easy to visualize and integrate into a website.


## Table of Contents
- [Features](#features)
- [Requirements](#requirements)
- [Setup](#setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Customization](#customization)
- [Contributing](#contributing)
- [License](#license)


## Features
- **Automated Article Processing**: Converts plain text into well-structured HTML.
- **Image Placeholders**: Includes `<img>` tags with placeholders for easy insertion of images.
- **Readable and SEO-Friendly HTML**: Generates tags like `<h1>`, `<p>`, `<figure>`, and `<figcaption>`.
- **Error Handling**: Captures API and file errors to ensure smooth processing.


## Requirements
- Node.js v14+ (with support for ES modules)
- An OpenAI API key


## Setup
1. Clone the repository:
```bash
git clone https://github.com/alkolodziej/article-to-HTML-AI-Oxido.git
cd article-to-HTML-AI-Oxido
```
2. Install dependencies:
```bash
npm install
```
3. Create .env file and add your OpenAI API key:
```
OPENAI_API_KEY=your_openai_api_key
```


## Usage
1. Place the text file you want to process in the data folder.
2. Run the script:
```bash
node index.js
```
3. The processed HTML files will be saved in the output directory:
`artykul.html`: Contains the article in HTML format.
`podglad.html`: Contains a preview of the article within the HTML template.


## Project Structure
- `index.js`: Main script that orchestrates reading, processing, and saving the HTML.
- `apiService.js`: Contains the OpenAI API request for converting the article.
- `htmlGenerator.js`: Reads the HTML template and inserts the processed content.
- `data/`: Contains the input article text file.
- `output/`: Directory for the generated HTML files.
- `assets/szablon.html`: HTML template for article preview.


## Customization
To change the behavior or HTML output, you can:
- Change path to .txt file in `index.js`.
- Modify API instructions in `apiService.js` for different HTML structures.
- Edit the template in `assets/szablon.html` for custom styling.


## Contributing
Contributions are welcome! Please open an issue first to discuss what you would like to change or improve.


## License
This project is licensed under the MIT License.
