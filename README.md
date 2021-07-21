# Discord-Presence
  A simple way to make use of Discord's rich presence feature, with support for buttons.
  
---

Requirements:
---
- [Node.js](https://nodejs.org/en/)
- A text editor
  - Notepad is fine, but not recommended. A better alternative would be [Notepad++](https://notepad-plus-plus.org/downloads/) or [VS Code](https://code.visualstudio.com/)
- A discord account

How to use:
---
1. Go to the [Discord developer portal](https://discord.com/developers/applications) and create a new application with the button on the top right.

2. Name the application. __This name is important as it will be what will be shown on your account.__

3. You should now be on the `General information` screen. Press on the `OAuth` button on the left side of your screen.
![](https://i.imgur.com/L9mlatX.png)

4. Open the `config.json` file in the `configs` folder, and enter in the `Client ID` and `Client secret` from the image above into the quotes (as seen below). 

![](https://i.imgur.com/IKx1T0H.png)

5. **Customise your presence!**
![](https://i.imgur.com/8k2DTpz.png)
  
6. Run `run.bat`. __Only works if you have Node.js and your game activity visible on Discord.__
  
Creating assets: __(OPTIONAL)__
---
- If you want to add images to your presence, like in the example above, you will need to use assets.
  - Using `gura_thinking` in your config will not do anything, unless you also add it as an asset in your application.
  
1. On the application page, on the left side, you should also see `Rich Presence`, click on it and you should see:
![](https://i.imgur.com/h0nWg3n.png)

2. On the bottom part of the screen, you will see `Rich Presence Assets`. Click on `Add Image(s)` to add assets. (Seen above)
  - __Images may take multiple minutes/hours to appear and be usable.__ 
  
3. When adding an asset, make sure to remember the name and to save your changes.
![](https://i.imgur.com/j53QkEf.png)

4. In your `config.json` file, in either `largeImageKey` or `smallImageKey`, add in the name of your chosen asset.
  - `largeImageText` and `smallImageText` appear when hovering over the large or small image.
  
5. Your images should now appear when running `run.bat`!

---
