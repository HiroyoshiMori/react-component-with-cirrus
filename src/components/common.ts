import {
    CommonDatasetType,
} from "./@types";

/**
 * Common Initialize function for attributes/classes
 * @param obj Object to initialize
 * @param arr keys to loop to initialize
 * @param initValue initial value when undefined
 * @param getDefaultValue function to get default value after initialize
 */
export const initialize = <T extends {}, K extends keyof T>(
    obj: T, arr: Array<K>, initValue: T[K],
    getDefaultValue?: (k: K) => string[] | undefined,
): T => {
    if (obj === undefined) {
        obj = Object.create({});
    }
    arr.forEach((k: K) => {
        if (obj[k] === undefined) {
            obj[k] = structuredClone(initValue as T[K]);
        }
        if (getDefaultValue !== undefined && Array.isArray(obj[k])) {
            const val = getDefaultValue(k);
            if (val) {
                val.forEach((v) => {
                    if(!(obj[k] as Array<string>).includes(v)) {
                        (obj[k] as Array<string>).push(v);
                    }
                });
            }
        }
    });
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
    return classes?.join
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
