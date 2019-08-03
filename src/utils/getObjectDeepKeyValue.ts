import {isObject, isString} from './isType';

interface StringObjectInterface {
    [t: string]: any;
}

const getObjectDeepKeyValue = (dotSeparatedKeys: string, object: StringObjectInterface) => {
    if (isObject(object) && isString(dotSeparatedKeys)) {
        const keys = dotSeparatedKeys.split('.');
        let value = object;

        for (const key of keys) {
            if (value[key] === undefined) {
                throw new Error(`getObjectDeepKeyValue: "${key}" is undefined.`);
            } else {
                value = value[key];
            }
        }

        return value;
    } else {
        throw new Error(`getObjectDeepKeyValue: dot separated keys is not a string or object is not an object.`);
    }
};

export default getObjectDeepKeyValue;