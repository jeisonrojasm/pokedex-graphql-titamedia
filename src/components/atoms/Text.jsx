export const Text = ({ children, as = 'span', className = '', style = {} }) => {
  const Component = as
  return <Component className={className} style={style}>{children}</Component>
}
