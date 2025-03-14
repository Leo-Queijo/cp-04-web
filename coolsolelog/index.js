import chalk from "chalk";
import cows from "cows";

export default function coolsolelog(message) {

    const cow = cows();

    const colorfulMessage = chalk.bold.bgMagenta.white(message);

    console.log(`
        ___________
       /           \\
      (  ${colorfulMessage}  )
       \\___________/
           /   \\
          /     \\
        ${cow}
        `);
      }
