/* eslint-disable @typescript-eslint/no-unused-vars */

// exp is from https://eslint.org/docs/latest/rules/no-irregular-whitespace#skipstrings

const thing = function () /*<NBSP>*/ {
    return 'test';
};

const foo = function ( /*<NBSP>*/) {
    return 'test';
};

const bar = function /*<NBSP>*/() {
    return 'test';
};

const baz = function /*<Ogham Space Mark>*/() {
    return 'test';
};

const qux = function () {
    return 'test'; /*<ENSP>*/
};

const quux = function () {
    return 'test'; /*<NBSP>*/
};

const item = function () {
    // Description <NBSP>: some descriptive text
};

/*
Description <NBSP>: some descriptive text
*/

const func = function () {
    return / <NBSP>regexp/;
};

const myFunc = function () {
    return `template <NBSP>string`;
    //              oxlint default not check it?
};
