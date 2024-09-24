var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import exp from "express";
const router = exp.Router();
router.post("/logout", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            erorr: false,
            messege: "TRUE out",
            data: undefined,
        });
    }
    catch (error) {
        res.status(400).json({
            error: true,
            messege: "erorout",
            data: null,
        });
        console.error(error);
    }
}));
router.delete("/login", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        res.json({
            erorr: false,
            messege: "TRUE",
            data: undefined,
        });
    }
    catch (error) {
        res.status(400).json({
            error: true,
            messege: "erororororororoororororororororororoorororororororo",
            data: null,
        });
        console.error(error);
    }
}));
export default router;
