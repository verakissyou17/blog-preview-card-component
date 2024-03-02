import articleImg from '../images/illustration-article.svg';
import avatarImg from '../images/image-avatar.webp';

function Content() {
  return (
    <main>
      <img src={articleImg} alt="article illustration" />
      <section className="card">
        <p className="card-title"> Learning </p>
        <p className='card-publish-date'>Published <time> 21 Dec 2023 </time>
        </p>
        <h1>HTML &amp; CSS foundations</h1>
        <p className="card-text"> These languages are the backbone of every website, defining structure,
          content, and presentation. </p>
        <div className="author-card">
          <img src={avatarImg} alt="author-image" />
          <p>Greg Hooper</p>
        </div>
      </section>
    </main>
  );
}

export default Content;
