import { BlogItemStyled } from "./blog-item.styles";

export const BlogItem = ({ blog }) => {
  return (
    <BlogItemStyled>
      <div className="blog-item-image-div">
        <img src={blog.imageUrl} alt="" className="blog-item-image" />
      </div>
      <div className="blog-item-content-div">
        <div className="BIC-date-div">
          <span>
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_11_888)">
                <path
                  d="M3.71875 0C4.01215 0 4.25 0.237849 4.25 0.53125V1.0625H12.75V0.53125C12.75 0.237849 12.9879 0 13.2812 0C13.5746 0 13.8125 0.237849 13.8125 0.53125V1.0625H14.875C16.0486 1.0625 17 2.01389 17 3.1875V4.25V5.3125V14.875C17 16.0486 16.0486 17 14.875 17H2.125C0.951396 17 0 16.0486 0 14.875V5.3125H17V4.25H0V3.1875C0 2.01389 0.951396 1.0625 2.125 1.0625H3.1875V0.53125C3.1875 0.237849 3.42535 0 3.71875 0Z"
                  fill="#BB9D88"
                />
              </g>
              <defs>
                <clipPath id="clip0_11_888">
                  <rect width="17" height="17" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </span>
          <p>
            {new Date(blog.datePosted)
              .toDateString()
              .split(" ")
              .filter((_, i) => i > 0)
              .join(",")
              .replace(",", " ")}
          </p>
        </div>
        <p className="BIC-title">{blog.title}</p>
        <div className="BIC-cta-div">
          <button>READ MORE</button>
        </div>
      </div>
    </BlogItemStyled>
  );
};
