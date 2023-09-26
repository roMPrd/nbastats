import mongoose from 'mongoose';

const { Schema } = mongoose


const coachSchema = new Schema({
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

export default mongoose.model('Coach', coachSchema);
