import mongoose from 'mongoose';

const { Schema } = mongoose


const playerSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  jersey: {
    type: Number,
  },
  photo: {
    type: String,
  },
  team: [{
    type: Schema.Types.ObjectId,
    ref: 'Team'
  }]
});

export default mongoose.model('Player', playerSchema);
