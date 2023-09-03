import sharp from 'sharp';
import { interpolateName } from 'loader-utils';

export default function imagesLoader(input) {
  const loaderCallback = this.async();

  process(this, input)
    .then((result) => {
      loaderCallback(null, result);
    })
    .catch((err) => loaderCallback(err));
}

async function process(context, input) {
  const image = sharp(input);

  const imageData = await image.resize(200).toFormat('webp').toBuffer();

  const fileName = interpolateName(context, context.getOptions().name, {
    content: imageData,
  });

  this.emitFile(fileName, imageData);

  return `export default __webpack_public_path__ + ${JSON.stringify(fileName)}`;
}

// receive input as Buffer
imagesLoader.raw = true;
