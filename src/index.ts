/* export * from './model/workbook'
export * from './snowbrushRenderer'
export * from './xmindLoader'
*/

import { XmindToSvgConverter } from "./xmindToSvg";

async function main() {
    new XmindToSvgConverter().xmindToSvg();

}

main();

