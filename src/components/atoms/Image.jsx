export const Image = ({ src, alt, className = '', onClick = null }) => (
  <img src={src} alt={alt} className={className} onClick={onClick} />
)
