class Friend extends React.Component {
    render(){
        const {name, hobbies} = this.props;
        return(  
        <div>
            <p>I am a friend</p>
            <p>{name}</p>
            <ul>
                {hobbies.map(h => <li>{h}</li>)}
            </ul>

        </div>
        );

    }
}