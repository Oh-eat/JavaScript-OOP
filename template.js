module.exports = {
    HTML: (text) => {
        var html = 
        `
            <!DOCTYPE html>
            <html>
                <head>
                    <meta charset="utf-8">
                    <title>main</title>
                </head>
                <body>
                    <strong>${text}</strong>
                </body>
            </html>
        `;
    return html;
    }
}