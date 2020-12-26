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
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = void 0;
const handler = (event) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("Taking off in 5, 4, 3, 2, 1");
    if (event.httpMethod === "GET") {
        return {
            statusCode: 200,
            body: JSON.stringify({
                type: "GET",
                message: "Getting some data",
            }),
        };
    }
    if (event.httpMethod === "POST") {
        return {
            statusCode: 200,
            body: JSON.stringify({
                type: "POST",
                message: "Posting some data",
            }),
        };
    }
    return {
        message: "SERVERLESS FUNCTION IS WORKING",
    };
});
exports.handler = handler;
