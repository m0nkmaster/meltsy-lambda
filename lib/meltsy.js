var request = require('request')
var promise = require('bluebird')
var purest = require('purest')({request, promise})
var config = require('../config/etsy-provider.json')
var etsy = purest({provider: 'etsy', config})

function meltsy(){

        this.getUnshipped = function (callback) {
          //return {'items':[1,2,3,4,5,6]}

          var data
          var uri = `/listings/active?api_key=76reksctxcsx3m9d0n00cwen`
          console.log(uri)

          var eReq = etsy
          .get(uri)
          // .oauth({
          //     consumer_key: etsyConfig.etsy.consumer_key,
          //     consumer_secret: etsyConfig.etsy.consumer_secret
          //   })
          // .auth(req.session.token, req.session.secret)
          .request()
          .catch((err) => {
            //callback('Error fetching transactions - ' + JSON.stringify(err)) //no data
            console.log('Error fetching transactions')
            // fs.writeFile('fail.json', JSON.stringify(err))
            console.log(err)
            //callback(passedItems)
          })
          .then((result) => {
            console.log('Success getting transactions')
            //console.log(JSON.stringify(result))
            callback(result.pop())
          })
        }
}

// expose foobar to other modules
exports.meltsy = new meltsy();
