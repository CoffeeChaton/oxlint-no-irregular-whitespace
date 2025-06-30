// @ts-check
import eslint from "@eslint/js";
// import oxlint from "eslint-plugin-oxlint";
import tseslint from "typescript-eslint";

const ts_es_rules = tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked,
    tseslint.configs.strictTypeChecked,
    tseslint.configs.stylisticTypeChecked,
    {
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname,
            },
        },
        ignores: [
            "eslint.config.mjs",
        ],
    },
);

export default [
    ...ts_es_rules, // other plugins
    //  ...oxlint.buildFromOxlintConfigFile("./.oxlintrc.json"),
];
