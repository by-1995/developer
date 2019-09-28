<template>
  <div>
    <el-upload
      class="avatar-uploader"
      :action="uploadUrl"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload"
      :data="{accessToken: $store.getters.access_token}"
    >
      <img v-if="imgUrl" :src="imgUrl" class="avatar">
      <i v-else class="el-icon-plus avatar-uploader-icon">
        <div class="uploadFont">点击上传营业执照</div>
      </i>
      <div slot="tip" class="el-upload__tip">
        <p>图片要求：单张图片不大于5M；</p>
        <p>拍照要求：请保持执照正面无反光，边框清晰光整，背景干净。</p>    
      </div>
    </el-upload>
  </div>
</template>

<script>
import api from '@/api/subspi'
  export default {
    name: 'UpLoadImg',
    props: {
      imgUrl: {
        type: String
      }
    },
    data() {
      return {
        imageUrl: '',
        uploadUrl: 'http://192.168.0.111:8054/open/upload'
      };
    },
    methods: {
      handleAvatarSuccess(res, file) {
        //this.imageUrl = URL.createObjectURL(file.raw)
        console.log(res, file)
      },
      beforeAvatarUpload(file) { // 图片上传前
        console.log(file)
        //const isJPG = file.type === 'image/jpeg'
        const isLt5M = file.size / 1024 / 1024 < 5
        // if (!isJPG) {
        //   this.$message.error('上传头像图片只能是 JPG 格式!')
        // }
        if (!isLt5M) {
          this.$message.error('上传头像图片大小不能超过 5MB!')
        }
        return isLt5M
      },
      // uploadImg (img) {
      //   console.log(img, img.file)
      //   let uploadData = new FormData()
      //   uploadData.append('file', img.file)
      //   console.log(uploadData)
      //   let params = {
      //     file: img.file.uid,
      //     accessToken: this.$store.getters.access_token
      //   }
      //   console.log(params)
      //   api.developerReg.uploadImg(params).then(res => {
      //     console.log(res)
      //     if (res.code === 0) {
      //       console.log(res)
      //     }
      //   })
      // }
    }
  }
</script>

<style lang="scss">
  .el-icon-plus .avatar-uploader-icon {
    position: relative;
  }
  .uploadFont {
    position: absolute;
    top: 40px;
    left: 44px;
    font-size: 14px;
    color: #8c939d;
  }
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 200px;
    height: 200px;
    line-height: 200px;
    text-align: center;
  }
  .avatar {
    width: 200px;
    height: 200px;
    display: block;
  }
</style>