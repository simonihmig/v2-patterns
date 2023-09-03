import sharp from 'sharp';
import { interpolateName } from 'loader-utils';

export default async function imagesLoader(input) {
  if (!Buffer.isBuffer(input)) {
    throw new Error(`Expected a Buffer as input, got: ${typeof input}`);
  }

  const params = new URLSearchParams(this.resourceQuery);
  const image = sharp(input);

  const imageData = await image
    .resize(parseInt(params.get('width') ?? 200, 10))
    .toBuffer();

  const fileName = interpolateName(this, '[name]-[hash].[ext]', {
    content: imageData,
  });

  this.emitFile(fileName, imageData);

  return `export default __webpack_public_path__ + ${JSON.stringify(fileName)}`;
}

// receive input as Buffer
export const raw = true;
