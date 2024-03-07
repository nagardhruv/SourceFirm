const express = require('express');
const path = require('path');
const fs = require("fs");
const { getDataByPath } = require('./stub/metadata');
const app = express();

const PORT = process.env.PORT || 4052;
const indexPath = path.resolve(__dirname, '..', 'build', 'index.html');

// static resources should just be served as they are
app.use(express.static(
    path.resolve(__dirname, '..', 'build'),
    { maxAge: '30d' },
));
// here we serve the index.html page
app.get('*/*', (req, res) => {
    fs.readFile(indexPath, 'utf8', (err, htmlData) => {
        if (err) {
            console.error('Error during file reading', err);
            return res.status(404).end()
        }
        // get post info
        const data = getDataByPath(req?.path);

        // inject meta tags
        if (data) {
            htmlData = htmlData.replace(
                "<title>SourceFirms: Remote software developers from global software agencies</title>",
                `<title>${data.pageTitle}</title>`
            )
                .replace(/Hire remote software developers from top software development agencies globally/g, data.metaTitle)
                .replace(/World's first B2B marketplace to hire remote software developers directly from software development agencies/g, data.description)
                .replace('https://sourcefirms.com', data.url);
            if (data?.questionJsonFile) {
                const fPath = path?.resolve(__dirname, '..', 'server/stub', data.questionJsonFile);
                const fData = fs.readFileSync(fPath, 'utf8');
                htmlData = htmlData.replace('<script type="application/ld+json"></script>', fData);

            }
        } else {
            htmlData = htmlData.replace(/<title>[\s\S]*?<\/title>/, "<title>SourceFirms</title>");
        }
        return res.send(htmlData);
    });
});
// listening...
app.listen(PORT, (error) => {
    if (error) {
        return console.log('Error during app startup', error);
    }
    console.log("listening on " + PORT + "...");
});