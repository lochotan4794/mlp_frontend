/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import severUrl   from "@/utils/api";
import { adminApi, adminSave, adminRemoveTag, adminSetNext, adminSetPre } from "@/utils/api";
import axios from "axios";
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect, useState } from "react";
import TextObject from "./TextObject";
import CitationObject from "./CitationObject";
import AppendixObject from "./AppendixObject";
import Popup from "./Popup";

const TypeOfText = { 0: "paragraph", 1: "image", 2: "header", 3: "link", 4: "citation", 5: "appendix", 6: "h1", 7: "h2", 8: "h3", 9: "h4" };

const EditPost = () => {
  const location = useLocation();
  const [content, setContent] = useState([])
  const [pdf, setPdf] = useState(null)
  const [video, setVideo] = useState(null)
  const [created_on, setCreated_on] = useState(null)
  const [title, setTitle] = useState("")
  const [views, setViews] = useState()
  const [lang, setLang] = useState("")
  const [eng_ver, setEng_ver] = useState()
  const [appendix, setAppendix] = useState([])
  const [text, setText] = useState([])
  const [citation, setCitation] = useState([])
  const [styles, setStyles] = useState([])
  const [abstract, setAbstract] = useState("")
  const [status, setStatus] = useState("")
  const [thumnail, setThumnail] = useState(null)
  const [tag, setTag] = useState([])
  const [newTag, setNewTag] = useState()
  const [slug, setSlug] = useState("")
  const [nPost, setNPost] = useState(null)
  const [pPost, setPPost] = useState(null)
  const navigate = useNavigate();
  const [relationship, setRelationship] = useState([])
  const [isOpen, setIsOpen] = useState(false);
  const [nextIsOpen, setNextIsOpen] = useState(false);
  const [preIsOpen, setPreIsOpen] = useState(false);
  const [nextSlug, setNextSlug] = useState(null)
  const [preSlug, setPreSlug] = useState(null)
  const [topic, setTopic] = useState(null)
  const [ava, setAva] = useState(null)

  const togglePopup = () => {
    setIsOpen(!isOpen);
  }


  const toggleNextPopup = () => {
    setNextIsOpen(!nextIsOpen);
  }


  const togglePrePopup = () => {
    setPreIsOpen(!preIsOpen);
  }

  useEffect(() => {
    setSlug(location.state.slug)
    fetch(severUrl + `blog/${location.state.slug}/`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setContent(data.content);
        setCreated_on(data.created_on);
        setTitle(data.post.title);
        setViews(data.post.total_visited);
        setLang(data.post.lang);
        setEng_ver(data.post.eng_ver);
        setAppendix(data.appendix);
        setText(data.text);
        setCitation(data.citation);
        setStyles(data.styles);
        setAbstract(data.post.abstract)
        setStatus(data.post.status)
        setThumnail(data.post.thumnail)
        setSlug(data.post.slug)
        setVideo(data.post.video)
        setPdf(data.post.pdf)
        setTopic(data.post.topic)
        const rel = data.post.relationship
        const tags = data.tags
        const ts = []
        for (let i = 0; i < rel.length; i++) {
          for (let j = 0; j < tags.length; j++) {
            if (tags[j].id == rel[i].tag) {
              ts.push(tags[j].title);
            }
          }
        }
        setTag(ts)
      });
  }, [])

  const _onEdit = (type, id, action) => {
    adminApi(type, id, action).then((resp) => {
      console.log(resp)
    });
  };


  const updateAppendix = (data = null) => {
    if (data != null) {
      console.log("data update")
      console.log(data)
      setAppendix(data)
    }
  }

  const updateCitation = (data = null) => {
    if (data != null) {
      setCitation(data)
    }
  }

  const updateText = (data = null) => {
    if (data != null) {
      setText(data)
    }
  }

  const handleSave = () => {
    if (title == "Dummy") {
      window.alert("Title must be not dummy");
    } else {
      console.log(pdf)
      adminSave(title, abstract, status, eng_ver, thumnail, tag, slug, video, pdf, topic, ava).then((resp) => {
        setSlug(resp.data.slug)
      });
    }
  }

  const addTag = () => {
    const newItem = newTag
    setTag([...tag, newItem])
  }

  const removeTag = (e) => {
    adminRemoveTag(e, slug).then((resp) => {
      const data = resp.data
      const tag_title = []
      for (let j = 0; j < data.length; j++) {
          tag_title.push(data[j].title);
      }
      setTag([...tag_title])
    })
  }

  const setNext = () => {
    adminSetNext(slug, nextSlug).then((resp) => {
      console.log(resp)
    });
  }

  const handlePDFChange = (e) => {
    console.log("Change")
    console.log(e.target.files)
    setPdf(e.target.files[0])
  }

  const setPre = () => {
    adminSetPre(slug, preSlug).then((resp) => {
      console.log(resp)
    });
  }

  const searchPost = (key) => {
    var bodyFormData = new FormData();
    bodyFormData.append("key", key);
    axios.post(
      severUrl + "blog/admin/searchpost/",
      bodyFormData,
      {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${bodyFormData._boundary}`,
        }
      }
    ).then((response) => response.data)
      .then((data) => {
        console.log(data)
        console.log("here")
      });
  }

  return (<>
  <div style={{
    width: "100%",
    display: "flex",
    flexDirection: "column",
    paddingLeft: "10%",
    paddingRight: "10%"
  }}><a href="searchpost">{"<<< BACK"}</a>
    <input placeholder={title} value={title} onChange={(e) => setTitle(e.target.value)} /><div
      className="container"
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
        alignItems: "center",
        textAlign: "center",
      }}
    >  <p style={{ fontWeight: "bold" }}>Abstract</p>
      <textarea placeholder={abstract} style={{ width: "100%" }} value={abstract} onChange={(e) => setAbstract(e.target.value)} />
      <button onClick={() => {navigator.clipboard.writeText(`<thead>
                <tr>
                    <th>Name</th>
                    <th>Points</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Dom</td>
                    <td>6000</td>
                </tr>
                <tr class="active-row">
                    <td>Melissa</td>
                    <td>5150</td>
                </tr>
            </tbody>`)}}>click to copy table form</button>
             <span
              style={{
                marginTop: "20px",
                width: "100%",
                borderBottom: "dotted 1px #333",
                display: "block",
                opacity: "0.3",
                height: "1px",
              }}
            ></span>
      <p style={{ fontWeight: "bold" }}>Attachments</p>   
      {video && <><iframe width="420" height="315"
        src={video}>
      </iframe></>}
      {pdf && <><a href={pdf} target="_blank">Read more</a>
      </>}
      <span
              style={{
                marginTop: "20px",
                width: "100%",
                borderBottom: "dotted 1px #333",
                display: "block",
                opacity: "0.3",
                height: "1px",
              }}
            ></span>
      <p>Choose topic</p>
      <select style={{ height: "fit-content" }} value={topic} onChange={(e) => setTopic(e.target.value)}>
                  <option selected={topic == 0} value={0}>ML</option>
                  <option selected={topic == 1} value={1}>NLP</option>
                  <option selected={topic == 2} value={2}>SPEECH</option>
                  <option selected={topic == 3} value={3}>CV</option>
                  <option selected={topic == 4} value={4}>EMBED</option>
                  <option selected={topic == 5} value={5}>OTHER</option>
                  <option selected={topic == 6} value={6}>CAR</option>
                  <option selected={topic == 7} value={7}>NET</option>
                  <option selected={topic == 8} value={8}>STORY</option>
        </select>
        <span
              style={{
                marginTop: "20px",
                width: "100%",
                borderBottom: "dotted 1px #333",
                display: "block",
                opacity: "0.3",
                height: "1px",
              }}
            ></span>
      <div style={{ width: "100%", display: "flex", flexDirection: "row" }}>
        <div>
          <p>Video link</p>
          <input type="text" placeholder="video" value={video} onChange={(e) => setVideo(e.target.value)} /></div>
        <div>
          <p>PDF file</p>
          <input type="file" accept="application/pdf,application/vnd.ms-excel" class="fileinput" onChange={(event) => handlePDFChange(event)} /></div></div>
          <span
              style={{
                marginTop: "20px",
                width: "100%",
                borderBottom: "dotted 1px #333",
                display: "block",
                opacity: "0.3",
                height: "1px",
              }}
            ></span>
      <select value={status} onChange={(e) => { setStatus(e.target.value) }}>
        <option value={0}>Published</option>
        <option value={1}>Draft</option>
      </select>
      <span
              style={{
                marginTop: "20px",
                width: "100%",
                borderBottom: "dotted 1px #333",
                display: "block",
                opacity: "0.3",
                height: "1px",
              }}
            ></span>
      <p style={{ fontWeight: "bold" }}>Relatives</p>
      <div>
        <input
          type="button"
          value="Click to Open Next Popup"
          onClick={toggleNextPopup}
        />
        <input
          type="button"
          value="Click to Open Pre Popup"
          onClick={togglePrePopup}
        />
        {nextIsOpen && <Popup
          content={<>
            <button onClick={setNext}>set Next Post</button>
            <input placeholder="next slug" value={nextSlug} onChange={(e) => setNextSlug(e.target.value)} />
            <p>{nextSlug}</p>
          </>}
          handleClose={toggleNextPopup}
        />}
        {preIsOpen && <Popup
          content={<>
            <button onClick={setPre}>set Previous Post</button>
            <input placeholder="previous slug" value={preSlug} onChange={(e) => setPreSlug(e.target.value)} />
            <p>{preSlug}</p>
          </>}
          handleClose={togglePrePopup}
        />}
        <button onClick={() => window.open("searchslug", "_blank")}>Search Slug</button>
      </div>
      <span
              style={{
                marginTop: "20px",
                width: "100%",
                borderBottom: "dotted 1px #333",
                display: "block",
                opacity: "0.3",
                height: "1px",
              }}
            ></span>
      <p style={{ fontWeight: "bold" }}>Set POST Thumnail</p>
      {thumnail && <img style={{ width: "50%" }} src={severUrl + thumnail} />}
      <input type="file"
        // name="myImage"
        accept="image/jpeg,image/png,image/gif"
        onChange={(event) => {
          setThumnail(event.target.files[0])
        }} />
        <input type="text" placeholder="Set ava url" onChange={(event) => {
          setAva(event.target.value)
        }}/>
         <span
              style={{
                marginTop: "20px",
                width: "100%",
                borderBottom: "dotted 1px #333",
                display: "block",
                opacity: "0.3",
                height: "1px",
              }}
            ></span>
      {Array.from(tag).map((t) => (
        <><div style={{ display: "flex", flexDirection: "row" }}><div>{t}</div>
          <button onClick={(e) => removeTag(t)}>delete</button></div></>
      ))}
      <p style={{ fontWeight: "bold" }}>Manage Tag</p>
      <input onChange={(e) => setNewTag(e.target.value)} />
      <button onClick={(e) => { addTag() }}>Add Tag</button>
      <span
              style={{
                marginTop: "20px",
                width: "100%",
                borderBottom: "dotted 1px #333",
                display: "block",
                opacity: "0.3",
                height: "1px",
              }}
            ></span>
      <div>{lang == 0 ? "Current: VIE" : "Current: ENG"}</div>
      <button onClick={() => handleSave()} style={{ textDecoration: "bold", fontWeight: "bold" }}>Save Changes</button>
    </div>
    <div style={{ padding: "10px", border: "1px solid grey" }}>
      {Array.from(appendix).map(({ text, indentLevel, link, id }, fe_id) => (
        <AppendixObject slug={slug} text={text} indentLevel={indentLevel} link={link} id={id} update={updateAppendix} data={appendix} fe_id={fe_id} first={false} />
      ))}
      {(Array.from(appendix).length == 0) && <AppendixObject slug={slug} text={"Add"} indentLevel={"0"} link={"add link"} id={"Invalid"} update={updateAppendix} data={appendix} fe_id={"not valid"} first={true} />}</div>
    <span class="br"></span>
    <div style={{ padding: "10px", border: "1px solid grey" }}>
      {Array.from(text).map(
        ({
          content,
          cssId,
          id,
          image,
          link,
          role,
        }, fe_id) => (
          <TextObject content={content}
            link={link}
            cssId={cssId}
            role={role}
            image={image}
            id={id}
            fe_id={fe_id}
            update={updateText}
            data={text}
            slug={slug}
            first={false}
          />
        )
      )}
      {(Array.from(text).length == 0) && <TextObject content={content}
        link={"link"}
        cssId={"cssId"}
        role={"role"}
        image={"image"}
        id={"id"}
        update={updateText}
        fe_id={"fe_id"}
        data={text}
        slug={slug}
        first={true}
      />}
    </div>
    <span class="br"></span>
    <div style={{ padding: "10px", border: "1px solid grey" }}>
      {Array.from(citation).map(({ text, id }, fe_id) => (
        <CitationObject slug={slug} text={text} id={id} update={updateCitation} data={citation} fe_id={fe_id} first={false} />
      ))}
      {(Array.from(citation).length == 0) && <CitationObject slug={slug} text={"Add"} id={"Invalid"} update={updateCitation} data={citation} fe_id={"not valid"} first={true} />
      }
    </div>
  </div>
  </>)
}
export default EditPost;

