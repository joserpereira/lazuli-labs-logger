const pino = require('pino');

module.exports = pino(
        {
            timestamp: pino.stdTimeFunctions.isoTime,
            browser: {asObject: false},
            stream: {
                write(str) { console.info(str) }
              },
            // transport: {
            //     targets: [
            //         {
            //             level: 'info',
            //             target: 'pino-pretty',
            //             options: {}
            //         },
            //         {
            //             level: 'trace',
            //             target: 'pino/file',
            //             options: { destination: './pino-logger.log' }
            //         }
            //     ],
            // }
        },
    );