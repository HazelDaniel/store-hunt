import { Wrapper } from "../../layout-components/wrapper/wrapper.component";
import { BlogItem } from "../blog-item/blog-item.component";
import { BlogBodyStyled, BlogHeroStyled } from "./blog.styles";

const BLOG_DATA = [
  {
    datePosted: `21 february, 2023`,
    title: `Increase your brand impression by 60%`,
    imageUrl: `IMAGES/blog/blog-5.jpg`,
    blogId: `jdklfjkldjfslxxdhifdji`,
  },
  {
    datePosted: `06 october, 2022`,
    title: `Why stores don't make up to half their capital in the first year`,
    imageUrl: `IMAGES/blog/blog-6.jpg`,
    blogId: `jdklfjkldjfsdfdfdfsddjlli`,
  },
  {
    datePosted: `06 october, 2022`,
    title: `"customers' dilemma" - what does that mean?`,
    imageUrl: `IMAGES/blog/blog-8.jpg`,
    blogId: `nitajskfgsdhwdkfdsdolll`,
  },
  {
    datePosted: `15 september, 2022`,
    title: `how to spot overpriced wholesales product`,
    imageUrl: `IMAGES/blog/blog-9.jpg`,
    blogId: `dfsdfijmfjweirjgsdg`,
  },
];

export const Blog = () => {
  return (
    <Wrapper>
      <BlogHeroStyled
        style={{ backgroundImage: `url(IMAGES/blog/blog-4.jpg)` }}
      >
        <div className="blog-hero-text-div">
          <p>
            <span className="blog-hero-text primary">STORE HUNT</span>
          </p>
          <span className="blog-hero-text-divide"></span>
          <p>
            <span className="blog-hero-text secondary">BLOG</span>
          </p>
        </div>
      </BlogHeroStyled>
      <BlogBodyStyled>
        <div className="blog-wrapper">
          {BLOG_DATA.map((blog) => (
            <BlogItem blog={blog} key={blog.blogId} />
          ))}
          <button className="blog-load-more-cta">
            load more
            <span>
              <svg
                width="21"
                height="21"
                viewBox="0 0 21 21"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.5 3.9375C14.1243 3.9375 17.0625 6.87562 17.0625 10.5C17.0625 14.1243 14.1243 17.0625 10.5 17.0625C6.87564 17.0625 3.9375 14.1243 3.9375 10.5C3.9375 9.52162 4.15117 8.59493 4.53378 7.76256C4.68514 7.43325 4.5409 7.04358 4.21158 6.89221C3.88227 6.74084 3.49259 6.88509 3.34122 7.21441C2.88119 8.21524 2.625 9.32859 2.625 10.5C2.625 14.8492 6.15076 18.375 10.5 18.375C14.8492 18.375 18.375 14.8492 18.375 10.5C18.375 6.15076 14.8492 2.625 10.5 2.625V3.9375Z"
                  fill="#08090A"
                />
                <path
                  d="M10.5 5.86196V0.700578C10.5 0.422382 10.1756 0.270409 9.96183 0.448506L6.86501 3.02919C6.70759 3.16038 6.70759 3.40215 6.86501 3.53334L9.96183 6.11403C10.1756 6.29213 10.5 6.14016 10.5 5.86196Z"
                  fill="#08090A"
                />
              </svg>
            </span>
          </button>
        </div>
      </BlogBodyStyled>
    </Wrapper>
  );
};
export default Blog;
