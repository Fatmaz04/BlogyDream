import styles from "../styles/Form.module.css";
import "font-awesome/css/font-awesome.min.css";
import React, { useContext, useState } from "react";
import { AppContext } from "./context";

export default function CreateForm() {
  const { addBlog } = useContext(AppContext);
  const [blogger, setName] = useState("");
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");

  const handleAddBlog = () => {
    if (!blogger || !header || !body) {
      alert("Please fill in all fields");
      return;
    }

    const currentDate = new Date();

    const year = currentDate.getFullYear();
    const month = String(currentDate.getMonth() + 1).padStart(2, "0");
    const day = String(currentDate.getDate()).padStart(2, "0");

    const date = `${year}-${month}-${day}`;

    const blog = { blogger, header, body, date };
    addBlog(blog);
    setName("");
    setHeader("");
    setBody("");

    alert("Blog added successfully! :D");
  };

  return (
    <>
      <div className={styles.container}>
        <form>
          <div className={styles.field}>
            <div>
              <i className="fa fa-user" aria-hidden="true"></i>
              &ensp;Username:
            </div>
            <input
              type="text"
              name="username"
              placeholder="Blogger Name"
              style={{ height: "30px" }}
              className={styles.InputField}
              onChange={(e) => {
                setName(e.target.value);
              }}
            />
          </div>
          <div className={styles.field}>
            <div>
              <i className="fa fa-pencil"></i>
              &ensp;Header:
            </div>

            <input
              type="text"
              name="header"
              placeholder="Blog Header"
              style={{ height: "30px" }}
              className={styles.InputField}
              onChange={(e) => {
                setHeader(e.target.value);
              }}
            />
          </div>
          <div className={styles.field}>
            <div>
              <i className="fa fa-file-text-o" aria-hidden="true"></i>
              &ensp;Blog:
            </div>

            <textarea
              name="body"
              rows="10"
              cols="30"
              placeholder="Write your Blog Here!"
              className={styles.InputField}
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></textarea>
          </div>
          <div className={styles.container}>
            <input
              type="submit"
              onClick={handleAddBlog}
              value="Submit"
              className={styles.submitBtn}
            />
          </div>
        </form>
      </div>
    </>
  );
}
