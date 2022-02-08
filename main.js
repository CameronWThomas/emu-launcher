// Modules to control application life and create native browser window
const {app, dialog, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
let fs = require('fs');
let filename = 'emulation-library-path.txt'


function createWindow () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    },
    title:"EmulatorSelection"
  })

  // and load the index.html of the app.
  mainWindow.loadFile('index.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  
  //console.log('should be writing to file');
  //test fs
  //fs.writeFileSync(filename, "test file content");
}
function createFolderSelectDialog () {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 300,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
      preload: path.join(__dirname, 'preload.js')
    },
    title:"LibrarySelection"
  })

  // and load the index.html of the app.
  mainWindow.loadFile('libSelect.html')

  // Open the DevTools.
  mainWindow.webContents.openDevTools()

  
  //console.log('should be writing to file');
  //test fs
  //fs.writeFileSync(filename, "test file content");
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
 

})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on("asynchronus-message", function(evt, message) {
  if(message == "open-paths-diag"){
    console.log('opening paths diag');
    createFolderSelectDialog();
  }
})

ipcMain.on("select-console", function(evt, args){
  console.log('select console in ipc main');
  console.log({evt, args})
});
