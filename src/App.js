import "./styles.css" 
import postArr from "./data"
import Article from "./components/Article";
import Header from "./components/Header";
import Footer from "./components/Footer";

console.log(postArr)

const post = postArr.map((ele, idx) => {
  return (
    <Article
    key={idx}
    date={ele.date}
    title={ele.title}
    img={ele.img}
    post={ele.post}
    />
  )
})

export default function App() {
  return (
    <div className="App">
      <h1 className="main-title">Sartre's List</h1>
      <h3>Better-Dressed People</h3>
      <Header />
      <section>{post}</section>
      <Footer />
    </div>
  );
}


