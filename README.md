# brave-eslint
ESLint module for use by Brave

Rules under `prettier/prettier` are also in the `.prettierrc` file in this repo which should be copied locallly in order to support format on save within VSCode & `--fix` in terminal working properly.

This repo was set up according to [this guide](https://blog.echobind.com/integrating-prettier-eslint-airbnb-style-guide-in-vscode-47f07b5d7d6a), and then adjusted according to review by the rest of the team. If you need to run the steps as listed in order to get things to work within VS Code (you should only need to install the extensions), you may need to re-run `npm install eslint@latest` as it may downgrade the version to 7.2.0