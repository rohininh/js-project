// create object that returns Promise with the response for the request made
// create object of the Promise driven HTTP client and ensure following code works
window.addData=(e)=>{
    axios.post("http://localhost:3000/data",
    {
        firstName:"Rohini",
        lastName:"Haravi"
    }).then (response=> {
        alert('record added')
        console.log(response);
    }).catch(err=>{

        console.log(err);
    })

}

const featchData=fetch("http://localhost:3000/data");
window.getData = (e) =>{
    axios.get('http://localhost:3000/data').then(
    response =>{
           //console.log(response.data)
           let formdata = '<ul>'
        let records = JSON.stringify(response.data);
        console.log(records)
         records.forEach(r => {
             formdata+= `<li>${r.firstName}.${r.lastName}</li>`
         })
        formdata+='</ul>'
        document.body.innerHTML += formdata;
    
        }).catch(err=>{
        console.log(err)
    })
}