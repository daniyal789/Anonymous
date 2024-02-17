const addItem=async(item)=>{
    await randomDelay();
    let div=document.createElement(`div`)
    div.innerHTML=item
    document.body.append(div)
}
    const randomDelay=()=>{
        return new Promise((resolve, reject) => {
            let timer=1+3*Math.random()
            setTimeout(()=>{
                resolve()},timer*1000
            )
        })
    }
     async function main(){
        let t= setInterval(()=>{
            let last=document.body.getElementsByTagName(`div`)
            last=last[last.length-1]
            if(last.innerHTML.endsWith(`...`)){
                last.innerHTML=last.innerHTML.slice(0,last.innerHTML.length-3)
            }
            else{
                last.innerHTML=last.innerHTML+ `.`
            }
        },200)
        let text = ["Initialized Hacking now reading data",
                "Reading all Files",
                "Password files Detected",
                "Sending all passwords and personal files to server",
                "Cleaning up"]

    for (const item of text) {
         await addItem(item)
        }
        await randomDelay()
        clearInterval(t)
        window.close()
    }
main()
