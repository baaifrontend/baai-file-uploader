export function createUploader () {
  return new BaaiFileUploader({
    bucket: 'temp'
  })
}
