const input = document.getElementById("numOfWords")
const generateBtn = document.getElementsByClassName("btn")[0]
const delBtn = document.getElementsByClassName("btn")[1]
const container = document.querySelector(".container")

const generateWord = (n)=>{
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let text = ""
    random = (Math.random() * 25).toFixed(0)
    
    if(text == ""){
       text+= letters[random]
    }

    for(let i=1; i<n; i++){
        text += letters[(Math.random() * 25).toFixed(0)].toLowerCase()
    } 
    return text
}



const generatePara = ()=>{
    numOfWords = Number(input.value)
    const newPara = document.createElement("p")
    let data = ""
    for(let i = 0; i<numOfWords; i++){
        let randomNumber = (Math.random() * 15).toFixed(0)
        data+=generateWord(randomNumber)
        data+=" "
    }

    newPara.textContent = data
    newPara.setAttribute("class", "para")
    container.append(newPara)


}


const deletePara = ()=>{
    const paraCollection = document.querySelectorAll(".para")
    length = paraCollection.length
    paraCollection[length-1].remove()
    
}


generateBtn.onclick = generatePara
delBtn.onclick = deletePara
