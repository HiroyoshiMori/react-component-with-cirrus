import {CommonDatasetType} from "../components";

/**
 * Sleep like other languages.
 *
 * @param ms How long sleep in milliseconds
 * @see https://std9.jp/articles/01fmrrhkgrd5jkh2k0t55zbype
 */
export async function sleep(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Get date string with format
 *
 * @param date
 * @param format
 * @see https://ribbit.konomi.app/blog/javascript-date-format/
 */
export function getFormattedDate(date: Date, format: string) {
    const symbol = {
        M: date.getMonth() + 1,
        d: date.getDate(),
        h: date.getHours(),
        m: date.getMinutes(),
        s: date.getSeconds(),
        w: getWeekNumber(date),
    };

    const formatted: string = format.replace(/(M+|d+|h+|m+|s+|w+)/g, (v) =>
        ((v.length > 1 ? "0" : "") + symbol[v.slice(-1) as keyof typeof symbol]).slice(-2)
    );

    return formatted.replace(/(y+)/g, (v) =>
        date.getFullYear().toString().slice(-v.length)
    );
}

/**
 * Get Week number of the year
 * @param date
 */
export function getWeekNumber(date: Date) {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const firstMonday = new Date(
        oneJan.getTime()
        + (1 + (oneJan.getDay() - (oneJan.getDay() < 2 ? 0 : 7))) * (24 * 60 * 60 * 1000)
    );
    const numberOfDays = Math.floor(
        (date.getTime() - firstMonday.getTime()) / (24 * 60 * 60 * 1000)
    );
    return Math.ceil((1 + numberOfDays) / 7);
}

/**
 *  Capitalize first letter of string
 *  @param str
 */
export function capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Convert ReactNode to string
 *
 * @param element
 * @see https://github.com/kevinzwhuang/react-to-string/blob/master/src/react-to-string.js
 */
export function reactNodeToString(element: any): string {
    if (!element) {
        return '';
    }

    switch (typeof element) {
        case 'string':
            return element;
        case 'number':
            return String(element);
    }

    if (Array.isArray(element)) {
        return element.map((el) => reactNodeToString(el)).join('');
    }
    if (element.props && element.props.children) {
        return reactNodeToString(element.props.children);
    }

    return '';
}

/**
 * Check value in array with Regex.
 * 
 * @param arr array to check values
 * @param regex regex
 * @returns number same as Array.indexOf
 */
export function ArrayRegexIncludes(arr: Array<string|number>, regex: RegExp) {
    for (const i in arr) {
        const testStr = arr[i] as string;
        if (regex.test(testStr)) {
            return arr.indexOf(testStr);
        }
    }
    return -1;
}

/**
 * Generate random ID
 */
export function generateId(): string {
    const S="abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    const N=16
    return Array.from(crypto.getRandomValues(new Uint8Array(N))).map((n)=>S[n%S.length]).join('')
}

/**
 * Combine arrays as string with connector
 * @param items item arrays connect with connector
 * @param connector connector string
 * @param type
 * @see https://qiita.com/yama-t/items/d533f3385a53f887a3b0
 */
export function arrayCombine(
    items: any[], connector: string = '-', type: ('string'|'array') = 'string'
): any[] {
    const combine = (arr1: any[], arr2: any[]) => {
        if (arr1.length === 0) {
            return arr2;
        }
        return arr1.reduce((arr, v1) => {
            arr2.forEach(v2 => {
                const res = type === 'string'
                    ? (v1 + (v2 ? (connector + v2) : v2))
                    : [v1, v2];
                arr.push(res);
            });
            return arr;
        }, []);
    }
    return items.reduce(combine, []);
}

/**
 * Merge 2 style classes
 * @param arr1
 * @param arr2
 */
export function mergeStyleClasses(
    arr1: string[]|undefined, arr2: string[]|undefined
): string[] {
    return arr1
        ? arr1.concat(arr2 ?? []) : (arr2 ?? []);
}

/**
 * Merge 2 HTMLAttributes
 * @param obj1
 * @param obj2
 */
export function mergeHtmlAttributes(obj1: any, obj2: any) {
    return obj1
        ? {...obj1, ...obj2} : {...obj2};
}

/**
 * Merge 2 Datasets
 */
export function mergeDatasets(
    obj1: CommonDatasetType|undefined, obj2: CommonDatasetType|undefined
): CommonDatasetType {
    return obj1
        ? new Map([...obj1, ...(obj2 ?? new Map())])
        : new Map([...(obj2 ?? new Map())]);
}

/**
 * Remove indent in string given especially heardoc
 * @param str
 * @see: https://tex2e.github.io/blog/javascript/dedent
 */
export function deIndent(str: string): string {
    function scan(str: string, regex: RegExp) {
        if (!regex.global) throw new Error("regex must have 'global' flag set");
        let m, result = [];
        while ((m = regex.exec(str))) {
            m.shift();
            result.push(m);
        }
        return result;
    }

    str = str.trim();
    const margin = Math.min.apply(
        null, (
            Array.prototype.concat.apply(
                [], scan(str, /^( +)/gm)
            ).map((line: string) => line.length)
        )
    );

    return str
        .replace(new RegExp(`^ {${margin}}`, 'gm'), '')
        .replace(/^\n/, '');
}
