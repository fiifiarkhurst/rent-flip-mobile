import { useState } from "react";
import { storage } from "../../services/firebase";

const useImageUpload = (assetFolderName: string) => {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState<number | null>(null);

  const upload = (file: any, fileExtension: string): Promise<string> =>
    new Promise<string>((resolve, reject) => {
      setLoading(true); // true
      const fileNewName: string = new Date().toString() + fileExtension;
      const uploadTask = storage
        .ref(`${assetFolderName}/${fileNewName}`)
        .put(file);

      uploadTask.on(
        "state_changed",
        (snapshot: any) => {
          let initProgress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          setProgress(initProgress);
        },
        (error: any) => {
          setLoading(false);
          reject(error);
        },
        () => {
          storage
            .ref(assetFolderName)
            .child(fileNewName)
            .getDownloadURL()
            .then((url: string) => {
              setLoading(false);
              resolve(url);
            })
            .catch((e: Error) => reject(e));
        }
      );
    });

  return { upload, progress, loading };
};

export default useImageUpload;
