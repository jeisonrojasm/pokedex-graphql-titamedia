export const Text = ({ children, as = 'span' }) => {
  const Component = as
  return <Component>{children}</Component>
}
