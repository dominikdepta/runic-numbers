export interface RuneProps {
  value: number;
  ref?: React.Ref<SVGSVGElement> | undefined;
  className?: string;
}

export interface SvgLineConditionParams {
  hundreds: number;
  thousands: number;
  ones: number;
  tens: number;
}
