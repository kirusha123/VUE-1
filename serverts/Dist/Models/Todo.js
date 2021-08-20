"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose_1 = require("mongoose");
var schema = new mongoose_1.Schema({
    t_id: { type: String, required: true, unique: true },
    title: { type: String, ref: 'Link', required: true },
    completed: { type: Boolean, required: true },
});
exports.default = mongoose_1.model('Todo', schema);
