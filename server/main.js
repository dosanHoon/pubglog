console.log('start awesome node !!!!!!!!')
var http = require('http')
var fs = require('fs')
var url = require('url')
var path = require('path')

http
  .createServer(function (request, response) {
    var pathname = url.parse(request.url).pathname
    /*
        HTTP 헤더 전송
        HTTP Status: 200 : OK
        Content Type: text/plain
    */
    // var pathname = url.parse(request.url).pathname

    console.log(`request from ${pathname}`)

    if (pathname === '/') {
      pathname = '/index.html'
    } else if (pathname.indexOf('static') < 0) {
      pathname = '/index.html'
    }

    // if (pathname === '/static') {
    //   pathname = '/index.html'
    // }
    // 파일을 읽기
    fs.readFile(`../dist/${pathname.substr(1)}`, function (err, data) {
      if (err) {
        console.log(err)
        // 페이지를 찾을 수 없음
        // HTTP Status: 404 : NOT FOUND
        // Content Type: text/plain
        response.writeHead(404, { 'Content-Type': 'text/html' })
      } else {
        // 페이지를 찾음
        // HTTP Status: 200 : OK
        // Content Type: text/plain
        if (pathname.indexOf('static') >= 0) {
          response.writeHead(200, { 'Content-Type': 'text/javascript' })
        } else {
          response.writeHead(200, { 'Content-Type': 'text/html' })
        }

        // 파일을 읽어와서 responseBody 에 작성
        response.write(data.toString())
      }
      // responseBody 전송
      response.end()
    })
  })
  .listen(9091)

console.log('Server running at http://localhost:9091')
