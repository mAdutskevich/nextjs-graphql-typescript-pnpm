import { gql } from '@apollo/client';

const rockets = gql(`
    query Dragons {
        dragons {
            name
            first_flight
            diameter {
                feet
            }
            launch_payload_mass {
                lb
            }
        }
    }
`);

export default rockets;
