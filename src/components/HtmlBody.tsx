import React from "react";

type Props = {
    textIndent: number,
    fontSize: number,
    content: any
}

type State = {

}

export class HtmlBody extends React.Component<Props, State>{

    constructor(props: Props) {
        super(props);
    }
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