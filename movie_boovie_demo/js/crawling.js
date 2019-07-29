var cheerio = require('cheerio');
const request = require('request-promise')

var url = 'http://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%EB%A1%AF%EB%8D%B0%EC%8B%9C%EB%84%A4%EB%A7%88+%EC%9A%A9%EC%82%B0%EC%A0%90'


request(url).then(function(html) {

    // Cheerio 오브젝트 생성
    const $ = cheerio.load(html)
        // 셀렉터 캐시로 Cheerio 오브젝트 생성
    const $articleList = $('div')
    console.log($.html())
})


// const express = require('express');
// const router = express.Router();

// const request = require('request');

// router.get("", function(req, res, next) {
//     let url = "http://movie.naver.com/movie/sdb/rank/rmovie.nhn";

//     request(url, function(error, response, body) {
//         console.log(body)
//     });
// })