// https://stackoverflow.com/questions/38034673/determine-the-number-of-enum-elements-typescript
export const membersOfEnum = (obj: object) => Object.keys(obj).length / 2;