// console.log("starting timer_tray.js");

const electron = require('electron');

const { Tray } = electron;

class TimerTray extends Tray {

    constructor (iconPath, mainWindow) {

        // passing "iconPath" through { Tray }
        //      as it did in "index.js" before building class
        super(iconPath);

        // event handler
        //  which we made before this class
        //   tray.on('click', (event, bounds) => { }

        // "this" of "this.on()" means a current class
        // console.log("this in TimerTray: ", this.on())

        // "this" of "this.onClick" is an object of the current class.
        // that means it binds "onClick()" to this class
        // onClick === event of tray.on('click', (event, bounds) => { 

        this.mainWindow = mainWindow;

        // "this" of "this.on()" is "tray" whichi is an instance of this class.
        //      that are used in the parent class
        this.on('click', this.onClick.bind(this));

        
    }

    
    onClick (event, bounds) {

            const {
                
                x,
                y

            } = bounds;
    
            const {
    
                height,
                width
    
            } = this.mainWindow.getBounds();
           // console.log('getBounds(): ', this.mainWindow.getBounds());
    
    
            const yPosition = process.platform === 'darwin' ? y : y - height;
    
            if (this.mainWindow.isVisible()) {
    
                this.mainWindow.hide();
    
            } else {
    
    
                // "setBounds()" sets up height and width and position info 
                this.mainWindow.setBounds({
    
                    x: x - (width / 2),
                    y: yPosition,
                    height,
                    width
    
                })
    
                this.mainWindow.show();
            }
    
    }
    
    

}

// for TimerTray is an object
module.exports = TimerTray;

// module.exports.TimerTray = TimerTray;

