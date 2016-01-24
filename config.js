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
            main: './bootstrap.ts',
            defaultExtension: 'ts'
        }
    }
});