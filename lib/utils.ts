export const formatDate = (dateStr:string) =>{
    const date = new Date(dateStr);
    const formatter = new Intl.DateTimeFormat("Id-ID",{
        dateStyle:"medium",
        timeStyle:"short"
    });
    return formatter.format(date)
}