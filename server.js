const express = require('express') // Sử dụng framework express
const next = require('next') // Include module next

const port = parseInt(process.env.PORT, 10) || 7500 // Port để chạy app Nextjs, cũng là server nodejs
const dev = process.env.NODE_ENV !== 'production'
console.log(dev);
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    //Tạo ra các router. Dòng này có ý nghĩa khi gửi request đến path /a . Sẽ render file /a.js trong thư mục pages/a.js của Nextjs
    // server.get('/', (req, res) => {
    //     return app.render(req, res, '/trang-chu', req.query)
    // })
    // server.get('/', (req, res) => {
    //     return app.render(req, res, '/trang-chu', req.query)
    // })
    // server.get('/danh-muc', (req, res) => {
    //     return app.render(req, res, '/danh-muc', req.query)
    // })
    // server.get('/lien-he', (req, res) => {
    //     return app.render(req, res, '/lien-he', req.query)
    // })
    // server.get('/san-pham', (req, res) => {
    //     return app.render(req, res, '/san-pham', req.query)
    // })
    // server.get('/tim-kiem', (req, res) => {
    //     return app.render(req, res, '/tim-kiem', req.query)
    // })
    // server.get('/tin-tuc', (req, res) => {
    //     return app.render(req, res, '/tim-kiem', req.query)
    // })


    // Nếu các bạn muốn các routing tự động liến kết đến route files giống với cấu trúc của Nextjs thì chỉ cần thêm 3 dòng bên dưới
    // https://nextjs.org/docs/routing/introduction
    server.all('*', (req, res) => {
        return handle(req, res)
    })

    server.listen(port, err => {
        if (err) throw err
        console.log(`> Ready on http://localhost:${port}`)
    })
})