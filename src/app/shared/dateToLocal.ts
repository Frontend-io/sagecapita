export const dateToLocal = (date: string): string => {
    const dateToks = date.split(' ');
    const [year, month, day] = dateToks[0].split('-').map(tok => +tok);
    const [hour, minute, second] = dateToks[1].split(':').map(tok => +tok);

    return new Date(Date.UTC(year, month - 1, day, hour, minute, second)).toString();
};
