const http = require('http');
const webpageData = require('./data');

const server = http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type': 'text/html' });

    //! Generar el HTML usando los datos importados
    const htmlContent = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>${webpageData.title}</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    margin: 20px;
                    padding: 20px;
                    background-color: #f4f4f4;
                    color: #333;
                }
                h1 {
                    color: #007bff;
                }
                footer {
                    margin-top: 20px;
                    font-size: 0.9em;
                    color: #555;
                }
            </style>
        </head>
        <body>
            <h1>${webpageData.title}</h1>
            <h2>${webpageData.subtitle}</h2>
            <p>${webpageData.description}</p>
            <footer>
                <p>Autor: ${webpageData.author} &copy; ${webpageData.year}</p>
            </footer>
        </body>
        </html>
    `;

    res.end(htmlContent);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
});
