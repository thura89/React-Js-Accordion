import React, { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

const App = () => {
  return (
    <div>
      <Accordions data={faqs} />
    </div>
  );
};

const Accordions = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((item, i) => (
        <AccordionItem
          item={item}
          number={i}
          key={i}
          curOpen={curOpen}
          setCurOpen={setCurOpen}
        >
          {item.text}
        </AccordionItem>
      ))}
    </div>
  );
};

const AccordionItem = ({ item, number, curOpen, setCurOpen, children }) => {
  const isOpen = number === curOpen;
  const clickHandling = () => {
    setCurOpen(isOpen ? null : number);
  };
  return (
    <div
      className={`item ${isOpen === true ? "open" : ""}`}
      onClick={() => clickHandling()}
    >
      <p className="number">{number < 9 ? `0${number + 1}` : number + 1}</p>
      <p className="title">{item.title}</p>
      <p className="icon">{isOpen === true ? "-" : "+"}</p>

      {isOpen && <div className="content-box">{children}</div>}
    </div>
  );
};

export default App;
