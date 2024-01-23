import multer, { diskStorage } from "multer";
export function uploadFiles() {
    const storage = diskStorage({});
    const multerUpload = multer({ storage });

    return multerUpload;
}