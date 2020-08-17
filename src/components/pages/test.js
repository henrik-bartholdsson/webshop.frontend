import React from "react";

function Test(props) {
  return (
    <div>
      {" "}
      {props.props ? (
        <div>
          {" "}
          {props.props.map((t) => (
            <div key={t.id}>
              {props.parent ? props.parent + t.title : t.title}
              {t.subCategories ? (
                <div>
                  <Test
                    props={t.subCategories}
                    parent={props.parent ? props.parent + "---" : "---"}
                  />
                </div>
              ) : (
                <div />
              )}
            </div>
          ))}
        </div>
      ) : (
        <div />
      )}
    </div>
  );
}

export default Test;
