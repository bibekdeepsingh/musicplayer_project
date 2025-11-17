"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const playlist_controller_js_1 = require("../controllers/playlist.controller.js");
const router = (0, express_1.Router)();
router.get("/", playlist_controller_js_1.playlistController.getAll);
router.post("/", playlist_controller_js_1.playlistController.create);
router.delete("/:id", playlist_controller_js_1.playlistController.remove);
exports.default = router;
//# sourceMappingURL=playlist.routes.js.map