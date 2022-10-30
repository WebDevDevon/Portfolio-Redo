// import discordLogo from '../assets/png/discord_logo.png'
import toDo from '../assets/gif/toDo.gif';
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
        title: 'TODO App',
        query: 'todo-app',
        img_url: toDo,
        tech: 'HTML | SCSS | JavaScript | Git ',
        live_url: 'https://dailytasksandtodos.netlify.app/',
        github_url: 'https://github.com/WebDevDevon/TaskSite',
        type: 'SPA',
        description: 'A TODO app to manage tasks.'
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
        description: 'fetches types data on my mongo database through an api hosted on heroku.'
    },
 ]