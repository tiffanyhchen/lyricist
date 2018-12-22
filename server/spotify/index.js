const request = require("request")
const config = require('../../config')

const token = ""

if(!token) {
    console.log('Token does not exist.')
    let authOptions = {
        url: 'https://accounts.spotify.com/api/token',
        headers: {
            'Authorization': 'Basic ' + (new Buffer(config.spotify.id + ':' + config.spotify.secret).toString('base64'))
        },
        form: {
            grant_type: 'client_credentials'
        },
        json: true
    }
    request.post(authOptions, (err, response, body) => {
        if(!err && response.statusCode === 200) {
            token = body.access_token
            console.log('Got the token')
        }
    })
}

const getArtist = (name, market="US", limit=10, offset=5) => {
    let options = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        url: 'https://api.spotify.com/v1/search',
        qs: {
            q: name,
            type: "artist",
            market,
            limit,
            offset
        }
    }
    request.get(options, (err, response, body) => {
        if(!err) {
            return body
        } else {
            return err
        }
    })
}

const getTopPlaylist = (id, country="US") => {
    let options = {
        headers: {
            "Accept": "application/json",
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        url: `https://api.spotify.com/v1/artists/${id}/top-tracks`,
        qs: {
            country
        }
    }
    request.get(options, (err, response, body) => {
        if(!err) {
            return body
        } else {
            return err
        }
    })
}

module.exports.getArtist = getArtist
module.exports.getTopPlaylist = getTopPlaylist