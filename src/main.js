const { app, BrowserWindow, ipcMain } = require('electron');
const settings = require('electron-settings');
const debug = require('electron-debug');

debug();

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) { // eslint-disable-line global-require
    app.quit();
}

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow;
let projectPath = "";

const createWindow = () => {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        width: 1140,
        minWidth: 1140,
        height: 750,
        minHeight: 750,
        webPreferences: {
            webSecurity: false,
            textAreasAreResizable: false
        }
    });

    // and load the index.html of the app.
    mainWindow.loadURL(`file://${__dirname}/app/splash.htm`);

    // Open the DevTools.
    mainWindow.webContents.openDevTools();

    // Disable menubar
    // mainWindow.setMenu(null);

    // Emitted when the window is closed.
    mainWindow.on('closed', () => {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        mainWindow = null;
    });

    mainWindow.webContents.on('did-finish-load', function() {
        mainWindow.webContents.send('transition-loadproject', projectPath);
    });
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', function() {
    if(!settings.has("recentProjects"))
        settings.set('recentProjects', []);

    createWindow();
});

// Quit when all windows are closed.
app.on('window-all-closed', () => {
    // On OS X it is common for applications and their menu bar
    // to stay active until the user quits explicitly with Cmd + Q
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

ipcMain.on('transition-loadproject', (event, arg) => {
    projectPath = arg;
    mainWindow.loadURL(`file://${__dirname}/app/app.htm`);
});