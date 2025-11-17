"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistService = void 0;
const prismaClient_js_1 = require("../../../../prisma/prismaClient.js");
exports.playlistService = {
    getAll() {
        return prismaClient_js_1.prisma.playlist.findMany();
    },
    create(name) {
        return prismaClient_js_1.prisma.playlist.create({
            data: { name, songCount: 0 }
        });
    },
    remove(id) {
        return prismaClient_js_1.prisma.playlist.delete({
            where: { id }
        });
    }
};
//# sourceMappingURL=playlist.service.js.map