const mongoose = require('mongoose')

const StorageSchema = new mongoose.Schema(
    {
        url: { type: String },
        filename: { type: String, unique: true },

    },
    { timestamps: true, versionKey: false } //TODO: createdAt, updateAt

)

module.exports = mongoose.model("storages", StorageSchema)