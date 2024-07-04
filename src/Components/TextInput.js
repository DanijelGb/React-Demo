export default function H4Texts({ text, size, cName }) {
  const HeadingTag = `${size}`;

  return (
    <div className="textInput">
      <HeadingTag className={cName}>{text}</HeadingTag>
    </div>
  );
}