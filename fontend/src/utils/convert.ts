const MoneyConvert = (data:number) =>{
    const intValue = Math.floor(data);
    return intValue.toLocaleString('vi-VN');
}
const JsonConvert = (data:any) => {
    return JSON.stringify(data).replace(/[{}"]/g, '') 
}
const Convert = {
    MoneyConvert,
    JsonConvert
}

export default Convert