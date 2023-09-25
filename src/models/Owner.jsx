import mongoose from 'mongoose';

const { Schema } = mongoose


const ownerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
  team: [{
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }]
});

export default mongoose.model('Owner', ownerSchema);
