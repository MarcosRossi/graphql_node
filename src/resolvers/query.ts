import { IResolvers } from "graphql-tools";

const query: IResolvers = {
    Query: {
        hola(): string {
            return 'Hola mundo!';
        },
        holaConNombre(__: void, { nombre }): string {
            return `Hola mundo ${nombre}`
        },
        holaCursoGraphQL(): string {
            return 'Hola mundo CursoGraphQL!';
        }
    }
};

export default query;