export default function VisualData({
  id,
  type = "",
  title,
  contentHead = [],
  content = [[]],
  children,
}) {
  if (typeof type !== "string") {
    throw Error(
      "Passed an invalid 'type' prop to the component. of type: ",
      typeof type
    );
  }

  let isCustom = {
    head: false,
    content: false,
  };

  const btnNav = (typeof title == "object" && title.length) || false;
  const strNav = typeof title == "string" ? true : false;

  // the custom prefix "custom" is ignored and is there for better readablity
  const typeArgs = type.split("-");
  if (typeArgs.includes("content")) isCustom.content = true;
  if (typeArgs.includes("head")) isCustom.head = true;

  return (
    <div className="component-container" id={id || null}>
      {isCustom.head ? null : (
        <div id="head">
          <div>
            {strNav && <p>{title}</p>}
            {btnNav &&
              title.map((btn, i) => {
                return (
                  <button key={i} id="type-text">
                    {btn}
                  </button>
                );
              })}
          </div>
        </div>
      )}
      <div id="content">
        {isCustom.content ? (
          children
        ) : (
          <>
            {contentHead.length > 0 && (
              <div id="content-head">
                <div id="row">
                  {contentHead.map((value, i) => (
                    <p key={i}>{value}</p>
                  ))}
                </div>
                <hr />
              </div>
            )}

            <ul>
              {content.map((item, i) => (
                <li key={i} id="row">
                  {item.map((value, i) => (
                    <p key={i}>{value}</p>
                  ))}
                </li>
              ))}
            </ul>
          </>
        )}
      </div>
    </div>
  );
}
