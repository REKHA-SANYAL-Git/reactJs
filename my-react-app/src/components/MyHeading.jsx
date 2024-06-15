import React from "react";

// const MyHeading = (props) => {
//   const a = props.text;
//   return (
//     <>
//       <h1>{props.name}</h1>
//       <h2>{a}</h2>
//     </>
//   );
// };

const MyHeading = ({ name, text, additional }) => {
  return (
    <>
      <h1>{name}</h1>
      <div>{text}</div>
      <p>{additional}</p>
    </>
  );
};

const MySubHeading = () => <h5>I am learning React Js</h5>;
const MySubHeadingContent = () => (
  <h5>
    React is a JavaScript library for building user interfaces. React is used to
    build single-page applications. React allows us to create reusable UI
    components.
  </h5>
);

export default MyHeading;
export { MySubHeading, MySubHeadingContent };
