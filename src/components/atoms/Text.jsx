export const Text = ({ children, as = 'span', className = ''}) => {
  const Component = as
  return <Component className={className}>{children}</Component>
}
