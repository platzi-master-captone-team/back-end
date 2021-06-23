const { Schema, model } = require('mongoose');

const MetaDataSchema = new Schema({
  language: String,
  platform: String,
  typeConnection: String,
  isMobile: Boolean,
  clientName: String,
  clientType: String,
  clientVersion: String,
  deviceBrand: String,
  deviceModel: String,
  deviceType: String,
  osName: String,
  osPlatform: String,
  osVersion: String,
}, {
  versionKey: false,
  timestamps: true,
});

module.exports = model('MetaData', MetaDataSchema);
