var mongoose = require ("mongoose");

var StudentSchema = new mongoose.Schema({

          regNo : {
                    type : String,
                  unique : true,
                required : true,
                  },
          rollNo: Number,
           name :{
                  first :String,
                   last :String,
                 },
          ageOf : Number,
    collegeName : String,
        address : {
       cityName : String,
    countryName : String,
      stateName : String,
                  }
});

module.exports = mongoose.model("Student",StudentSchema);
