'use client';

import { ApolloClient, ApolloLink, HttpLink, SuspenseCache } from '@apollo/client';
import {
    ApolloNextAppProvider,
    NextSSRInMemoryCache,
    SSRMultipartLink,
} from '@apollo/experimental-nextjs-app-support/ssr';

function makeClient() {
    const httpLink = new HttpLink({
        // this needs to be an absolute url, as relative urls cannot be used in SSR
        uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
        // you can disable result caching here if you want to
        // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
        fetchOptions: { cache: 'no-store' },
    });

    return new ApolloClient({
        // use the `NextSSRInMemoryCache`, not the normal `InMemoryCache`
        cache: new NextSSRInMemoryCache(),
        link:
            typeof window === 'undefined'
                ? ApolloLink.from([
                      // in a SSR environment, if you use multipart features like
                      // @defer, you need to decide how to handle these.
                      // This strips all interfaces with a `@defer` directive from your queries.
                      new SSRMultipartLink({
                          stripDefer: true,
                      }),
                      httpLink,
                  ])
                : httpLink,
    });
}

function makeSuspenseCache() {
    return new SuspenseCache();
}

export function ApolloProvider({ children }: React.PropsWithChildren) {
    return (
        <ApolloNextAppProvider makeClient={makeClient} makeSuspenseCache={makeSuspenseCache}>
            {children}
        </ApolloNextAppProvider>
    );
}