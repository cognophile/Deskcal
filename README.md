# Deskcal 📅
[![Build Status](https://travis-ci.com/cognophile/Deskcal.svg?branch=master)](https://travis-ci.com/cognophile/Deskcal) 

<img src="resources/icon.png" alt="google-calendar-icon" width="64" height="64" align="right" hspace="0" vspace="3"/>

## Welcome! 👋
Deskcal is an unofficial cross-platform desktop application for managing your Google Calendar, locally. Now you can use the full Google Calendar product from your desktop! 

## Getting started 👩‍💻👨‍💻
To download the application, visit the [Releases](https://github.com/cognophile/Deskcal/releases) page and download the latest verison of the application suitable for your platform. If you're unsure which you need, check the list below.

* **Windows** 💻: Unzip `Deskcal-windows-*.zip` and double-click to run the contained `Deskcal.exe`.
* **macOS** 🍎: Unzip `Deskcal-macos-*.zip` and double-click to run the contained `Deskcal.app`. You should then copy this into your `Applications` folder.
* **Linux** 🐧: Unzip `Deskcal-linux-*.zip` and run the contained `Deskcal` after creating a desktop launcher. This may vary according to your flavour of Linux, but [this](https://askubuntu.com/a/330783/778594) may help.

## Reporting
If you encounter any issues with the application, please submit an [issue](https://github.com/cognophile/Deskcal/issues) with as much information as possible about your platform, the application version, what you did, what happend, and any errors displayed.

## Support
If you find this application useful and wish to take a moment to say a simple thanks, or support its development, then a star or donation would be hugely appreciated!

<a href="https://www.buymeacoffee.com/cognophile"><img src="https://img.buymeacoffee.com/button-api/?text=Buy me a coffee&emoji=&slug=cognophile&button_colour=FFDD00&font_colour=000000&font_family=Cookie&outline_colour=000000&coffee_colour=ffffff" /></a>

## Development ⚙️
### Prerequisties 🧱
* [Node.js and NPM](https://nodejs.org/en/)
* Wine

### Building 🏗
Once cloned and the prerequisites have been installed on your system, start by installing the project dependencies. 

```bash
npm install
```

You can then run the application within the Electron application development wrapper

```bash
npm start
```

When you're happy with your changes and wish to build the application for all platforms, use the provided build scripts. 

```bash
npm run build
```

Optionally, you can specify the platform to build individually, to save time.

```bash
npm run build:[windows|linux|macos]
```

## Contributing 🎁
Please read the [contributing guide](CONTRIBUTING.md) for more info. 

## License 💼
Licensed under the GNU General Public License v3.0. For more details, see [LICENSE](LICENSE).

## Acknowledgements 🙌
With thanks to [Freepik]("https://www.flaticon.com/authors/freepik") from [Flaticon](https://www.flaticon.com/") for creating and sharing the application icon.
