'use strict';

const path = require('path');
const filesystem = require('fs');
const { app, BrowserWindow, Menu } = require('electron');
const openAboutWindow = require('about-window').default;

let window

/**
 * Load the remote calendar service 
 * 
 * @author Cognophile
 * @returns void
 */
function loadService() {
    window.loadURL('https://calendar.google.com', {
        userAgent: 'Chrome'
    });
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
                { 
                    label: "About", 
                    click: () => openAboutWindow({
                        icon_path: path.join(__dirname, 'resources', 'icon.png'),
                        package_json_dir: __dirname,
                        product_name: 'Deskcal',
                        bug_link_text: 'Found a bug?',
                        bug_report_url: 'https://github.com/cognophile/Deskcal/issues/new',
                        homepage: 'https://github.com/cognophile/Deskcal',
                        use_version_info: true,
                        copyright: 'Copyright (c) cognophile 2020',
                        adjust_window_size: true,
                        win_options: {
                            parent: window,
                            modal: true,
                        },
                        show_close_button: 'Close'
                    }),
                    accelerator: "Command+,"
                },
                { type: "separator" },
                { label: "Hide", accelerator: "Command+H", click: function() { app.hide(); }},
                { label: "Quit", accelerator: "Command+Q", click: function() { app.quit(); }},
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
        width: 1600,
        height: 1000,
        resizable: true,
        transparent: false,
        autoHideMenuBar: true, 
        icon: process.platform === 'linux' && path.join(__dirname, 'resources', 'icon.png'),
        webPreferences: {
            nodeIntegration: true
        },
    });

    loadService();

    const document = window.webContents;
    const appTemplate = getApplicationTemplateBindings()
    Menu.setApplicationMenu(Menu.buildFromTemplate(appTemplate));

    document.on('dom-ready', () => {
        if (process.platform === 'darwin') {
            document.insertCSS(filesystem.readFileSync(path.join(__dirname, 'assets/styles.css'), 'utf8'));
        }
    });

    window.on('closed', function () {
        window = null
    });
}

app.on('ready', function () {
    initialiseWindow();
    window.show();
})

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', function () {
  if (window === null) {
    initialiseWindow()
  }
})