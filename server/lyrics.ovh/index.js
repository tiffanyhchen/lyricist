
const request = require('request')

const getLyrics = (song, artist) => {
    const url =  `https://api.lyrics.ovh/v1/${artist}/${song}`
    request(url, { json: true }, (err, res, body) => {
        if(err) {
            return new Error(err)
        } else {
            return body
        }
    })

}

export default getLyrics