const app = require('./server')
class Index {
    constructor(PORT) {
        this.PORT = PORT;
    }

    init() {
        return app.listen(this.PORT, () => {
            console.log("Rodando na porta " + this.PORT);
        });
    }
}

const server1 = new Index(process.env.PORT)
server1.init()