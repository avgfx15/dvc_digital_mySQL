// | import chalk
import chalk from "chalk";

// # Success Log
export const successLog = (message) => {
  console.log(chalk.bold.bgHex("#4fff33")(message));
  console.log("");
};

// # Error Log
export const errorLog = (message) => {
  console.log(chalk.bold.bgRedBright(message));
  console.log("");
};

// # Info Log
export const infoLog = (message) => {
  console.log(chalk.bold.bgCyanBright(message));
  console.log("");
};
