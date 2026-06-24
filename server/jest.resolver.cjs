const fs = require('fs');
const path = require('path');

module.exports = function resolver(request, options) {
    // Only rewrite relative imports ending with .js
    if (request.startsWith('.') && request.endsWith('.js')) {
        const tsPath = request.slice(0, -3) + '.ts';
        const fullTsPath = path.resolve(options.basedir, tsPath);

        if (fs.existsSync(fullTsPath)) {
            // Return the .ts file path – Jest will transform it with ts-jest
            return fullTsPath;
        }
    }

    // Fall back to default resolver
    return options.defaultResolver(request, options);
};
