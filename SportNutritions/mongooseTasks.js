var mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/test1')

var nutrition = mongoose.model('nutrition', { name: String })

var ber = new nutrition({ name: 'Бета' })
ber.save(function (err) {
    if (err) {
        console.log(err)
    } else {
        console.log('пшш')
    }
})
