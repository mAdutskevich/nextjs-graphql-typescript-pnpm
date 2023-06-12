import { gql } from '@apollo/client';

const ships = gql(`
    query Ships {
        ships {
            id
            model
            name
            type
            status
        }
    }
`);

export default ships;
