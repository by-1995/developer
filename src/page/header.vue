<template>
  <div class="_header" v-html="data"></div>
</template>

<script>
import api from "./../api/api";
export default {
  data() {
    return {
      data: ""
    };
  },
  name: "headers",
  mounted() {
    // var GetQueryString = param => {
    //   const reg = new RegExp("(^|&)" + param + "=([^&]*)(&|$)");
    //   const r =
    //     window.location.search.substr(1).match(reg) ||
    //     window.location.hash
    //       .substring(window.location.hash.search(/\?/) + 1)
    //       .match(reg);
    //   if (r != null) {
    //     return decodeURIComponent(r[2]);
    //   }
    // };
    api
      .getnavHeader()
      .then(res => {
        console.log(res);
        if (res) {
          this.data = res;
          setTimeout(() => {
            const newScript = document.createElement('script');
          newScript.src=`${api._baseUrl}/common_module/header/header.js`
          const newcss = document.createElement('link');
          newcss.setAttribute('type','text/css');
          newcss.setAttribute('rel','stylesheet');
          newcss.setAttribute('href',`${api._baseUrl}/common_module/header/header.css`);
          //console.log(newScript,newcss);
          document.head.appendChild(newScript);
          var head = document.getElementsByTagName('head')[0];
          head.appendChild(newcss);
          }, 100);
        }
      });
  }
};
</script>

<style>
img {
  vertical-align: middle;
}
._header {
  width: 100%;
  height: 48px;
  background-color: rgba(56, 61, 64, 1);
}
._header ._headerL {
  float: left;
}
._menu_title {
  width: 178px;
  height: 30px;
  background-color: rgba(75, 81, 99, 1);
  text-align: center;
  line-height: 30px;
  transition: all 0.2s;
}
._header ._headerR {
  float: right;
}

._header ._headerL ._headerLF {
  display: flex;
}

._header ._headerR ._headerRF {
  display: flex;
}

._header ._headerL ._cyz_logo {
  width: 115px;
  height: 48px;
}

._header ._headerL ._cyz_logo img {
  margin: 9px 15.5px;
}

.search .ant-input {
  width: 164px;
  height: 28px;
  background-color: rgb(80, 85, 87);
  font-family: STSongti-SC-Regular;
  font-size: 12px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: rgb(146, 148, 146);
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  border-radius: 0px;
}
._header ._headerL ._title {
  text-decoration: none;
  width: 96px;
  height: 48px;
  line-height: 48px;
  text-align: center;
  border-left: solid 0.3px rgba(44, 44, 44, 1);
  border-right: solid 0.3px rgba(44, 44, 44, 1);
  font-family: MicrosoftYaHei;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.3px;
  color: #fffffe;
}
.search,
.message,
.order,
.help,
.user {
  height: 48px;
  line-height: 48px;
}
.search .ant-input{
   color:  #929492;
   box-sizing: border-box;
}
.search .ant-input-affix-wrapper {
  width: 100%;
  height: 28px;
  position: relative;
}
.ant-input{
    -webkit-transition: all 0.3s;
    transition: all 0.3s;
        padding: 4px 11px;

}
.ant-input-affix-wrapper .ant-input-prefix,
.ant-input-affix-wrapper .ant-input-suffix {
  position: absolute;
  top: 50%;
  z-index: 2;
  color: rgba(0, 0, 0, 0.65);
  line-height: 0;
      transform: translateY(-50%);
}

.search .ant-input-affix-wrapper .ant-input:not(:last-child) {
  padding-right: 39px;
}

.search .anticon-search:before {
  padding: 3px 0 3px 5px;
  border-left: 1px solid rgba(146, 148, 146, 1);
}

.search .ant-input-search:not(.ant-input-search-small) > .ant-input-suffix {
  right: 10px;
}

.search .ant-input-search-icon {
  font-size: 12px;
  color: #fff;
}

.search .ant-input {
  width: 164px;
  height: 28px;
  border: 0;
  border-radius: 0;
  background-color: rgba(80, 85, 87, 1);
  font-family: STSongti-SC-Regular;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #929492;
}

.search .ant-input:focus {
  color: #fff;
  width: 246px !important;
  background-color: rgba(39, 44, 47, 1);
  border: solid 1px rgba(85, 191, 219, 1);
}

.message {
  margin-left: 6px;
  padding-right: 13px;
}

.message:hover {
  cursor: pointer;
  background-color: rgba(43, 47, 50, 1);
}

.ant-badge-multiple-words {
  padding: 0 4px;
}

.ant-badge-not-a-wrapper .ant-badge-count {
  font-family: MicrosoftYaHei;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0px;
}

.ant-badge-count {
  -webkit-box-shadow: none;
  box-shadow: none;
}

.ant-popover-content {
  width: 210px;
}

.ant-popover-title {
  width: 210px;
  height: 50px;
  line-height: 50px;
  background-color: rgba(234, 237, 240, 1);
  border: solid 1px rgba(235, 237, 241, 1);
  font-family: STSongti-SC-Regular;
  font-size: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.6px;
  color: #171717;
  text-align: center;
  padding: 0;
}

.ant-popover-inner-content {
  padding-top: 50px;
  padding: 0;
}

.ant-popover-inner-content ul {
  height: 300px;
  overflow: auto;
  /* p标签中字体无法在一行显示完 */
  white-space: nowrap;
}

.ant-popover-inner-content ul li {
  width: 100%;
  height: 60px;
  border-bottom: solid 1px rgba(235, 237, 241, 1);
  padding: 13px 16px 13px 16px;
}

.ant-popover-inner-content li p {
  font-family: STSongti-SC-Regular;
  font-size: 12px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0.5px;
  color: #00a4d5;
  text-align: center;
}

.ant-popover-inner-content li p span {
  color: #171717;
}

.message_footer {
  height: 50px;
  line-height: 50px;
  text-align: center;
  font-family: STSongti-SC-Regular;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #00a4d5;
}

.ant-popover-placement-bottom > .ant-popover-content > .ant-popover-arrow {
  z-index: -1;
}

.order {
  border-left: solid 0.3px rgba(44, 44, 44, 1);
  padding: 0 12px;
}

.order:hover {
  cursor: pointer;
  background-color: rgba(43, 47, 50, 1);
}

.help {
  border-left: solid 0.3px rgba(44, 44, 44, 1);
  padding: 0 14px;
}

.user {
  border-left: solid 0.3px rgba(44, 44, 44, 1);
  padding: 0 12px;
}

.user:hover {
  cursor: pointer;
  background-color: rgba(43, 47, 50, 1);
}

.order span,
.help a {
  height: 14px;
  font-family: MicrosoftYaHei;
  font-size: 13px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: 0px;
  color: #fefefe;
}
</style>