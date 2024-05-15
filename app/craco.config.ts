import {resolve} from 'path';

module.exports = {
    webpack: {
        alias: {
            '@': resolve(__dirname, 'src'),
        },
    },
};
