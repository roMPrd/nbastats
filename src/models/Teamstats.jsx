import mongoose from 'mongoose';

const { Schema } = mongoose

const teamstatsSchema = new Schema({
  name: {
    type: Number,
    index: true,
  },
  teamName: {
    type: String,
    index: true,
  },
  team: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Team',
  },
  id_team_api: {
    type: Number,
  },
  conference: {
    name: { type: String },
    rank: { type: Number },
    win: { type: Number },
    loss: { type: Number },
  },
  division: {
    name: { type: String },
    rank: { type: Number },
    win: { type: Number },
    loss: { type: Number },
    gamesBehind: { type: String },
  },
  win: {
    home: { type: Number },
    away: { type: Number },
    total: { type: Number },
    percentage: { type: String },
    lastTen: { type: Number },
  },
  loss: {
    home: { type: Number },
    away: { type: Number },
    total: { type: Number },
    percentage: { type: String },
    lastTen: { type: Number },
  },
  gamesBehind: {
    type: String,
  },
  streak: {
    type: Number,
  },
  winStreak: {
    type: Boolean,
  },
  tieBreakerPoints: {
    type: Number,
  },
}, {
  timestamps: true,
});

teamstatsSchema.index({ name: 1, teamName: 1 }, { unique: true, dropDups: true })

module.exports = mongoose.models.Teamstats || mongoose.model('Teamstats', teamstatsSchema);
// export default mongoose.model('Seasonteam', seasonteamSchema);
