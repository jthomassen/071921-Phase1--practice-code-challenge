console.log('Hello!')
const dogInfoDiv = document.getElementById('dog-bar') 



fetch('http://localhost:3000/pups')
.then(res => res.json())
.then(data => addForEach(data))

function addForEach(dogArr){
    dogArr.forEach(appendDogName)
}

function appendDogName(dog) {
    const createSpan = document.createElement('span')
    createSpan.innerText = dog.name
    dogInfoDiv.append(createSpan)
    createSpan.addEventListener('click', e => e.target) 
}





