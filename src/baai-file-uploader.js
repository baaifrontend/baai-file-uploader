import UploadTask from './upload-task'

const DEFAULT_CONFIG = {
  bucket: '',
  uploadUrl: 'https://cdn.hub.baai.ac.cn/v1/upload'
}

export default class BaaiFileUploader {

  constructor (config) {
    this.config = Object.assign(DEFAULT_CONFIG, config)
  }

  createTask (file) {
    return new UploadTask(file, this.config)
  }

}
