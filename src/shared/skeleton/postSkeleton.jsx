import React from "react"
import ContentLoader from "react-content-loader"

const PostSkeleton = (props) => (
  <ContentLoader 
    speed={2}
    width={480}
    height={540}
    viewBox="0 0 400 460"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="21" cy="31" r="15" /> 
    <rect x="48" y="28" rx="2" ry="2" width="100" height="10" /> 
    <rect x="0" y="60" rx="2" ry="2" width="400" height="400" />
  </ContentLoader>
)

export default PostSkeleton