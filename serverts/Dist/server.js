"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = express_1.default();
var express_validator_1 = require("express-validator");
var body_parser_1 = __importDefault(require("body-parser"));
var mongoose_1 = __importDefault(require("mongoose"));
var config_1 = __importDefault(require("config"));
var Todo_1 = __importDefault(require("./Models/Todo"));
var port = config_1.default.get("port") || 5050;
app.use(body_parser_1.default.json());
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
});
app.get("/", function (req, res) {
    res.redirect("/api");
});
app.get("/api", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        res.send("<h1>Api:</h1><h2>api/get/todos</h2><h2>api/get/todo/:id</h2>");
        return [2 /*return*/];
    });
}); });
app.get("/api/todos", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var todos, e_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Todo_1.default.find()];
            case 1:
                todos = _a.sent();
                if (!todos) {
                    return [2 /*return*/, res.json()];
                }
                //console.log(todos)
                res.send(JSON.stringify(todos));
                return [3 /*break*/, 3];
            case 2:
                e_1 = _a.sent();
                res.status(500).json({
                    "message": e_1.message
                });
                console.log(e_1.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.get("/api/todo/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var todo, e_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Todo_1.default.findOne({ t_id: req.params.id })];
            case 1:
                todo = _a.sent();
                if (todo) {
                    //console.log(todo)
                    return [2 /*return*/, res.status(200).json(todo)];
                }
                else {
                    return [2 /*return*/, res.json()];
                }
                return [3 /*break*/, 3];
            case 2:
                e_2 = _a.sent();
                res.status(500).json({
                    "message": e_2.message
                });
                console.log(e_2.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.post("/api/todo", [
    express_validator_1.check('id', "incorrect id").isLength({ min: 1 }),
    express_validator_1.check('title', "incorrect title").isLength({ min: 1 }),
    express_validator_1.check('completed', "incorrect completed").isBoolean()
], function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var errors, _a, id, title, completed, candidate, todo, e_3;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                _b.trys.push([0, 3, , 4]);
                errors = express_validator_1.validationResult(req);
                if (!errors.isEmpty()) {
                    return [2 /*return*/, res.status(400).json({
                            errors: errors.array(),
                            message: "Incorrect todo data"
                        })];
                }
                _a = req.body, id = _a.id, title = _a.title, completed = _a.completed;
                return [4 /*yield*/, Todo_1.default.findOne({ t_id: id })];
            case 1:
                candidate = _b.sent();
                if (candidate) {
                    return [2 /*return*/, res.status(400).json({ message: "Error id already exists" })];
                }
                todo = new Todo_1.default({ t_id: id, title: title, completed: completed });
                return [4 /*yield*/, todo.save()];
            case 2:
                _b.sent();
                res.status(201).json({ message: "todo added" });
                return [3 /*break*/, 4];
            case 3:
                e_3 = _b.sent();
                res.status(500).json({
                    "message": e_3.message
                });
                console.log(e_3.message);
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
app.delete("/api/todo/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var e_4;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                return [4 /*yield*/, Todo_1.default.deleteOne({ t_id: req.params.id })];
            case 1:
                _a.sent();
                res.status(200).json({ message: "todo was deleted successfully" });
                return [3 /*break*/, 3];
            case 2:
                e_4 = _a.sent();
                res.status(500).json({
                    "message": e_4.message
                });
                console.log(e_4.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
app.put("/api/todo", [
    express_validator_1.check('id', "incorrect id").isLength({ min: 1 }),
    express_validator_1.check('title', "incorrect title").isLength({ min: 1 }),
    express_validator_1.check('completed', "incorrect completed").isBoolean()
], function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var todo, e_5;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 2, , 3]);
                express_validator_1.validationResult(req.body);
                todo = {
                    t_id: req.body.id,
                    title: req.body.title,
                    completed: req.body.completed
                };
                //console.log(todo);
                return [4 /*yield*/, Todo_1.default.findOneAndUpdate({ t_id: todo.t_id }, todo, { new: true })];
            case 1:
                //console.log(todo);
                _a.sent();
                res.status(201).json({ message: "OK" });
                return [3 /*break*/, 3];
            case 2:
                e_5 = _a.sent();
                res.status(500).json({
                    "message": e_5.message
                });
                console.log(e_5.message);
                return [3 /*break*/, 3];
            case 3: return [2 /*return*/];
        }
    });
}); });
function start() {
    return __awaiter(this, void 0, void 0, function () {
        var e_6;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, mongoose_1.default.connect(config_1.default.get('mongoUri'), {
                            useNewUrlParser: true,
                            useUnifiedTopology: true,
                            useFindAndModify: false
                        })];
                case 1:
                    _a.sent();
                    app.listen(port, function () { return console.log('app has been started on http://localhost:', port); });
                    return [3 /*break*/, 3];
                case 2:
                    e_6 = _a.sent();
                    console.log('Server ERR', e_6.message);
                    process.exit(1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
start();
