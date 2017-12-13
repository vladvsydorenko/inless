import fs from 'fs';
import glob from 'glob';
import typescript from 'typescript';
import cssnext from 'postcss-cssnext';
import typescriptPlugin from 'rollup-plugin-typescript2';
import postcssPlugin from 'rollup-plugin-postcss-modules';

const config = {
    electron: {
        name: 'electron',
        hasCSS: false,
    },
    backend: {
        name: 'backend',
        hasCSS: false,
    },
    frontend: {
        name: 'frontend',
        hasCSS: true,
    },
};
const { service: serviceName } = process.env;
const service = config[serviceName];
const plugins = [];

if (!service) throw new Error(`There is no "${serviceName}" service in config`);
if (service.hasCSS) { /* initialize CSS files because of a catch-22 situation: https://github.com/rollup/rollup/issues/1404 */
    glob.sync('src/**/*.css').forEach((css) => {
        const definition = `${css}.d.ts`
        if (!fs.existsSync(definition)) fs.writeFileSync(definition, 'const mod: { [cls: string]: string }\nexport default mod\n');
    });

    plugins.push(
        postcssPlugin({
            extract: `./dist/inless.${service.name}.css`,
            plugins: [cssnext()],
            writeDefinitions: true,
        })
    );
}

export default {
    input: `./src/${service.name}/index.${service.name}.ts`,
    output: {
        file: `./dist/inless.${service.name}.js`,
        format: 'cjs',
    },
    plugins: plugins.concat([
        typescriptPlugin({
            // tsconfig: path.join(__dirname, 'dev-configs/tsconfig.json'),
            typescript 
        }),
    ]),
};
