import React from "react";

function Test(props) {
  return (
    <div>
      {" "}
      {props.props ? (
        <div>
          {props.props.map((t) => (
            <div key={t.id}>
              {t.subCategories.length ? (
                t.title
              ) : (
                <a href={"/product" + t.id}>{t.title}</a>
              )}
              {t.subCategories.length ? (
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
