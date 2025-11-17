"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const prisma_js_1 = __importDefault(require("../../../lib/prisma.js"));
const router = (0, express_1.Router)();
router.get("/", async (req, res) => {
    const playlists = await prisma_js_1.default.playlist.findMany();
    res.json(playlists);
});
exports.default = router;
//# sourceMappingURL=playlist.js.map