let delayTime = 0

const delay= (callback, time)=> new Promise(resolve=>{
    setTimeout(() => {
        callback()
        resolve(++delayTime)
    }, time);
})

delay(()=>console.log('�ڬO�ӭ�'),1000)
    .then((time)=>{
        return delay(
            ()=>console.log('�ڬO�׭�' + time),
            500
        )
    })
    .then((time)=>{
        return delay(
            ()=>console.log('�ڬO�׭�' + time),
            500
        )
    })
    .then((time)=>{
        return delay(
            ()=>console.log('�ڬO�׭�' + time),
            500
        )
    })