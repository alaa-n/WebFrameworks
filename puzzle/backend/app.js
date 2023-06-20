const express = require("express");
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

//app.listen(8000, () => { // starting the server on port 3000
  //  console.log('Example app listening on port 8000!')
//})

let userData = {
    "ich@du.at": "test",
    "ich2@du.at": "test3"
};

let highscores = {}

let tokenData = {};

app.use((req, res, next) => {
    console.log("First middleware");
    next();
});

app.get("/", (req, res) => {
    // Alle Token Daten ausgeben
    console.log(tokenData);
    res.status(200).json(tokenData);
});

app.post("/login", (req, res) => {
    // Übergebene Daten loggen
    console.log(req.body);

    // Passwort überprüfen
    if (req.body.password == userData[req.body.email]) {
        // Login erfolgreich
        // Token erstellen
        const token = (Math.random() + 1).toString(36).substring(2)

        // Token zur E-Mail Adresse speichern
        tokenData[req.body.email] = token;

        // Status 200 und Token zurückgeben
        res.status(200).json({
            Token: token
        });
    } else {
        // Login nicht erfolgreich
        // Status 401 und Fehlermeldung zurückgeben
        res.status(401).send("Invalid Credentials");
    }
});

app.post("/users", (req, res) => {
    if(userData[req.body.email]){
        console.log("Username already used!");
        res.status(401).send("Username already used!");
    } else {
        userData[req.body.email] = req.body.password;
        const token = (Math.random() + 1).toString(36).substring(2)

        // Token zur E-Mail Adresse speichern
        tokenData[req.body.email] = token;

        // Status 200 und Token zurückgeben
        res.status(200).json({
            Token: token
        });
    }
});

app.post("/highscores", (req, res) => {
    if(highscores[req.body.email]){
        if(highscores[req.body.email] > req.body.score) {
            highscores[req.body.email] = req.body.score;
            res.status(200).send("New highscore");
        }
        res.status(200).send("No new highscore.");
    } else {
        highscores[req.body.email] = req.body.score;
        res.status(200).send("New highscore");
    }
});

app.get("/highscores", (req, res) => {
    res.status(200).json(highscores);
});

app.delete("/sessions", (req, res) => {
   tokenData[req.params.email] = "";  // ausloggen
});

module.exports = app;

