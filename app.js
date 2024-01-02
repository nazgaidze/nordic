const express = require("express");

const app = express();

// Redirect middleware to redirect 'www' to non-'www'
app.use((req, res, next) => {
  if (req.hostname.startsWith('www.')) {
    // Redirect to 'algorient.com', preserving the original path and query string
    const redirectUrl = 'https://nordicelementtrade.com' + req.originalUrl;
    res.redirect(301, redirectUrl);
  } else {
    next();
  }
});


// telling the express module that the CV dir has all of our site assets
app.use(express.static(__dirname));

app.get("/", function (req, res) {
  res.sendFile("index.html", { root: __dirname });
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server started on port 3000");
});
