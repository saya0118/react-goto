import React from 'react'
import reactDom from 'react-dom';
import ComponentB from './ComponentB'
import LanguageContext from './LanguageContext'

class ComponentA extends React.Component {
    state = { language: 'english' };

    onLanguageChange = language => {
        this.setState({ language });
    }

    render() {
        return(
            <div className="ui container">
                <div>
                    Select a language:
                    <i className="flag ca" onClick={() => this.onLanguageChange('english')} />
                    <i className="flag jp" onClick={() => this.onLanguageChange('japanese')}/>
                </div>
                <LanguageContext.Provider value={this.state.language}>
                    <ComponentB/>  
                </LanguageContext.Provider>
            </div>
        )
    }
}

export default ComponentA

