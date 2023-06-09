export const transition = (properties: string[], duration?: string, func?: string): string => {
    return properties.reduce(
        (accum, property) =>
            `${accum ? `${accum},` : accum} ${property} ${duration || '0.2s'} ${func || 'ease'}`,
        '',
    );
};
