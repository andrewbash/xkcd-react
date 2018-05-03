import React from 'react';

class SetComic extends React.Component {
    handleClick = (param) => (e) => {
        this.props.getComic(param);
    }

    render() {
        const currentComic = this.props.currentComic;
        return (
            <nav>
                <button onClick={this.handleClick(currentComic - 1)}>Previous</button>
                <button onClick={this.handleClick(Math.floor(Math.random() * currentComic))}>Random</button>
                <button onClick={this.handleClick(currentComic + 1)}>Next</button>
                <br />
                <button onClick={this.handleClick()}>Load Latest</button>
            </nav>
        )
    }
}

export default SetComic;