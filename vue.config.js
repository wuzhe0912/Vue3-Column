module.exports = {
  css: {
    loaderOptions: {
      scss: {
        /*
          sass-loader 版本差異，引用鍵名不同
          v8 down => data
          v8      => prependData
          v8 up   => additionalData
        */
        additionalData: `
          @import '@/scss/main.scss';
          @import '@/scss/_variable.scss';
        `
      }
    }
  }
};
