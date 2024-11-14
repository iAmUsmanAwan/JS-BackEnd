import {serve} from 'bun'

serve({
    fetch(request){
        const url = new URL(request.url);
        if (url.pathname === '/') {
            return new Response('Hello, Cold Coffee', {status: 200});
        } else if (url.pathname === '/coffee') {
            return new Response('Coffee is great for your soul!', {status: 200});
        } else {
            return new Response('404 Not Found', {status: 404});
        } // Handle other routes here
    },
    //? Add more middleware or options as needed

    port: 3000, // Change the port as needed
    hostname: '127.0.0.1', // Change the hostname as needed

})