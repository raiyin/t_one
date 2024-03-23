export const tagsToHashTagString = (tags: string[]) => {
    tags = tags.map(tag => '#' + tag)
    return tags.join(', ')
}
