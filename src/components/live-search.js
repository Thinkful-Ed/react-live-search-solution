import React from 'react';

import SearchForm from './search-form';
import CharacterList from './character-list';
import CharacterCount from './character-count';


export default class LiveSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchTerm: ''
        }
    }

    render() {
        const characters = this.props.characters.filter(character =>
            character.name.toLowerCase().includes(
                this.state.searchTerm.toLowerCase()
            )
        );
        return (
            <div className="live-search">
                <SearchForm onChange={searchTerm => this.setState({searchTerm})} />
                <CharacterCount count={characters.length} />
                <CharacterList characters={characters} />
            </div>
        );
    }
}
