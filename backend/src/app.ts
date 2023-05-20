import express from 'express';

let app = express();

app.use(express.static('public'));

function requireAuth(req: express.Request, res: express.Response, next: express.NextFunction) {
    // TODO: implement authorization logic
    if (req.headers && req.headers.authorization) {
        next();
    } else {
        res.status(401).send('Unauthorized');
    }
}

app.get("/api/hello", (req, res) => {
    res.send("Hello World");
});


export function start() {
    app.listen(3000, () => {
        console.log("Server running on port 3000");
    });
}