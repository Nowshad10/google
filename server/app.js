const express = require('express')
const app = express()
const port = 3000
const cors = require('cors');

app.use(express.json())

app.use(cors());


luckyWords = ['pogba', 'chelsea', 'horses', 'anime', 'netflix', 'marvel', 'weather', 'spiderman', 'daenerys', 'ksi', 'fury', 'ufc', 'boxing', 'facebook', 'amazon', 'youtube', 'messi', 'ronaldo', 'utdtrey', 'twitter', 'tfl', 'khaleesi', 'tv', 'library', 'ps5', 'fifa', 'wire', 'horizon', 'ludo', 'drawer', 'neymar', 'macbook', 'getfutureproof', 'covid', 'blm', 'f1', 'monitor', 'xbox', 'simpsons', 'thor', 'odin', 'eastenders', 'china', 'headset', 'war', 'ukraine', 'oil', 'oculus', 'iPhone', 'switch', 'nintendo', 'snooker', 'pool', 'wwe', 'undertaker', 'wrestlemania', 'steve austin', 'lion', 'coke', 'alpacas', 'chewbacca', 'pomeranians', 'tamagotchi', 'husky', 'henry', 'aew', 'mirror', 'lost ark', 'power', '50 cent', 'eminem', 'apprentice', 'spurs', 'tissue', 'moncler', 'camera', 'bulbasaur', 'dre', '2pac'];

function lucky() {
    let arrLength = luckyWords.length - 1;
    let randomNum = Math.floor(Math.random()*arrLength)
    return luckyWords[randomNum]
};

app.get('/', (req, res) => {
    res.send('Hello World, from Nowshad and Peter')
  })

app.get('/lucky', (req, res) => {
    res.send(luckyWords);
});

app.get('/lucky/random', (req, res) => {
    let randomWord = lucky()
    res.send(randomWord)
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
