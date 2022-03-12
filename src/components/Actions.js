import axios from 'axios';

 

export const getData = () => async(disptach) =>{
    try {
        const {data} = await axios.get('https://smartqdemo.firebaseio.com/events-data.json')

        disptach({type:"GET",data})
        //console.log(data)
    } catch (error) {
        console.log(error)
    }
}
