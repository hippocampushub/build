const filterValues = (values, items) => {
    return (values.filter((item) => items.map((suggest) => item.toLowerCase().includes(suggest)).reduce((a, b) => a || b, false)) ?? [])
}

export {
    filterValues
}