"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.playlistService = void 0;
const prismaClient_1 = require("../../../../prisma/prismaClient");
exports.playlistService = {
    getAll() {
        return prismaClient_1.prisma.playlist.findMany();
    },
    create(name) {
        return prismaClient_1.prisma.playlist.create({
            data: { name, songCount: 0 }
        });
    },
    remove(id) {
        return prismaClient_1.prisma.playlist.delete({
            where: { id }
        });
    }
};
//# sourceMappingURL=playlist.service.js.map