const daysOfWeek = ['Yakshanba', 'Dushanba', 'Seshanba', 'Chorshanba', 'Payshanba', 'Juma', 'Shanba'];
const monthsOfYear = ['Yanvar', 'Fevral', 'Mart', 'Aprel', 'May', 'Iyun', 'Iyul', 'Avgust', 'Sentabr', 'Oktabr', 'Noyabr', 'Dekabr'];
export const convertDate = (date) => {
    const nowDate = new Date(date);
    const day = daysOfWeek[nowDate.getDay()];
    const month = monthsOfYear[nowDate.getMonth()];
    return `${day} ${nowDate.getDate()} ${month}`;
};
export const convertDateTime = (date) => {
    const nowDate = new Date(date);
    const day = daysOfWeek[nowDate.getDay()];
    const month = monthsOfYear[nowDate.getMonth()];
    const hours = nowDate.getHours();
    const minutes = nowDate.getMinutes();
    return `${day} ${nowDate.getDate()} ${month}  ${hours<10?`0`: ''}${hours}:${minutes<10?`0`: ''}${minutes}`;
}