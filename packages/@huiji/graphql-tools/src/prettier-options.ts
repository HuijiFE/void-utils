import { Options } from 'prettier';

/**
 * Factory for prettier options
 */
export function defaultPrettierOptions(): Options {
  return {
    printWidth: 80,
    tabWidth: 2,
    useTabs: false,
    semi: true,
    singleQuote: true,
    trailingComma: 'all',
    bracketSpacing: true,
    jsxBracketSameLine: false,
    arrowParens: 'avoid',
    requirePragma: false,
    insertPragma: false,
    proseWrap: 'preserve',
  };
}
