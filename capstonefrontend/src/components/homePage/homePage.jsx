import React from 'react'

export default class Weather extends React.Component {
    state = {
        loading :true
    };

    async componentDidMount(){
        const url = "http://maps.openweathermap.org/maps/2.0/weather/{op}/{z}/{x}/{y}?appid={3d9989bbe6ba43bd704538cf8de7d1c9}"
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }

    render(){
        return(
            <div>
                {this.state.loading ? <div>Loading..</div>:<div>person..</div>}
            </div>
        )
    }
}