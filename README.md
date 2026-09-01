# React Api Integration

- fetch
- axios 


### Fetch
  - get   
  - post
  - put
  - detele


### axios
 `npm install axios`

### GET Method
   

```
    import axios from 'axios'   

    async function getusers(){
        let response = await axios.get("url")
        console.log(response.data)
    }
   


```

### POST Method
   

```
    import axios from 'axios'   

    let payload ={
        username:"",
        password:""
    }


    async function addUsers(){
        let response = await axios.post("url",payload)
        console.log(response.data)
    }
   


```