// 构建单文件 HTML：把样式与所有脚本内联，产物可直接在手机上打开（无需服务器）
// 注意：index.html 里的引用都带 ?v=xxx 缓存戳（如 styles.css?v=audit_r1），
// 必须用正则忽略查询串，否则精确字符串 replace 永远匹配不上、构建出的 single.html 不内联任何东西。
const fs = require("fs");
const path = require("path");
const dir = __dirname;
const read = (f) => fs.readFileSync(path.join(dir, f), "utf8");

let html = read("index.html");

// 1) 内联样式表（<link ... href="styles.css"任意查询串 ...>）
html = html.replace(
  /<link\s+rel="stylesheet"\s+href="styles\.css[^"]*"\s*\/?>/,
  "<style>\n" + read("styles.css") + "\n</style>"
);

// 2) 内联脚本（<script ... src="xxx.js任意查询串" ...></script>）
[
  "data.js",
  "engine.js",
  "portraits.js",
  "portraits-data.js",
  "scenes.js",
  "scenes-data.js",
  "audio.js",
  "game.js",
].forEach((f) => {
  const re = new RegExp(
    '<script[^>]*src="' + f.replace(/\./g, "\\.") + '[^"]*"[^>]*></script>'
  );
  html = html.replace(re, "<script>\n" + read(f) + "\n</script>");
});

const outPath = path.join(dir, "single.html");
fs.writeFileSync(outPath, html);
console.log("✅ 单文件已生成:", outPath, "(" + (html.length / 1024).toFixed(1) + " KB)");
