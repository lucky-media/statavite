# Statavite

Statamic meets Vite

This starter kit will replace the default Laravel Mix with [Vite](https://vitejs.dev/)

This is still in development and its not recommended yet for production.

Some manual steps have to be done for now:
- Remove webpack.mix.js
- Remove everything on `resources/js` except `site.js`
- Remove everything on `resources/css` except `site.css`


### Installation commands

```bash
npm install
```

### Running development
```bash
npm run dev
```

### Building assets for production
```bash
npm run build
```

### Some gotchas for now
Make sure you have `DEV_SERVER_URL` on your ENV file.


## But why Vite instead of Laravel Mix ?
Along with the small footprint and the great performance, Vite offers a lot of benefits compared to Laravel Mix which internally uses Webpack.

Below I will link some articles:
- [Vite with Laravel](https://sebastiandedeyne.com/vite-with-laravel/)
- [Replacing Laravel Mix with Vite](https://owenconti.com/posts/replacing-laravel-mix-with-vite)

# Credits
- [Laravel Vite](https://laravel-vite.innocenzi.dev/)
- [Vite](https://vitejs.dev/)