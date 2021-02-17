module.exports = {
    pluginOptions: {
      electronBuilder: {
        builderOptions: {
          appId: 'com.test.ozgun',
          publish: {
              provider:"github"
          },
          mac: {
            category:"public.app-category.productivity"
          },
          win: {
            target:"zip",
            certificateFile:"private/electron.p12",
            certificatePassword:"123456",
            verifyUpdateCodeSignature:false
          }
        }
      }
    }
  }