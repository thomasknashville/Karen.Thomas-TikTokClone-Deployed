import mongoose from "mongoose";

//create a schema - tell the db what kind of data structure to expect - pass in fields and data types

const tiktokSchema = mongoose.Schema({
  url: String,
  channel: String,
  song: String,
  likes: String,
  messages: String,
  description: String,
  shares: String,
});

//collection(table, can have several docs, one of which will be a JSON obj) inside the db
export default mongoose.model("tiktkVideos", tiktokSchema);
