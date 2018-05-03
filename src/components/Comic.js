import React from 'react';

class Comic extends React.Component {
    render() {
        return (
            <article className="comic">
                <h2>{this.props.comicData.safe_title}</h2>
                <h3>Comic #{this.props.comicData.num}</h3>
                <img src={this.props.comicData.img} alt={`XKCD #${this.props.comicData.num}`}/>
                <p>{this.props.comicData.alt}</p>
            </article>
        
        )
    }
}

export default Comic;