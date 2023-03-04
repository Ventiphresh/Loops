class Machine extends React.Component {
    render(){
       const {s1, s2, s3} = this.props; 
       const winner = (s1 == s2) && (s2 == s3)

        return(  
        <div>
            <h1>Slot Machine</h1>
            <p>{s1} {s2} {s3}</p>
            <p>{winner ? "You won!" : "You Lost!"} </p>
        </div>
        );

    };
}