import React from "react";
import { adminApi }  from "@/utils/api";
// import done from "../../assets/svgs/done.svg"
// import add from "../../assets/svgs/add.svg"
// import edit from "../../assets/svgs/edit.svg"
const done = ""
const add = ""
const edit = ""
const cancel =  ""
import severUrl from "@/utils/api";
// import done from "../../assets/svgs/done.svg"
// import add from "../../assets/svgs/add.svg"
// import edit from "../../assets/svgs/edit.svg"
// import cancel from "../../assets/svgs/cancel.svg"

const roleOfText = { 0: "paragraph", 1: "image", 2: "header", 3: "link" };

class TextObject extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      inserting: false,
      Editting: false,
      firstLoad: true,
      contentUpdate: "",
      cssIdUpdate: "",
      roleUpdate: 0,
      imageUpdate: null,
      linkUpdate: "",
      contentNew: "",
      cssIdNew: "",
      roleNew: 0,
      imageNew: null,
      linkNew: "",
      contentFirst: "",
      cssIdFirst: "",
      roleFirst: 0,
      imageFirst: null,
      linkFirst: "",
      heightUpdate: "60px",
      heightNew: "60px",
      heightFirst: "60px"
    };
  }

  componentDidMount() {
    this.setState({ roleUpdate: this.props.role })
    this.setState({ imageUpdate: this.props.image })
  }

  addAfter(array, index, newItem) {
    return [
      ...array.slice(0, index + 1),
      newItem,
      ...array.slice(index + 1, array.length)
    ];
  }

  Fetch() {
    this.setState({ contentUpdate: this.props.content })
    this.setState({ cssIdUpdate: this.props.cssId })
    this.setState({ roleUpdate: this.props.role })
    this.setState({ imageUpdate: this.props.image })
    this.setState({ linkUpdate: this.props.link })
    this.setState({ Editting: true })
  }

  handleEdit() {
    const data = { content: this.state.contentUpdate, link: this.state.linkUpdate, cssId: this.state.cssIdUpdate, role: this.state.roleUpdate, image: this.state.imageUpdate }
    adminApi("text", this.props.id, "update", data).then((resp) => {
      console.log(resp)
    });
    this.setState({Editting: false})
  }
  // on insert 
  handleBehind() {
    this.setState({ inserting: true })
  }

  handleInsert(e) {
    e.preventDefault();
    const data_object = { content: this.state.contentNew, link: this.state.linkNew, cssId: this.state.cssIdNew, role: this.state.roleNew, image: this.state.imageNew, slug: this.props.slug }
    console.log(this.state.imageNew)
    adminApi("text", this.props.id, "insert", data_object).then((resp) => {
      const newItem = { content: data_object.content, link: data_object.link, cssId: data_object.cssId, role: data_object.role, image: data_object.image, id: resp.data.id }
      const newData = [...this.props.data]
      newData.splice(this.props.fe_id + 1, 0, newItem);
      this.props.update(newData)
    });
    this.setState({ inserting: false })
  }

  handleAdd(e) {
    e.preventDefault();
    const data = { content: this.state.contentFirst, link: this.state.linkFirst, cssId: this.state.cssIdFirst, role: this.state.roleFirst, image: this.state.imageFirst, slug: this.props.slug }
    adminApi("text", this.props.id, "add", data).then((resp) => {
      console.log("tra ve nek")
      console.log(resp)
      const newItem = { content: resp.data.content, link: resp.data.link, cssId: resp.data.cssId, role: resp.data.role, image: resp.data.image, id: resp.data.id }
      const newData = [newItem]
      this.props.update(newData)
    });
  }

  handleDelete() {
    console.log("THIS ID")
    console.log(this.props.id)
    this.setState({ inserting: false })
    adminApi("text", this.props.id, "delete", null).then((resp) => {
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

  handleNewContentChange = (e) => {
    this.setState({heightNew: String(e.target.scrollHeight )+ "px"})
    this.setState({ contentNew: e.target.value })
  }

  handleUpdateContentChange = (e) => {
    this.setState({ contentUpdate: e.target.value })
    this.setState({firstLoad: false})
    this.setState({heightUpdate: String(e.target.scrollHeight )+ "px"})
    // console.log(String(e.target.scrollHeight )+ "px")
  }

  handleFirstContentChange = (e) => {
    this.setState({heightFirst: String(e.target.scrollHeight )+ "px"})
    this.setState({ contentFirst: e.target.value })
  }

  render() {
    const {
      slug,
      content,
      link,
      cssId,
      role,
      image,
      id,
      update,
      data,
      fe_id,
      first
    } = this.props

    return (
      <>
        <>
          <div style={{ display: "flex", flexDirection: "row", width: "100%", alignItems:"stretch" }}>
          <div style={{ width: "fit-content", display: "flex", flexDirection: "row" }}>
              <div>
                {first && <button onClick={(e) => this.handleAdd(e)}><img style={{ width: "10px" }} src={done} /></button>}
                {this.state.Editting && <button onClick={() => this.handleEdit()}><img style={{ width: "10px" }} src={done} /></button>}
                {!first && (<><button onClick={() => this.handleDelete()}><i class="fa-regular fa-trash-can"></i></button>
                  <button onClick={() => this.handleBehind()}><img style={{ width: "10px" }} src={add} /></button></>)}
                {!this.state.Editting && <button onClick={() => this.Fetch()} style={{ width: "20px" }}><img style={{ width: "10px" }} src={edit} /></button>}
              </div>
            </div>
            {first ? <><div style={{ display: "flex", flexDirection: "row" }}>
              {(this.state.roleUpdate == 1) && <img style={{ width: "200px" }} src={severUrl + image}></img>}
              <textarea placeholder={content} style={{width: this.state.roleUpdate == 1 ? "fit-content" : "90%", float:"left", height:this.state.roleUpdate == 1 ? "100px" : this.state.heightFirst}} value={this.state.contentFirst} onChange={(e) => this.handleFirstContentChange(e)} />
              <div style={{ width: "10px" }}>
                <textarea rows={1} cols={5} style={{ height: "fit-content" }} className="linkid" placeholder={link} value={this.state.linkFirst} onChange={(e) => this.setState({ linkFirst: e.target.value })} />
                <textarea rows={1} cols={5} style={{ height: "fit-content" }} className="cssid" placeholder={cssId} value={this.state.cssIdFirst} onChange={(e) => this.setState({ cssIdFirst: e.target.value })} />
                <select style={{ height: "fit-content" }} value={this.state.roleFirst} onChange={(e) => { this.setState({ roleFirst: e.target.value }) }}>
                  <option selected={this.state.roleFirst == 0} value={0}>paragraph</option>
                  <option selected={this.state.roleFirst == 1} value={1}>image</option>
                  <option selected={this.state.roleFirst == 2} value={2}>header</option>
                  <option selected={this.state.roleFirst == 3} value={3}>link</option>
                  <option selected={this.state.roleFirst == 4} value={4}>citation</option>
                  <option selected={this.state.roleFirst == 5} value={5}>appendix</option>
                  <option selected={this.state.roleFirst == 6} value={6}>h1</option>
                  <option selected={this.state.roleFirst == 7} value={7}>h2</option>
                  <option selected={this.state.roleFirst == 8} value={8}>h3</option>
                  <option selected={this.state.roleFirst == 9} value={9}>h4</option>
                  <option selected={this.state.roleFirst == 10} value={10}>code</option>
                  <option selected={this.state.roleFirst == 11} value={11}>ol</option>
                  <option selected={this.state.roleFirst == 12} value={12}>video</option>
                  <option selected={this.state.roleFirst == 13} value={13}>html</option>
                  <option selected={this.state.roleFirst == 14} value={14}>html_styled</option>
                  <option selected={this.state.roleFirst == 15} value={15}>math</option>
                  <option selected={this.state.roleFirst == 16} value={16}>table</option>
                  <option selected={this.state.roleFirst == 17} value={17}>img_src</option>
                </select>
                <input type="file"
                  // name="myImage"
                  accept="image/jpeg,image/png,image/gif"
                  onChange={(event) => {
                    this.setState({ imageFirst: event.target.files[0] })
                  }} />
              </div></div>
            </>
              : <>
                {(this.state.roleUpdate == 1) && <img style={{ width: "80px" }} src={severUrl + this.state.imageUpdate}></img>}
                <textarea style={{ width: this.state.roleUpdate == 1 ? "fit-content" : "90%", float:"left", height: this.state.heightUpdate }} placeholder={content} value={this.state.firstLoad ? content : this.state.contentUpdate} onChange={(e) => this.handleUpdateContentChange(e)} />
                
                <div style={{width:"10px", display: this.state.Editting ? "block" : "none"}}>
                  <textarea rows={1} cols={5} style={{ height: "fit-content" }} placeholder={link} value={this.state.linkUpdate} onChange={(e) => this.setState({ linkUpdate: e.target.value })} />
                  <textarea rows={1} cols={5} style={{ height: "fit-content" }} placeholder={cssId} value={this.state.cssIdUpdate} onChange={(e) => this.setState({ cssIdUpdate: e.target.value })} />
                  <select style={{ height: "fit-content" }} value={this.state.roleUpdate} onChange={(e) => { this.setState({ roleUpdate: e.target.value }) }}>
                    <option selected={this.state.roleUpdate == 0} value={0}>paragraph</option>
                    <option selected={this.state.roleUpdate == 1} value={1}>image</option>
                    <option selected={this.state.roleUpdate == 2} value={2}>header</option>
                    <option selected={this.state.roleUpdate == 3} value={3}>link</option>
                    <option selected={this.state.roleUpdate == 4} value={4}>citation</option>
                    <option selected={this.state.roleUpdate == 5} value={5}>appendix</option>
                    <option selected={this.state.roleUpdate == 6} value={6}>h1</option>
                    <option selected={this.state.roleUpdate == 7} value={7}>h2</option>
                    <option selected={this.state.roleUpdate == 8} value={8}>h3</option>
                    <option selected={this.state.roleUpdate == 9} value={9}>h4</option>
                    <option selected={this.state.roleUpdate == 10} value={10}>code</option>
                    <option selected={this.state.roleUpdate == 11} value={11}>ol</option>
                    <option selected={this.state.roleUpdate == 12} value={12}>video</option>
                    <option selected={this.state.roleFirst == 13} value={13}>html</option>
                    <option selected={this.state.roleFirst == 14} value={14}>html_styled</option>
                    <option selected={this.state.roleFirst == 15} value={15}>math</option>
                    <option selected={this.state.roleFirst == 16} value={16}>table</option>
                    <option selected={this.state.roleFirst == 17} value={17}>img_src</option>
                  </select>
                  <input type="file"
                    // name="myImage"
                    accept="image/jpeg,image/png,image/gif"
                    onChange={(event) => {
                      this.setState({ imageUpdate: event.target.files[0] })
                    }} />
                  </div>
              </>}
          </div>
          {this.state.inserting && <>
          <div style={{backgroundColor:"#eeeee4", padding: "5px"}}>          
            <textarea placeholder={content} style={{ width: this.state.roleUpdate == 1 ? "fit-content" : "90%", height:this.state.heightNew }} value={this.state.contentNew} onChange={(e) => this.handleNewContentChange(e)} />
            <textarea style={{ height: "fit-content" }} value={this.state.linkNew} onChange={(e) => this.setState({ linkNew: e.target.value })} />
            <textarea style={{ height: "fit-content" }} placeholder={cssId} value={this.state.cssIdNew} onChange={(e) => this.setState({ cssIdNew: e.target.value })} />
            <select style={{ height: "fit-content" }} value={this.state.roleNew} onChange={(e) => { this.setState({ roleNew: e.target.value }) }}>
              <option selected={this.state.roleNew == 0} value={0}>paragraph</option>
              <option selected={this.state.roleNew == 1} value={1}>image</option>
              <option selected={this.state.roleNew == 2} value={2}>header</option>
              <option selected={this.state.roleNew == 3} value={3}>link</option>
              <option selected={this.state.roleNew == 4} value={4}>citation</option>
              <option selected={this.state.roleNew == 5} value={5}>appendix</option>
              <option selected={this.state.roleNew == 6} value={6}>h1</option>
              <option selected={this.state.roleNew == 7} value={7}>h2</option>
              <option selected={this.state.roleNew == 8} value={8}>h3</option>
              <option selected={this.state.roleNew == 9} value={9}>h4</option>
              <option selected={this.state.roleNew == 10} value={10}>code</option>
              <option selected={this.state.roleNew == 11} value={11}>ol</option>
              <option selected={this.state.roleNew == 12} value={12}>video</option>
              <option selected={this.state.roleFirst == 13} value={13}>html</option>
              <option selected={this.state.roleFirst == 14} value={14}>html_styled</option>
              <option selected={this.state.roleFirst == 15} value={15}>math</option>
              <option selected={this.state.roleFirst == 16} value={16}>table</option>
              <option selected={this.state.roleFirst == 17} value={17}>img_src</option>
            </select>
            <input type="file"
              // name="myImage"
              accept="image/jpeg,image/png,image/gif"
              onChange={(event) => {
                this.setState({ imageNew: event.target.files[0] })
              }} />
            <button onClick={(e) => this.handleInsert(e)}><img style={{ width: "10px" }} src={done} /></button>
            <button onClick={(e) => this.handleInsert(e)}><img style={{ width: "10px" }} src={cancel} /></button>
          </div> 
          </>}
        </>
      </>
    );
  }
}

export default TextObject;
