import classNames from "classnames";

export default function Gradient({
  className,
}: {
  className?: string;
}) {
  return (
    <div
      className={classNames("absolute -z-10 blur-3xl", className)}
    />
  );
}