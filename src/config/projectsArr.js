// import discordLogo from '../assets/png/discord_logo.png'
import task from '../assets/gif/tasktracker.gif';
import pokemon from '../assets/gif/Pokemon.gif';
import cryptowatch from '../assets/gif/cryptowatch.gif';
import types from '../assets/gif/types.gif';

export const projects = [
    {
        id: 1,
        title: 'Pokemon Card Site',
        query: 'pokemon',
        img_url: pokemon,
        tech: 'HTML | SCSS | JavaScript | Git | Bootstrap | Fancybox',
        live_url: 'https://pkmnsets.netlify.app/home.html',
        github_url: 'https://github.com/WebDevDevon/pokesite',
        type: 'Gallery',
        description: 'A gallery website where you can view all the Pokemon card sets released.'
    },
    {
        id: 2,
        title: 'Crypto Watch',
        query: 'cryptowatch',
        img_url: cryptowatch,
        tech: 'React | Axios | AOS | Git',
        live_url: 'https://cryptopricewatch.netlify.app/',
        github_url: 'https://github.com/WebDevDevon/CryptoWatch',
        type: 'SPA',
        description: 'A simple crypto app that fetches current prices'
    },
    {
        id: 3,
        title: 'Note App',
        query: 'note-app',
        img_url: task,
        tech: 'React | MongoDB | Express | NodeJS | Git',
        live_url: 'https://taskstrackerdev.netlify.app/',
        github_url: 'https://github.com/WebDevDevon/task-tracker',
        type: 'Full Stack',
        description: 'A full stack note app to manage tasks.'
    },
    {
        id: 4,
        title: 'Types App',
        query: 'types app',
        img_url: types,
        tech: 'HTML | CSS | JavaScript | Git ',
        live_url: 'https://super-pika-a32366.netlify.app/',
        github_url: 'https://github.com/WebDevDevon/pokemon-type-demo',
        type: 'SPA',
        description: 'fetches data from my mongo database through an api hosted on heroku.'
    },
 ]