import chalk from "chalk";

export const successLog = (message) => {
  console.log(chalk.bold.bgHex("#4fff33")(message));
};

export const errorLog = (message) => {
  console.log(chalk.bold.bgRed(message));
};
