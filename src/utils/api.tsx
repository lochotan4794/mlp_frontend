import axios from "axios";

// const severUrl = "https://backend-env-dev.us-east-1.elasticbeanstalk.com/";
const severUrl = "http://127.0.0.1:8000/";
//const severUrl = "https://blog.centralglobalbackend.de/";
import { Post } from "@/interfaces";

export const getStories = async () => {
  const res = await fetch(severUrl + "blog/post/story/", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return res
}

export const getComments = async (slug: string) => {
  // return data;
  const res = await fetch(severUrl + "blog/" + slug + "/comments/", {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
  return res.json()
};

export const register = async (bodyFormData: FormData) => {
  try {
    const response = await axios.post(severUrl + `registration/login_user`, bodyFormData)
    if (response) {
      console.log(response.data.result);
      localStorage.setItem("user", JSON.stringify(response.data));
      window.location.reload();
    }
  } catch (err) {
      console.error('There was an error!', err);
      return err  
  }
};

export const createComment = async (email: string, text: string, reply_to: string, slug?: string) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("text", text);
    bodyFormData.append("email", email);
    bodyFormData.append("reply_to", reply_to);
    const resp = await axios.post(
      severUrl + "blog/" + slug + "/create/comments/",
      bodyFormData
    );
    console.log(resp);
    return resp;
  } catch (err) {
    console.error(err);
  }
};

export const updateComment = async (text: string, commentId: string, slug: string) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("id", commentId);
    bodyFormData.append("text", text);
    const resp = await axios.post(
      severUrl + "blog/" + slug + "/update/comments/",
      bodyFormData
    );
    return resp;
  } catch (err) {
    console.error(err);
  }
};

export const deleteComment = async (commend_id: string, slug: string) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("id", commend_id);
    const resp = await axios.post(
      severUrl + "blog/" + slug + "/delete/comments/",
      bodyFormData
    );
    return resp;
  } catch (err) {
    console.error(err);
  }
};

export const adminDeletePost = async (slug: string) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("slug", slug);
    const resp = await axios.post(
      severUrl + "blog/admin/deletepost/",
      bodyFormData
    );
    return resp;
  } catch (err) {
    console.error(err);
  }
};

export const adminSetNext = async (slug: any, nextSlug: any) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("slug", slug);
    bodyFormData.append("nextSlug", nextSlug);
    const resp = await axios.post(
      severUrl + "blog/admin/setnext/",
      bodyFormData
    );
    return resp;
  } catch (err) {
    console.error(err);
  }
};

export const adminSetPre = async (slug: any, preSlug: any) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("slug", slug);
    bodyFormData.append("preSlug", preSlug);
    const resp = await axios.post(
      severUrl + "blog/admin/setprevious/",
      bodyFormData
    );
    return resp;
  } catch (err) {
    console.error(err);
  }
};

export const removeTag = async (tag: string, post: string) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("tag", tag)
    bodyFormData.append("post", post)
    const resp = await axios.post(
      severUrl + "blog/admin/removetag/",
      bodyFormData,
      {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data;`,
        }
      }
    );
    return resp;
  } catch (err) {
    console.error(err);
  }
}

export const adminSave = async (title: string, abstract: string, status: string, eng_ver: any, thumnail: any, tag: any, slug: any, video=null, pdf=null, topic:any, ava=null) => {
  try {
    var bodyFormData = new FormData();
    if (title) {
      bodyFormData.append("title", title);
    }

    if (abstract) {
      bodyFormData.append("abstract", abstract);
    }
    if (status) {
      bodyFormData.append("status", status);
    }

    if (eng_ver) {
      bodyFormData.append("eng_ver", slug);
    }

    if (slug) {
      bodyFormData.append("slug", slug);
    }

    if (thumnail instanceof File) {
      bodyFormData.append("thumnail", thumnail);
    }

    if (ava) {
      bodyFormData.append("ava", ava);
    }

    if (video) {
      bodyFormData.append("video", video)
    }


    if (pdf) {
      bodyFormData.append("pdf", pdf)
    }
    console.log(pdf)

    if (topic) {
      bodyFormData.append("topic", topic)
    }

    const tag_json = { data: tag }
    bodyFormData.append("tag", JSON.stringify(tag_json));
    const resp = await axios.post(
      severUrl + "blog/admin/side/",
      bodyFormData,
      {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data;`,
        }
      }
    );
    console.log("original here")
    console.log(resp)
    return resp;
  } catch (err) {
    console.error(err);
  }
};


export const adminRemoveTag = async (tag: string, slug: string) => {
  try {
    var bodyFormData = new FormData();
    bodyFormData.append("tag", tag);
    bodyFormData.append("slug", slug);
    const resp = await axios.post(
      severUrl + "blog/admin/removetag/",
      bodyFormData,
      {
        headers: {
          'accept': 'application/json',
          'Accept-Language': 'en-US,en;q=0.8',
          'Content-Type': `multipart/form-data; boundary=${bodyFormData}`,
        }
      }
    );
    console.log("original here")
    console.log(resp)
    return resp;
  } catch (err) {
    console.error(err);
  }
};

export const adminApi = async (type: string, id: string, action = "none", data?: any ) => {
  // console.log("THIS IS MY DATA")
  // console.log(data)
  if (action == 'update') {
    try {
      var bodyFormData = new FormData();
      if (type == 'text') {
        bodyFormData.append("id", id);
        bodyFormData.append("type", type);
        bodyFormData.append("role", data.role);
        bodyFormData.append("content", data.content);
        bodyFormData.append("cssId", data.cssId);
        bodyFormData.append("link", data.link);
        if (data.image) {
          bodyFormData.append("image", data.image, data.image.name);
        }
        bodyFormData.append("slug", data.slug);
        const resp = await axios.post(
          severUrl + "blog/admin/update/",
          bodyFormData,
          {
            headers: {
              'accept': 'application/json',
              'Accept-Language': 'en-US,en;q=0.8',
              'Content-Type': `multipart/form-data;`,
            }
          }
        );
        return resp;
      } else if (type == 'citation') {
        bodyFormData.append("id", id);
        bodyFormData.append("type", type);
        bodyFormData.append("text", data.text);
        bodyFormData.append("slug", data.slug);
        const resp = await axios.post(
          severUrl + "blog/admin/update/",
          bodyFormData,
        );
        return resp;
      } else if (type == 'appendix') {
        bodyFormData.append("id", id);
        bodyFormData.append("type", type);
        bodyFormData.append("text", data.text);
        bodyFormData.append("link", data.link);
        bodyFormData.append("indentLevel", data.indentLevel);
        bodyFormData.append("slug", data.slug);
        const resp = await axios.post(
          severUrl + "blog/admin/update/",
          bodyFormData,
        );
        return resp;
      }

    } catch (err) {
      console.error(err);
    }

  } else if (action == 'insert') {
    try {
      var bodyFormData = new FormData();
      if (type == 'text') {
        bodyFormData.append("id", id);
        bodyFormData.append("role", data.role);
        bodyFormData.append("content", data.content);
        bodyFormData.append("cssId", data.cssId);
        bodyFormData.append("link", data.link);
        if (data.image) {
          bodyFormData.append("image", data.image, data.image.name);
        }
        bodyFormData.append("slug", data.slug);
        bodyFormData.append("type", type);
        const resp = await axios.post(
          severUrl + "blog/admin/insert/",
          bodyFormData,
          {
            headers: {
              // 'accept': 'application/json',
              // 'Accept-Language': 'en-US,en;q=0.8',
              'Content-Type': `multipart/form-data;`,
            }
          }
        );
        return resp;
      } else if (type == 'citation') {
        bodyFormData.append("id", id);
        bodyFormData.append("type", type);
        bodyFormData.append("text", data.text);
        bodyFormData.append("slug", data.slug);
        const resp = await axios.post(
          severUrl + "blog/admin/insert/",
          bodyFormData,
        );
        return resp;
      } else if (type == 'appendix') {
        bodyFormData.append("id", id);
        bodyFormData.append("type", type);
        bodyFormData.append("text", data.text);
        bodyFormData.append("link", data.link);
        bodyFormData.append("indentLevel", data.indentLevel);
        bodyFormData.append("slug", data.slug);
        const resp = await axios.post(
          severUrl + "blog/admin/insert/",
          bodyFormData,
        );
        return resp;
      }

    } catch (err) {
      console.error(err);
    }

  } else if (action == 'delete') {
    try {
      var bodyFormData = new FormData();
      bodyFormData.append("id", id);
      bodyFormData.append("type", type);
      const resp = await axios.post(
        severUrl + "blog/admin/delete/",
        bodyFormData
      );
      return resp;
    } catch (err) {
      console.error(err);
    }
  } else if (action == 'add') {
    try {
      var bodyFormData = new FormData();
      if (type == 'text') {
        bodyFormData.append("id", id);
        bodyFormData.append("role", data.role);
        bodyFormData.append("content", data.content);
        bodyFormData.append("cssId", data.cssId);
        bodyFormData.append("link", data.link);
        if (data.image) {
          bodyFormData.append("image", data.image, data.image.name);
        }
        bodyFormData.append("slug", data.slug);
        bodyFormData.append("type", type);
        const resp = await axios.post(
          severUrl + "blog/admin/add/",
          bodyFormData,
          {
            headers: {
              'accept': 'application/json',
              'Accept-Language': 'en-US,en;q=0.8',
              'Content-Type': `multipart/form-data`,
            }
          }
        );
        return resp;
      } else if (type == 'citation') {
        bodyFormData.append("id", id);
        bodyFormData.append("type", type);
        bodyFormData.append("text", data.text);
        bodyFormData.append("slug", data.slug);
        const resp = await axios.post(
          severUrl + "blog/admin/add/",
          bodyFormData,
        );
        return resp;
      } else if (type == 'appendix') {
        bodyFormData.append("id", id);
        bodyFormData.append("type", type);
        bodyFormData.append("text", data.text);
        bodyFormData.append("link", data.link);
        bodyFormData.append("indentLevel", data.indentLevel);
        bodyFormData.append("slug", data.slug);
        const resp = await axios.post(
          severUrl + "blog/admin/add/",
          bodyFormData,
        );
        return resp;
      }

    } catch (err) {
      console.error(err);
    }
  }

};

export default severUrl;
