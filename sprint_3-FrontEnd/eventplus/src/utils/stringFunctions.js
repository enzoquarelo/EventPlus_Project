export const dateFormatDbToView = date => {
    date = date.substr(0, 10)
    date = date.split('-')

    return date;
}