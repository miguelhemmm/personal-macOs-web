/* eslint-disable */
import http from "http";
import fs from "fs";

function listener(req, res) {
  const url = req.url;
  const method = req.method;

  //   res.setHeader("Content-Type", "text/html");

  if (url === "/") {
    res.write(`
  <html>
	<head>
		<title>Node</title>
	</head>
	<body>
	<form action="/message" method="POST"><input type="text" name="message" /><button type="submit">Send</button></form>
	</body>
  </html>`);
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "CULO");
    res.statusCode = 302;
    res.setHeader("Location", "/");
  }
  res.setHeader("Content-Type", "text/html");
  res.write(`
  <html>
	<head>
		<title>Node</title>
	</head>
	<body>
  <span>culo</span>
	</body>
  </html>`);
}

const server = http.createServer(listener);

server.listen(3000);
