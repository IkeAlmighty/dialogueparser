import React from 'react';
import './app.css';
import './index.css';


class App extends React.Component{
    
    render() {
        return (<>
            <UploadZone label = "Select a Source Text: "/>
            <div className = "container">
                <div>Character Catalogue<hr/></div>
                <div>
                    Tagging Box<hr/>
                    <TextPanel />
                </div>
                <div>
                    Formatted Text <hr/>
                </div>
            </div>
            </>
        );
    }
}

class UploadZone extends React.Component {

    render() {
        return <>
        <div className = "hrbar">
            <form action = {this.props.action} method = "get">
                {this.props.label}<input type = "file" />
            </form>
        </div>
        </>;
    }
}

class TextPanel extends React.Component {

    render() {
        return <>
            <textarea/>
        </>
    }
}

export default App;