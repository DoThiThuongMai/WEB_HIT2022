const obj = {
    name: "Mai",
    age: 20,
    email: "dothithuongmai@gmail.com"
}
function run(obj){
    for(const key in obj){
        console.log(key + " : " + obj[key]);
    }
}
run(obj);