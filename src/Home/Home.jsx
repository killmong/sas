import React from "react";
import "./Home.css";
import Hero from "../components/Hero/Hero";
import Section from "../components/Section/Section";
import CursorEffect from "../components/CursorEffect";
import Articles from "../Articles/Articles";
// Enhanced Article data for Articles 1-4
const articles = [
  {
    title: "Article 1 - India and Its Territories",
    content:
      "India, also called Bharat, is made up of States. Its territories include the territories of the States, Union territories, and any other territories that may be acquired later. India is described as a Union of States, which emphasizes its federal structure, while giving the Centre certain powers. The idea behind using 'Union' is to show the indivisibility of the country, meaning no state has the right to secede.",
  },
  {
    title: "Article 2 - Admission of New States",
    content:
      "Parliament has the authority to admit new states or establish new states by separating territories from existing states. This article allows for flexibility in shaping India's borders and internal structure. Historical examples include the integration of princely states post-independence and the admission of Sikkim as a state in 1975. This also covers creating Union Territories or merging smaller regions.",
  },
  {
    title: "Article 3 - Formation of New States and Alteration of Boundaries",
    content:
      "Parliament can create new states, alter boundaries, or change the names of existing states. It can also increase or decrease the area of a state. For such actions, the bill must be presented to the President, who will consult the state(s) affected by these changes. While their opinion is considered, Parliament is not bound by it. The process has been used several times, such as the creation of Telangana in 2014.",
  },
  {
    title: "Article 4 - Laws Related to Article 2 and 3",
    content:
      "Any law made under Article 2 or Article 3, for the admission or creation of new states, must include necessary changes to the First Schedule (which lists the states and territories of India) and the Fourth Schedule (related to representation in Rajya Sabha). These laws do not count as constitutional amendments, making the process simpler and faster. Article 4 ensures that changes in state boundaries don't require a full constitutional amendment, allowing for greater flexibility in India's federal structure.",
  },
];

  // IPC sections content array
  const ipcSections = [
    {
      title: "Section 1 - Title and Extent of Operation of the Code",
      content: "This Act shall be called the Indian Penal Code and shall extend to the whole of India except the State of Jammu and Kashmir. It provides the foundation for the penal law system in India.",
    },
    {
      title: "Section 2 - Punishment for Offenses within India",
      content: "Every person shall be liable to punishment under this Code for every act or omission contrary to the provisions thereof, of which he shall be guilty within India. This defines the extent of punishment for actions within Indian territories.",
    },
    {
      title: "Section 3 - Punishment for Offenses Committed Beyond India",
      content: "Any person liable, by any Indian law, to be tried for an offense committed beyond India shall be dealt with according to the provisions of this Code for any act committed beyond India in the same manner as if such act had been committed within India.",
    },
    {
      title: "Section 4 - Extension of Code to Extra-Territorial Offenses",
      content: "The provisions of this Code apply to any offense committed by any citizen of India in any place without and beyond India, on any ship or aircraft registered in India. This extends Indian jurisdiction to specific cases outside India.",
    },
  ];

  
function Home() {
  return (
    <div className="App">
      <Hero />
      <CursorEffect />
      <main id="main-content">
        {/* Render Section components */}
        <Section
          id="page1"
          title="Preamble"
          content="The Preamble serves as an introduction to the Constitution, reflecting the core values of justice, liberty, equality, and fraternity."
        />
        <Section
          id="page2"
          title="Fundamental Rights"
          content="Fundamental Rights guarantee the protection of rights such as freedom of speech, equality, and right to life to all citizens."
        />

        {/* Render articles section */}
        <h2 className="text-4xl pt-6 pb-3 head-align" id="page3">Constitution Articles</h2>
        <div className="articles-container">
          {articles.map((article, index) => (
            <Articles
              key={index}
              title={article.title}
              content={article.content}
            />
          ))}
        </div>
        {/* Render articles section */}
        <h2 className="text-4xl pt-6 pb-3 head-align" id="page4">Indian Penal Code 1860</h2>
        <div className="pb-3 articles-container">
          {ipcSections.map((article, index) => (
            <Articles
              key={index}
              title={article.title}
              content={article.content}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default Home;
