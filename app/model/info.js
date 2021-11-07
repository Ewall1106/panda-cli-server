'use strict';

module.exports = app => {
  const mongoose = app.mongoose;
  const Schema = mongoose.Schema;

  const UserSchema = new Schema({
    name: { type: String },
    npmName: { type: String },
    version: { type: String },
  });

  return mongoose.model('Info', UserSchema);
};
