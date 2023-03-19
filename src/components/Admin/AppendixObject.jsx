import React from "react";
import { adminApi }  from "@/utils/api";
// import done from "../../assets/svgs/done.svg"
// import add from "../../assets/svgs/add.svg"
// import edit from "../../assets/svgs/edit.svg"
const done = ""
const add = ""
const edit = ""

//manage server
class AppendixObject extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            inserting: false,
            Editting: false,
            textUpdate: "",
            indentLevelUpdate: 0,
            linkUpdate: "",
            textNew: "",
            linkNew: "",
            indentLevelNew: 0,
            textFirst: "",
            linkFirst: "",
            indentLevelFirst: 0,
            firstLoad: true,
        };
    }

    addAfter(array, index, newItem) {
        return [
            ...array.slice(0, index + 1),
            newItem,
            ...array.slice(index + 1, array.length)
        ];
    }

    Fetch() {
        this.setState({textUpdate: this.props.text})
        this.setState({indentLevelUpdate: this.props.indentLevel})
        this.setState({linkUpdate: this.props.link})
        this.setState({Editting: true})
    }

    handleEdit() {
        const data = { text: this.state.textUpdate, indentLevel: this.state.indentLevelUpdate, link: this.state.linkUpdate }
        adminApi("appendix", this.props.id, "update", data).then((resp) => {
            console.log(resp)
        });
    }

    handleBehind() {
        this.setState({ inserting: true })
    }

    handleInsert() {
        console.log(this.props.data)
        const data_object = { text: this.state.textNew, indentLevel: this.state.indentLevelNew, link: this.state.linkNew, slug: this.props.slug }
        adminApi("appendix", this.props.id, "insert", data_object).then((resp) => {
            // console.log(resp)
            const newItem = { indentLevel: data_object.indentLevel, text: data_object.text, link: data_object.link, id: resp.data.id }
            // const newData = this.addAfter(this.props.data, this.props.fe_id, newItem)
            const newData = [...this.props.data]
            newData.splice(this.props.fe_id + 1, 0, newItem);
            this.props.update(newData)
        });
        // const newItem = {indentLevel: resp.data.indentLevel, text: resp.data.text, link: resp.data.link, id: resp.data.id }
        this.setState({ inserting: false })
    }

    handleAdd() {
        const data = { text: this.state.textFirst, indentLevel: this.state.indentLevelFirst, link: this.state.linkFirst, slug: this.props.slug }
        adminApi("appendix", this.props.id, "add", data).then((resp) => {
            const newItem = { indentLevel: resp.data.indentLevel, text: resp.data.text, link: resp.data.link, id: resp.data.id }
            const newData = [newItem]
            this.props.update(newData)
        });
    }

    handleDelete() {
        this.setState({ inserting: false })
        adminApi("appendix", this.props.id, "delete", null).then((resp) => {
            const newData = this.props.data.filter((newData) => newData.id !== this.props.id)
            this.props.update(newData)
        });
    }

    handleNewTextChange = (e) => {
        this.setState({ textNew: e.target.value })
    }

    handleUpdateTextChange = (e) => {
        this.setState({ textUpdate: e.target.value })
    }


    render() {
        const { slug, text, indentLevel, link, id, update, data, fe_id, first } = this.props
        return (
            <><div style={{ display: "flex" }}>
                {first ? <>
                    <textarea placeholder={text} style={{ width: "100%" }} value={this.state.textFirst} onChange={(e) => this.setState({ textFirst: e.target.value })} />
                    <input placeholder={link} value={this.state.linkFirst} onChange={(e) => this.setState({ linkFirst: e.target.value })} />
                    <input placeholder={indentLevel} value={this.state.indentLevelFirst} onChange={(e) => this.setState({ indentLevelFirst: e.target.value })} />
                </>
                    : <>
                        <textarea placeholder={text} style={{ width: "100%" }} value={this.state.textUpdate} onChange={(e) => this.setState({ textUpdate: e.target.value })} />
                        <input placeholder={link} value={this.state.linkUpdate} onChange={(e) => this.setState({ linkUpdate: e.target.value })} />
                        <input placeholder={indentLevel} value={this.state.indentLevelUpdate} onChange={(e) => this.setState({ indentLevelUpdate: e.target.value })} /></>}

                <div style={{ width: "100%", display: "flex", flexDirection: "column" }}>
                    <div>
                        {first && <button onClick={() => this.handleAdd()}><img style={{width:"10px"}} src={done} /></button>}
                        {this.state.Editting && <button onClick={ () => this.handleEdit()}>Update</button>}
                        {!first && (<>                        <button onClick={() => this.handleDelete()}>delete</button>
                            <button onClick={() => this.handleBehind()}><img style={{width:"10px"}} src={add} /></button></>)}
                            {!this.state.Editting && <button onClick={() => this.Fetch()}><img style={{width:"10px"}} src={edit} /></button>}
                    </div>
                </div>
            </div>
                {this.state.inserting && <>
                    <textarea placeholder="enter new text" onChange={(e) => this.setState({ textNew: e.target.value })} value={this.state.textNew} />
                    <input value={this.state.linkNew} onChange={(e) => this.setState({ linkNew: e.target.value })} />
                    <input value={this.state.indentLevelNew} onChange={(e) => this.setState({ indentLevelNew: e.target.value })} />
                    <button onClick={() => this.handleInsert()}><img style={{width:"10px"}} src={done} /></button>
                </>}
            </>
        );
    }
}

export default AppendixObject;
