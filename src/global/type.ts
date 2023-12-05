export interface AdditionalStyles {
  color?: string;
  fontSize?: string;
  fontWeight?: string;
  fontStyle?: string;
  fontFamily?: string;
  textDecoration?: string;
  textTransform?:
    | "none"
    | "capitalize"
    | "uppercase"
    | "lowercase"
    | "initial"
    | "inherit";
  textAlign?:
    | "left"
    | "right"
    | "center"
    | "justify"
    | "start"
    | "end"
    | "match-parent"
    | "initial"
    | "inherit";
  lineHeight?: string;
  letterSpacing?: string;
  wordSpacing?: string;
  whiteSpace?:
    | "normal"
    | "nowrap"
    | "pre"
    | "pre-wrap"
    | "pre-line"
    | "break-spaces"
    | "initial"
    | "inherit";
  backgroundColor?: string;
  backgroundImage?: string;
  backgroundSize?: string;
  backgroundPosition?: string;
  backgroundRepeat?: string;
  border?: string;
  borderTop?: string;
  borderRight?: string;
  borderBottom?: string;
  borderLeft?: string;
  borderColor?: string;
  borderRadius?: string;
  boxShadow?: string;
  opacity?: number;
  zIndex?: number;
  width?: string;
  minWidth?: string;
  maxWidth?: string;
  height?: string;
  minHeight?: string;
  maxHeight?: string;
  margin?: string;
  marginTop?: string;
  marginRight?: string;
  marginBottom?: string;
  marginLeft?: string;
  padding?: string;
  paddingTop?: string;
  paddingRight?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  display?: string;
  position?:
    | "static"
    | "relative"
    | "absolute"
    | "fixed"
    | "sticky"
    | "initial"
    | "inherit";
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  float?: "left" | "right" | "none" | "initial" | "inherit";
  clear?: "none" | "left" | "right" | "both" | "initial" | "inherit";
  overflow?: string;
  cursor?: string;
  listStyle?: string;
  pointerEvents?:
    | "auto"
    | "none"
    | "visiblePainted"
    | "visibleFill"
    | "visibleStroke"
    | "visible"
    | "painted"
    | "fill"
    | "stroke"
    | "all"
    | "initial"
    | "inherit";
  userSelect?:
    | "auto"
    | "text"
    | "none"
    | "contain"
    | "all"
    | "initial"
    | "inherit";
}
