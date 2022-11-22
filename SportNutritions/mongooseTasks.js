var mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test')

var schema = mongoose.Schema({ name: String })

schema.methods.meow = function(){
    console.log(this.get("name") + " сказал пшш")
}

var ber = mongoose.model('ber', schema)

var prot = new ber({ name: 'протеин' })
prot.save(function (err) {
    prot.meow()
})
