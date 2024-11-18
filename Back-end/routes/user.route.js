import express from "express";
import multer from "multer";
import path from "path";
import fs from "fs";
import {
  handleDeleteAccount,
  handleGetPDFFiles,
  handlePDFDelete,
  handlePDFReadFile,
  handleUpdatePassword,
  handleUpdateUsername,
  handleWordMeaning,
} from "../controllers/user.controller.js";
import { verifyToken } from "../services/jsonwebtoken.js";
const router = express.Router();

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./profiles");
  },
  filename: function (req, file, cb) {
    const parts = file.originalname.split(".");
    const extension = parts[parts.length - 1];
    const id = verifyToken(req.cookies["token"])._id;
    const filename = `profileof${id}.${extension}`;
    cb(null, filename);
  },
});

const uploader = multer({ storage });

// Storage for the PDF...
const pdfStorage = multer.diskStorage({
  destination: (req, file, cb) => {
    const userId = verifyToken(req.cookies["token"])._id;
    const userDir = path.join("./profiles", "uploads", userId, "pdfs");
    // Create user-specific folder if it doesn't exist
    fs.mkdirSync(userDir, { recursive: true });
    cb(null, userDir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, `${uniqueSuffix}-${file.originalname}`);
  },
});
//File filter to accept only pdfs
const fileFilter = (req, file, cb) => {
  if (file.mimetype === "application/pdf") {
    cb(null, true);
  } else {
    cb(new Error("Only PDF files are allowed!"), false);
  }
};

const pdfUploader = multer({ storage: pdfStorage, fileFilter });

router.post(
  "/updateuser",
  uploader.single("profile-image"),
  handleUpdateUsername
);

router.post("/updatepassword", handleUpdatePassword);
router.delete("/deleteuser", handleDeleteAccount);

router.post("/show-dictionary", handleWordMeaning);

router.post("/addpdfroute", pdfUploader.single("pdffile"), handlePDFReadFile);

router.get("/showallpdfs", handleGetPDFFiles);

router.delete("/deletepdf/:key", handlePDFDelete);

export default router;
