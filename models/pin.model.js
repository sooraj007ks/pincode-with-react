const mongoose = require('mongoose');
const { Schema } = mongoose;

const PinSchema = new Schema({
  officename : String,
  pincode : Number,
  officeType : String,
  Deliverystatus : String,
  divisionname : String,
  regionname : String,
  circlename : String,
  Taluk : String,
  Districtname : String,
  statename : String,
  Telephone : String,
  "Related Suboffice" : String,
  "Related Headoffice" : String,
  longitude : String,
  latitude : String
});

module.exports = mongoose.model('PinMaster', PinSchema, 'master');