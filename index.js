// its is boilerplate. Memorize it!!!

const electron = require('electron');

// It generates working paths to the operating sysem.
const path = require('path');

const TimerTray = require('./app/timer_tray');


// "Tray" is a component of electron 
//  to deploy the app icon on the Window tray.
// Just bear in mind that Window has a tray at the bottom
//  and that OSX has a tray at the top in defulat. 
const {
    app,
    BrowserWindow
    
    // Deleting "Tray" as we have child class, TimerTray of "app" folder
    // Tray
} = electron;

let mainWindow;

// needs "tray" variable
//  to create an event that the user clicks the icon 
//  to populate the app window.
// Then, we can make the event handler anywhere.

    // delete because of the child class
// let tray;

app.on('ready', () => {

    // [Making the BrowserWindow]

    mainWindow = new BrowserWindow({

        height: 500,
        width: 300,

        // it gets rid of the window frame.
        frame : false,

        // to prevent resizing from the user.
        resizable: false,

        // In order to show up
        // only when the user click the icon on the tray.
        show: false

    });

    mainWindow.loadURL(`file://${__dirname}/src/index.html`);

    // -----------------------------------------------------------------------

    // [Making the tray icon]

    // "@2x" out of window-icon@2x.png is not necessary 
    //  to be typed in the code because 'Electron recognizes it automatically.
    const iconName = process.platform === 'darwin' ?
        'iconTemplate.png' : 'windows-icon.png';

    // "__dirname" is a current working directory 
    //  where I am writing the code.
    // So from my current working direcctory, I can find the icon image and
    //  pass the icon through "path.join" method.
    // *** [FYI] "path.join" is able to contain more than a directory.
    const iconPath = path.join(__dirname, `./src/assets/${ iconName }`);

    // Then, the "path" will be passed throutg "Tray" object.
    // Without, the child class
    // 1)
    // tray = new Tray(iconPath);

    // With TimerTray class
    // 2) 
    
    // We do not need "tray" anymore becauseof child class
    // tray = new TimerTray(iconPath, mainWindow);
    new TimerTray(iconPath, mainWindow);

    // Then, make an event handler like "app.on()""
    //  that the user clicks on the icon.
    // 'click' is a built-in key reference in Electron.
    // 1)
    /* because of the child class
    tray.on ('click', () => {



        // If the user clicks the icon,
        //  the BrowserWindow component (assigned to mainWindow)
        //  starts to run.
        // 1)
        // mainWindow.show();


        // To toggle with "the satus of being visible and being invisible"
        // "isVisible()"" is a method of "mainWindow"
        // 2)
        mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();

    });
    */

    // ---------------------------------------------------------------------------------

    // [Setting up the app location] [with making an icon on tray]


    // In order to spot icon's closest location where the app pops up
    //  the "bounds" component is required.
    // "bounds" informs us the coordinate value (x, y) of the icon
    //  and size information (height, widht) of the icon.
    // ***** The return value of "bounds" is an object.

    /*

    // Delete this section because we made TrayTimer class 
    //      which is a child class of "Tray"

    tray.on('click', (event, bounds) => {

        // => bounds:  { x: 1115, y: 688, width: 40, height: 40 }
        // => x and y value: icon location (from left and top sides of the window screen)
        // => width and height : icon size
        // console.log('bounds: ', bounds);

        // => bounds.x:  1115 , bounds.y:  688 
        // => x and y values: icon location
        // console.log('bounds.x: ', bounds.x, ', bounds.y: ', bounds.y);


        // Click event bounds
        const {
            x,
            y
        } = bounds;

        // The app can be resized by the user.
        // The getBounds() method is to update the size to avoid the hard coding. 
        //  and returns the width and height values of "the app window" 
        //  from "mainWindow = new BrowserWindow() above"

        // Eventually, it makes us calibrate the location of the app window. 
        //  which generates x / y direction bounds of the app window
        // We do not need to find "height and width value"
        const {
            height,
            width
        } = mainWindow.getBounds();
        console.log('getBounds(): ', mainWindow.getBounds());


        // mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show();

        // For Window OS, we need to tweak "y" value
        //  because the tray is located at the bottom 
        //  rather than at the top of OSX.

        // "y - height" : because the icon distance is 
        //  from the top of the screen to the top of the icon
        const yPosition = process.platform === 'darwin' ? y : y - height

        if (mainWindow.isVisible()) {

            mainWindow.hide();

        } else {

            */

            /* because of child class

            // "setBounds()" sets up height and width and position info 
            mainWindow.setBounds({
            
            */

                // for OSX 
                // make sure the tray is on the top of the screen in default.

                /*
                //1)
                // x : the x of icon  - ( app width / 2) 
                //  the point the bounds object is looking for
                //   is the top-left of the app.           
                // "2" is for calibrating the center of the app and icon
                x: x - (width / 2),
            
                // It is the interface location 
                //  with the bottom of the icon
                //  and top of the app.
                y: y,

                // values of height and width 
                // from "const { height, width } = mainWindow.getBounds();"
                height: height, 
                width: width
                */

                /*
                // for OSX
                // ES6
                // 2)
                x: x - (width / 2),
                y,
                height,
                width
                */
               
                /* because of child class

                // for window amd OSX           
                // use yPosition
                x: x - (width / 2),
                y: yPosition,
                height,
                width

            })

            mainWindow.show();
        } 

    }); 
    */

});