const mongoose  = require('mongoose');
const { Schema } = mongoose;

const MedicineSchema = new Schema({
    name: { type: String, required: true },
    manufacturer: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    expiryDate: { type: Date, required: true }
  });

const PharmaSchema = new Schema({
    pharmaId : { type: String, required: true },
    name: { type: String, required: true },
    address: {
      street: { type: String, required: true },
      city: { type: String, required: true },
      state: { type: String, required: true },
      zip: { type: String, required: true }
    },
    contact: {
      phone: { type: String, required: true },
      email: { type: String, required: true }
    },
    medicines: [MedicineSchema]
  });

const Pharma = mongoose.model('Pharma', PharmaSchema , 'Pharma');
const Medicine = mongoose.model('Medicine', MedicineSchema , 'Medicine');

  module.exports = {
    Pharma,
    Medicine
  }