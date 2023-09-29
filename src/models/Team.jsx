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
  seasons: [{
    2022:[{
      teamstats: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Teamstats',
      },
    }]
  }],
}, {
  timestamps: true,
});

// export default mongoose.model('Team', teamSchema);
module.exports = mongoose.models.Team || mongoose.model('Team', teamSchema);
// module.exports = mongoose.models?.Team || mongoose.model('Team', teamSchema);
