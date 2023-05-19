// извлечь домен из строки сайта
// describe("Sample test", () => {
//   it("Should pass sample tests", () => {
//     assert.equal(domainName("http://google.com"), "google");
//     assert.equal(domainName("http://google.co.jp"), "google");
//     assert.equal(domainName("www.xakep.ru"), "xakep");
//     assert.equal(domainName("https://youtube.com"), "youtube");
//   })  
// })

function domainName(url){
    console.log('url', url);
    let start, end, cut;
    if (url.includes('www')) {
        start = url.indexOf('www.')+4
    } else if (url.includes('://')) {
        start = url.indexOf('://')+3
    } else start = 0
    console.log('start', start);
    cut = url.slice(start)
    console.log('cut', cut);
    end = cut.indexOf('.')
    console.log('end', end);

    const res = cut.slice(0, end)
    console.log('res', res)
    return res
}

domainName("http://google.com");
domainName("http://google.co.jp");
domainName("www.xakep.ru");
domainName("https://youtube.com");
