import { DicomMessage } from "../src/DicomMessage";
import { createReadStream } from "fs";
import { join } from "path";

const dicomFilePath = join(__dirname, "./readstream-test.dcm");

it("reads a DICOM file using a readable stream", () => {
    const readStream = createReadStream(dicomFilePath);

    const dicomDict = DicomMessage.readFileStream(readStream);

    console.log(dicomDict);
});
