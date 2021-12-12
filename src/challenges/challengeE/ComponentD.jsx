import React from 'react'
import LanguageContext from './LanguageContext'

class ComponentD extends React.Component {
    static contextType = LanguageContext;
    
    render() {
        const text = this.context === 'english' ? 'Submit': '登録';
        return(
            <button className="ui button primary">
                {text}
            </button>
        )
    }
}

export default ComponentD