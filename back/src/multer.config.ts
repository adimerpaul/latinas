// multer.config.ts
import { diskStorage } from 'multer';

export const multerOptions = {
    storage: diskStorage({
        destination: './uploads',
        filename: (req, file, callback) => {
            const timestamp = new Date().toISOString().replace(/[-T:\.Z]/g, '');
            callback(null, `${timestamp}_${file.originalname}`);
        },
    }),
};
