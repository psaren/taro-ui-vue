import classNames from 'classnames'
import { uuid } from '../../utils/common'
import Taro from '@tarojs/taro'

interface MatrixFile extends Partial<File> {
  type: 'blank' | 'btn'
  uuid: string
  url?: string
}

// 生成 jsx 二维矩阵
const generateMatrix = (
  files: MatrixFile[],
  col: number,
  showAddBtn: boolean
) => {
  const matrix: Array<MatrixFile>[] = []
  const length = showAddBtn ? files.length + 1 : files.length
  const row = Math.ceil(length / col)
  for (let i = 0; i < row; i++) {
    if (i === row - 1) {
      // 最后一行数据加上添加按钮
      const lastArr = files.slice(i * col)
      if (lastArr.length < col) {
        if (showAddBtn) {
          lastArr.push({ type: 'btn', uuid: uuid() })
        }
        // 填补剩下的空列
        for (let j = lastArr.length; j < col; j++) {
          lastArr.push({ type: 'blank', uuid: uuid() })
        }
      }
      matrix.push(lastArr)
    } else {
      matrix.push(files.slice(i * col, (i + 1) * col))
    }
  }
  return matrix
}

const ENV = Taro.getEnv()

const AtImagePicker = {
  name: 'AtImagePicker',
  props: {
    customStyle: {
      type: [Object, String],
      default: function () {
        return {}
      },
    },
    className: {
      type: [Object, String],
      default: function () {
        return {}
      },
    },
    files: {
      type: Array,
      default: function () {
        return []
      },
    },
    mode: {
      type: String,
      default: 'aspectFill',
      validator: (val) => {
        const modes = [
          'scaleToFill',
          'aspectFit',
          'aspectFill',
          'widthFix',
          'top',
          'bottom',
          'center',
          'left',
          'right',
          'top left',
          'top right',
          'bottom left',
          'bottom right',
        ]
        return modes.includes(val)
      },
    },
    showAddBtn: {
      type: Boolean,
      default: false,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    length: {
      type: Number,
      default: 4,
    },
    onChange: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
    onImageClick: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
    onFail: {
      type: Function,
      default: function () {
        return function () {}
      },
    },
  },
  computed: {
    rootCls() {
      return classNames('at-image-picker', this.className)
    },
    matrix() {
      const { files, length = 4, showAddBtn = true } = this
      const rowLength = length <= 0 ? 1 : length
      return generateMatrix(files, rowLength, showAddBtn)
    },
  },
  methods: {
    chooseFile(): void {
      const { files = [], multiple, count, sizeType, sourceType } = this
      const filePathName =
        ENV === Taro.ENV_TYPE.ALIPAY ? 'apFilePaths' : 'tempFiles'
      // const count = multiple ? 99 : 1
      const params: any = {}
      if (multiple) {
        params.count = 99
      }
      if (count) {
        params.count = count
      }
      if (sizeType) {
        params.sizeType = sizeType
      }
      if (sourceType) {
        params.sourceType = sourceType
      }
      Taro.chooseImage(params)
        .then((res) => {
          const targetFiles = res.tempFilePaths.map((path, i) => ({
            url: path,
            file: res[filePathName][i],
          }))
          const newFiles = files.concat(targetFiles)
          this.onChange(newFiles, 'add')
        })
        .catch(this.onFail)
    },

    handleImageClick(idx: number): void {
      this.onImageClick && this.onImageClick(idx, this.files[idx])
    },

    handleRemoveImg(idx: number): void {
      const { files = [] } = this
      if (ENV === Taro.ENV_TYPE.WEB) {
        window.URL.revokeObjectURL(files[idx].url)
      }
      const newFiles = files.filter((_, i) => i !== idx)
      this.onChange(newFiles, 'remove', idx)
    },
  },
}

export default AtImagePicker
