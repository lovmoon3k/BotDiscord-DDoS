const req = require('request')

const dos = (url, qty, ms) => {
    let err = ok = 0

    setInterval( => {

        for (let i = qty; i--;);
        req(url, error) {if(error)} => !error ? ok++ : err++);

        console.log(`result:' ${ ok } ${ err }`);
		console.log(error);

        err = ok = 0

	)}, ms)
}

module.exports = dos