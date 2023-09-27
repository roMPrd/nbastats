import mongoose from 'mongoose';

const { Schema } = mongoose

const seasonteamSchema = new Schema({
  name: {
    type: Number,
  },
  teamName: {
    type: String,
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

module.exports = mongoose.models.Seasonteam || mongoose.model('Seasonteam', seasonteamSchema);
// export default mongoose.model('Seasonteam', seasonteamSchema);
