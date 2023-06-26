const truncateString = (str: string): string => {
    if (str.length > 120) {
        return str.substring(0, 120);
    }
    return str;
}

export default truncateString;