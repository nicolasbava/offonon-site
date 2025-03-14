export const copyToClipboard = (text: string): Promise<any> => {
    return navigator.clipboard.writeText(text)
}

export const truncateString = (text: string, length?: number): string => {
    return length && length <= text.length ? `${text.substring(0, length)}...` : text
}


export const hidePasswordText =(text: string): string => {
    return new Array<string>(text.length).fill("#").join("")
}

export const numberToPrice = (num: number): string => {
    return `${new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(num)}`
}