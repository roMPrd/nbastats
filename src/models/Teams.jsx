import mongoose from 'mongoose';

const { Schema } = mongoose


const teamSchema = new Schema({
  id_api: {
    type: Number,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true,
    unique: true
  },
  city: {
    type: String,
    required: true,
    unique: true
  },
  code: {
    type: String,
    required: true,
    unique: true
  },
  logo: {
    type: String,
  },
  conference: {
    type: String,
    required: true,
  },
  division: {
    type: String,
    required: true,
  },
  owner: [{
    type: Schema.Types.ObjectId,
    ref: 'Owner'
  }],
  coaches: [{
    type: Schema.Types.ObjectId,
    ref: 'Coach'
  }],
  players: [{
    type: Schema.Types.ObjectId,
    ref: 'Player'
  }]
}, {
  timestamps: true,
});

// export default mongoose.model('Team', teamSchema);
module.exports = mongoose.models.Team || mongoose.model('Team', teamSchema);
// module.exports = mongoose.models?.Team || mongoose.model('Team', teamSchema);
