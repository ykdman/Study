export default function Button({ children, textOnly, className, ...props }) {
  // text-button class 사용을 위한 분기 변수 할당
  let cssClasses = textOnly ? "text-button" : "button";
  cssClasses += " " + className;

  return (
    <button className={cssClasses} {...props}>
      {children}
    </button>
  );
}
