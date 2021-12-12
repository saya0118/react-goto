import React from 'react'
import LanguageContext from './LanguageContext'

class ComponentC extends React.Component {
    static contextType = LanguageContext;

    render() {
        const text = this.context === 'english' ? 'Name' : '氏名';
        return (
            <div className="ui field">
                <label>{text}</label>
                <input />
            </div>
        )
    }
}

export default ComponentC