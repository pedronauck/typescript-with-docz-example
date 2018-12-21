type ButtonProps = { secondary?: boolean }
export const Button = (props: ButtonProps) =>
  props.secondary ? 'secondary' : 'main'
