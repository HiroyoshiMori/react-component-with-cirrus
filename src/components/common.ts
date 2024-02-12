import {
    CommonDatasetType,
} from "./@types";

/**
 * Common Initialize function for attributes/classes
 * @param obj Object to initialize
 * @param initValue initial value when undefined
 * @param defaultValues
 */
export const initialize = <T extends object, K extends keyof T>(
    obj: T|undefined, initValue: T,
    defaultValues?: Map<K, any> | string[] | undefined,
): T => {
    if (obj === undefined) {
        obj = structuredClone(initValue as T);
    }
    if (defaultValues !== undefined) {
        if (Array.isArray(obj) && Array.isArray(defaultValues)) {
            defaultValues?.forEach((v) => {
                if(!(obj as Array<string>).includes(v)) {
                    (obj as Array<string>).push(v);
                }
            });
        } else if (defaultValues instanceof Map) {
            defaultValues.forEach((v, k: K) => {
                if (obj && !Object.hasOwn(obj, k)) {
                    obj[k] = v;
                }
            });
        }
    }

    return obj;
};

/**
 * Common Initialize function for datasets
 * @param datasets Dataset to initialize
 * @param arr keys to loop to initialize
 * @param initValue initial value when undefined
 */
export const initializeDatasets = <T extends {}, K extends keyof T>(
    datasets: T, arr: Array<K>, initValue: T[K]
) => {
    let datasetShown = {} as any;
    if (datasets === undefined) {
        datasets = Object.create({});
    }
    arr.forEach((k: K) => {
        if (datasets[k] === undefined) {
            datasets[k] = structuredClone(initValue);
        }
        if (datasetShown[k] === undefined) {
            datasetShown[k] = {};
        }
        datasetShown[k] = convertDataSet(datasets[k] as CommonDatasetType);
    });
    return {datasets, datasetShown};
};

/**
 * Convert style classes to white-space separated string
 * @param classes Array of style classes
 * @param separator Separator between each style class
 */
export function joinClasses(classes: string[] | undefined, separator: string = ' ') {
    return Array.isArray(classes) && classes.length > 0 && classes.join
        ? classes.join(separator)
        : undefined;
}

/**
 * Convert Map to Object for dataset of HTML elements which as key of 'data-*'
 * @param dataSet
 */
export function convertDataSet(dataSet: Map<string, any>) {
    let props = {} as any;
    if (dataSet.keys) {
        for (const key of dataSet.keys()) {
            const attributeKey = `data-${key}`;
            props[attributeKey] = dataSet.get(key);
        }
    }
    return props;
}
