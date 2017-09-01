import React from "react";
 
class content extends React.Component {
    render() {
        return( 
            <div className="article">
                <h2>{this.props.articleTitle}</h2>
                <a href={this.props.articleUrl}>Click here</a>
                
            </div>    
        );
    }
}