'use strict';

const { spawn } = require('npm-run');

const TSC = 'tsc';


const builder = require('@hubgets/build.hubmodule.builder');
const { Platform, buildFactory } = require('@hubgets/build.hubmodule.heros-library');
const buildTs = (gulp) => {
    const spawnOpts = { stdio: 'inherit' };
    const transpileSources = () => spawn(TSC, [], spawnOpts);
    const buildTask = gulp.series(
        transpileSources
    );
    const cleanTask = () => spawn(TSC, ['--build', '--clean'], spawnOpts);

    return {
        run: buildTask,
        clean: cleanTask
    };
};
const gulp = require('gulp');

module.exports = builder(gulp, {
    build: buildFactory(Platform.ALL, { build: buildTs }),
});
