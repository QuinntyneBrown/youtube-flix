System.config({
    transpiler: 'typescript',
    typescriptOptions: {
        emitDecoratorMetadata: true
    },
    map: {
        app: "./wwwroot"
    },
    packages: {
        app: {
            main: './main.ts',
            defaultExtension: 'ts'
        }
    }
});