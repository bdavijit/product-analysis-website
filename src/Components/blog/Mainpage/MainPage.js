import React, { useEffect, useState } from "react";
import BlogCard from "../BlogCard";
import "./style.css";
import "./activebtn.css";
import useBlogs from "../../../Hooks/useBlogs";
import { activeBTn } from "../../../Utility/ActiveBtn";

const MainPage = () => {
  const [DisplayBlog, SetDisplayBlog] = useState([]);
  const [blogs, SetBlogs] = useBlogs();

  let start = 0;

  // useEffect(() => {
  //   fetch("blogs.JSON").then(async (response) => {
  //     try {
  //       const data = await response.json();
  //       // console.log("response data?", data);
  //       SetBlogs(data);
  //       SetDisplayBlog(data.slice(0, 3));
  //     } catch (error) {
  //       console.log("Error happened here!");
  //       console.error(error);
  //     }
  //   });
  // }, []);

  useEffect(() => {
    SetDisplayBlog(blogs.slice(0, 3));
  }, [blogs]);

  const setBtn = (BtnsID, index) => {
    if (index === 1) {
      start = index - 1;
    } else {
      start = 3 * index - 3;
    }

    SetDisplayBlog(blogs.slice(start, start + 3));
    console.log(start, DisplayBlog);
    if (start > blogs.length - 1) {
      alert("No result Found");
      // setBtn('myDIV', 1);
    }

    activeBTn(BtnsID, index - 1);
  };

  // function activeBTn(BtnsID, index) {
  //   let header = document.getElementById(BtnsID);

  //   let Button_group = header.querySelectorAll(".btn");
  //   // console.log(Button_group);

  //   let Active_Btns = header.getElementsByClassName("active");
  //   for (const Active_Btn of Active_Btns) {
  //     // console.log("test2");

  //     Active_Btn.className = Active_Btn.className.replace("active", "");
  //   }

  //   // console.log("test");

  //   Button_group[index].className += " active";
  // }

  return (
    <>
      <section className="BlogBox">
        <br></br>
        {DisplayBlog.map((blog) => (
          <BlogCard key={blog.id} blog={blog} />
        ))}
      </section>
      <br></br>
      <br></br>
      <section id="myDIV">
        <button className="btn active" onClick={() => setBtn("myDIV", 1)}>
          1
        </button>
        <button className="btn" onClick={() => setBtn("myDIV", 2)}>
          2
        </button>
        <button className="btn" onClick={() => setBtn("myDIV", 3)}>
          3
        </button>
        <button className="btn" onClick={() => setBtn("myDIV", 4)}>
          4
        </button>
        <button className="btn" onClick={() => setBtn("myDIV", 5)}>
          5
        </button>

        <br></br>
        <br></br>
      </section>
    </>
  );
};

export default MainPage;
