function validateInput(){

    try{
        const inputValue = document.getElementById("userInput").value
        if(inputValue =="")
            throw "Input can not be empty";
        if (isNaN(inputValue))
            throw "Value must be a number";
            let b=Number(inputValue);
            if(b<10)
                throw "Number must not be less than 10"
    } catch (error){
        let erors = document.getElementById('error-message');
        erors.classList = "error-message";
        erors.style.display = 'block';
        erorrs.innerText = error;
         errors.style.color = 'white';
         errors.style.padding = '23px';
         errors.style.margin = '23px'


    }
}
function createData(){
    try{
    const title = document.getElementById('title').value;
    const body = document.getElementById('body').value;
    const userId = document.getElementById('userId').value;
  
        let url = "https://jsonplaceholder.typicode.com/todos"
        const options = {
            method: "POST",
            Headers: {
                Accept: "appliaction/json",
                "content-Type": "aplication/json"
            },
            body: JSON.stringify({
                titile: title,
                body: body,
                userId:userId
            })
        };
        fetch(url, options)
        .then((response)=> response.JSON() 
        .then((data) => {
            console.log(data)
        }))
    } catch (error) {
        // handle the error here
    }

        }
    
