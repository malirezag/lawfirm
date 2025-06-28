import HomeBanner from "../ui/HomeBanner";
import Footer from "../ui/Footer";
import CommentForm from "../ui/CommentForm";
import Comments from "../ui/Comments";
import Header from "../ui/Header";
import DisplayResume from "../ui/DisplayResume";
import SlideShow from "../ui/SlideShow";

function Home() {
  return (
    <>
      <Header />
      <HomeBanner />
      <DisplayResume />
      <SlideShow />
      <div className=" bg-gray-200 items-center justify-center flex flex-col md:flex-row    ">
        <Comments />
        <CommentForm />
      </div>
      <Footer />
      {/* <CommentsComponent /> */}
    </>
  );
}

export default Home;
