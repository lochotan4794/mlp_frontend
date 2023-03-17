import React from "react";

export class HtmlBody extends React.Component{
    rawMarkup(){
        var rawMarkup = this.props.content
        return { __html: rawMarkup };
    }
    render(){
        const {
            textIndent,
            fontSize,
          } = this.props
        return(
                <div style={{textAlign:"justify", textIndent: "20px", fontSize: "18px"}}>
                     <span dangerouslySetInnerHTML={this.rawMarkup()} />
                </div>
            )
    }
}