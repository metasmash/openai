// wrap your mongo query with paginate
export const paginate = (query, page, limit) => {
    const skip = page * limit - limit
    return query.skip(skip).limit(limit)
}

// to ignore case sensitivity on your filters
export const ignoreCase = (value: string) => ({
    $regex: new RegExp(value, 'i'),
})
