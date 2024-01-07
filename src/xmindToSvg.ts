import JSZip from 'jszip';
import util from 'util';
import * as XmindLoader from "./xmindLoader";
import { SnowbrushRenderer } from "./snowbrushRenderer";
import * as fs from "fs";
import { Svg } from '@svgdotjs/svg.js';
export class XmindToSvgConverter {

    public async xmindToSvg() {
        if (!process.argv[2]) {
            console.error("Please enter the path to the XMind File as parameter");
            return;
        }
        const filename = process.argv[2]
        try {
            if (fs.existsSync(filename)) {
                const fileContent = fs.readFileSync(filename);
                let zipFile: JSZip = new JSZip();
                const zip: any = await zipFile.loadAsync(fileContent);
                const data: any = await XmindLoader.loadFromXMind(zip);
                const renderer = new SnowbrushRenderer(data.sheets)
                const svg: Svg = await renderer.render({ sheetIndex: 0 });
                const svgData = svg.svg();
                let result = util.inspect(svg, { showHidden: true, depth: null, colors: false });
                const targetFile = filename.replace(/\.[^/.]+$/, "") + ".svg";
                fs.writeFileSync(targetFile, svgData);
                console.log(targetFile + " created");
            }
            else {
                console.error(`The Xmind File ${filename} does not exist`);
            }
        } catch (error) {
            console.error(error);
        }
    }
}