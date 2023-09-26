import mongoose from 'mongoose';

const { Schema } = mongoose


const playerSchema = new Schema({
  id_api:{
    type: Number,
    required: true,
    unique: true
  },
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
},
  {
    timestamps: true,
  });

export default mongoose.model('Player', playerSchema);
