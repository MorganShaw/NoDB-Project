import React from "react";

const GenreSelector = (props) => {
    return (
        <div>
            <div className="genre-box">
                <input
                    name="genre"
                    type="text"
                    value={props.books.genre}
                    onChange={props.getGenre}
                    placeholder="Genre"/>
            </div>

        </div>
    )
}

export default GenreSelector;
