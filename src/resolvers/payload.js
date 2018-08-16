export default (token) => {
    let base64Uri = token.split('.')[1];
    console.log(base64Uri,'<<<<< ASI LLEGA')
    let base64 = base64Uri.replace('-','+').replace('_','/');
    console.log(base64,'<<<<<Despues de que llega')
    console.log(JSON.parse(window.atob(base64)),'<<<<');
    return JSON.parse(window.atob(base64));
}