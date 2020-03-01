'use strict';

const path = require('path');
const { app, BrowserWindow, Menu } = require('electron')

let window

/**
 * Load the remote calendar service 
 * 
 * @author Cognophile
 * @returns void
 */
function loadService() {
    window.loadURL('https://calendar.google.com')
}

/**
 * Fetch the window template menu and shortcut bindings
 * 
 * @author Cognophile
 * @returns void
 */
function getApplicationTemplateBindings() {
    return [
        {
        label: "Application",
        submenu: [
                { label: "About Application", selector: "orderFrontStandardAboutPanel:" },
                { type: "separator" },
                { label: "Hide", accelerator: "Command+H", click: function() { app.hide(); }},
                { type: "separator" },
                { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }},
                { type: "separator" }
            ]
        },
        {
            label: "Edit",
            submenu: [
                { label: "Undo", accelerator: "CmdOrCtrl+Z", selector: "undo:" },
                { label: "Redo", accelerator: "Shift+CmdOrCtrl+Z", selector: "redo:" },
                { type: "separator" },
                { label: "Cut", accelerator: "CmdOrCtrl+X", selector: "cut:" },
                { label: "Copy", accelerator: "CmdOrCtrl+C", selector: "copy:" },
                { label: "Paste", accelerator: "CmdOrCtrl+V", selector: "paste:" },
                { label: "Select All", accelerator: "CmdOrCtrl+A", selector: "selectAll:" }
            ]
        }
    ];
}

/**
 * Initialise the initial window
 * 
 * @author Cognophile
 * @returns void
 */
function initialiseWindow() {
    window = new BrowserWindow({
        title: app.getName(),
        minWidth: 800,
        minHeight: 600,
        width: 1200,
        height: 900,
        resizable: true,
        transparent: false,
        autoHideMenuBar: true, 
        titleBarStyle: "hidden",
        icon: process.platform === 'linux' && path.join(__dirname, 'resources', 'icon.png'),
        webPreferences: {
            nodeIntegration: true
        },
    });

    window.on('closed', function () {
        // Dereference the window object, usually you would store windows
        // in an array if your app supports multi windows, this is the time
        // when you should delete the corresponding element.
        window = null
    })

    loadService();
    const appTemplate = getApplicationTemplateBindings()
    Menu.setApplicationMenu(Menu.buildFromTemplate(appTemplate));
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', initialiseWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On OS X it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  // On OS X it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (window === null) {
    initialiseWindow()
  }
})