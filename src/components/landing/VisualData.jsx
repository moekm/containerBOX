import { useState } from "react";

export default function VisualData({
  id,
  type = "",
  title,
  tabs,
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

  const isTabs = !tabs ? null : 0; // If tabs prop is defined, select index 0
  const [activeTab, setActiveTab] = useState(isTabs);

  function handleTabSwitch(index) {
    setActiveTab(index);
  }

  let hasCustom = {
    head: false,
    content: false,
  };

  // checks for the type of the head. string or button nav
  const btnNav = (typeof title == "object" && title.length) || false;
  const strNav = typeof title == "string" ? true : false;

  // the custom prefix "custom" is ignored and is there for better readablity
  const typeArgs = type.split("-");
  if (typeArgs.includes("head")) hasCustom.head = true;
  if (typeArgs.includes("content")) hasCustom.content = true;

  // renders
  const Head = () => {
    return (
      <div id="head">
        <div>
          {strNav && <p>{title}</p>}
          {btnNav &&
            title.map((btnText, i) => (
              <button
                key={i}
                onClick={() => handleTabSwitch(i)}
                id="type-text"
                className={activeTab == i ? "active" : null}
              >
                {btnText}
              </button>
            ))}
        </div>
      </div>
    );
  };

  const Content = ({ head, body }) => {
    let headJSX;
    if (head.length > 0) {
      headJSX = (
        <div id="content-head">
          <div id="row">
            {head.map((value, i) => (
              <p key={i}>{value}</p>
            ))}
          </div>
          <hr />
        </div>
      );
    }

    // content = [[1,2],[3,4],[5,6]]
    // item = [1,2], [3,4], [5,6]
    return (
      <>
        {headJSX}
        <ul>
          {body.map((item, i) => (
            <li key={i} id="row">
              {item.map((value, i) => (
                <p key={i}>{value}</p>
              ))}
            </li>
          ))}
        </ul>
      </>
    );
  };

  // render 'Content' depending on if there's a tab prop if not fallback to default
  let renderContent;
  if (activeTab !== null && activeTab >= 0) {
    const currentTab = tabs[activeTab];

    const tabContentHead = currentTab.contentHead || [];
    const tabContent = currentTab.content;

    renderContent = <Content head={tabContentHead} body={tabContent} />;
  } else {
    renderContent = <Content head={contentHead} body={content} />;
  }

  return (
    <div className="component-container" id={id || null}>
      {hasCustom.head ? null : <Head />}
      <div id="content">{hasCustom.content ? children : renderContent}</div>
    </div>
  );
}
