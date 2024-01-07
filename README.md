# XMind to SVG

This command line based program converts a XMind 8 file to a SVG file based on [this](https://github.com/xmindltd/xmind-viewer) deprecated tool named xmind-viewer (MIT).

I don't know why the xmind-viewer has been deprecated. They say: "Never ever use it in a production environment!".

It looks like that it works with XMind 8 files in most cases.

I had to adjust a little bit the coding of the viewer because the require command in the viewer leads to errors. I changed it to the import command.

I fixed a bug in the viewer: If there is a topic without text then it broke in the titleLayoutWorker.ts work function.

The program converts only the first sheet of the XMind file.

Hint: There is also an export function to SVG in the XMind 8 tool. My experience with it was, that I could not open the generated SVG file in the browser. That's why I created this program.

## Installation

- The program requires Node.js. You can download and install it from [here](https://nodejs.org/)
- Clone or download this Git repository
- If you downloaded it then unzip it to a folder you like
- Open a terminal or the command prompt
- Use the cd command to switch to the folder where you unzipped or cloned the repository to
- Enter the following command ```npm install```. This installs the dependencies
- Enter then the following command ```npm run build_only```. This converts the source code into executable JS files

## Execution of the program

You can run the program after the successful installation with the command ```npm run conv``` followed by the path to the XMind-file.

The SVG-file will be created in the folder of the XMind-file with the name of the XMind-file.

Example: ```npm run conv "C:\test\myxmind.xmind"``` converts the XMind into ```"C:\test\myxmind.svg"```
