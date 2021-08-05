const fs = require("fs");
const path = require("path");
const sass = require("node-sass");

const getComponentPaths = () => {
  const folders = ["atoms", "molecules", "organisms"];
  return folders.reduce((acc, folderName) => {
    const folderPath = path.resolve(__dirname, `../src/${folderName}`);
    const files = fs.readdirSync(folderPath).map((fileName) => ({
      entryPath: path.resolve(folderPath, fileName),
      outputPath: path.resolve(
        __dirname,
        `../lib/${fileName.replace(".scss", ".css")}`
      ),
    }));
    return acc.concat(files);
  }, []);
};

const compile = ({ entryPath, outputPath }) => {
  const result = sass
    .renderSync({
      data: fs.readFileSync(entryPath).toString(),
      outputStyle: "expanded",
      outFile: outputPath,
      includePaths: [path.resolve(__dirname, "../src")],
    })
    .css.toString();

  fs.writeFileSync(outputPath, result);
};

compile({
  entryPath: path.resolve(__dirname, "../src/global.scss"),
  outputPath: path.resolve(__dirname, "../lib/global.css"),
});

getComponentPaths().forEach(compile);
