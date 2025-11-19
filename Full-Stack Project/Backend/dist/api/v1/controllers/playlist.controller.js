"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistController = void 0;
const playlist_service_js_1 = require("../services/playlist.service.js");
exports.playlistController = {
    async getAll(req, res) {
        try {
            const playlists = await playlist_service_js_1.playlistService.getAll();
            return res.json(playlists);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Server error" });
        }
    },
    async create(req, res) {
        try {
            const { name } = req.body;
            if (!name) {
                return res.status(400).json({ error: "Name is required" });
            }
            const playlist = await playlist_service_js_1.playlistService.create(name);
            return res.status(201).json(playlist);
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Server error" });
        }
    },
    async remove(req, res) {
        try {
            const id = Number(req.params.id);
            if (isNaN(id)) {
                return res.status(400).json({ error: "Invalid playlist ID" });
            }
            const result = await playlist_service_js_1.playlistService.remove(id);
            if (!result) {
                return res.status(404).json({ error: "Playlist not found" });
            }
            return res.json({ message: "Playlist deleted", id });
        }
        catch (error) {
            console.error(error);
            return res.status(500).json({ error: "Server error" });
        }
    }
};