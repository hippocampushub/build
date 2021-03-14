const hashCode = (value: string) => {
    let hash = 0;
    for (let i = 0; i < value.length; i++) {
        let character = value.charCodeAt(i);
        hash = ((hash << 5) - hash) + character;
        hash = hash & hash;
    }
    return hash;
}

export {
    hashCode
}