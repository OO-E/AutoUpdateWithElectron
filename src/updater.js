const { dialog } = require("electron")
const {autoUpdater} = require("electron-updater")
const log = require("electron-log")
autoUpdater.logger = log
autoUpdater.logger.transports.file.level = "info"

autoUpdater.autoDownload = false

module.exports = () => {


    autoUpdater.checkForUpdates()


    autoUpdater.on('update-available', () => {

        log.info("update available info")
        dialog.showMessageBox({
            type:"info",
            title:"update available",
            message:"A new version of electron",
            buttons:['update','No']
        }).then(result => {
            log.info("update button tapped-- ",result)
            if (result.response === 0) {
                log.info("update button tapped")
                console.log("test test")
                autoUpdater.downloadUpdate()
                
            }
        })

    })

    autoUpdater.on('download-progress', (progressObj) => {
        let log_message = "Download speed: " + progressObj.bytesPerSecond;
        log_message = log_message + ' - Downloaded ' + progressObj.percent + '%';
        log_message = log_message + ' (' + progressObj.transferred + "/" + progressObj.total + ')';
        sendStatusToWindow(log_message);
    })

    function sendStatusToWindow(text) {
        log.info(text);
        //homePageWindow.webContents.send('message', text);
    }
    

    autoUpdater.on('update-downloaded',() => {
       
        dialog.showMessageBox({
            type:"info",
            title:"update ready",
            message:"install and restart now",
            buttons:['Yes','Later']
        }).then(result => {
            if (result.response === 0) {
                log.info("install button tapped")
                autoUpdater.quitAndInstall(false, true)
            }
        })

    })
}