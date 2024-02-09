import React from "react";
import "./css/CompA.css";

const Cards = ({ planObj }) => {
  return (
    <div>
      <div class="row row-cols-1 row-cols-md-3 g-4 p-3">
        {planObj.map((item, index) => {
          return (
            <>
              <div key={index}>
                <div class="col p-3 text-center mb-3">
                  <div class="card ">
                    <div class="card-body">
                      <p className="card-text">{item.plan}</p>
                      <h2 class="card-title">{item.Rs}</h2>
                      <div className="borderb"></div>
                      <ol class="text-start tick-list">
                        <li>{item.user}</li>
                        <li>{item.storage}</li>
                        <li>{item.projects}</li>
                        <li>{item.community}</li>
                        {item.plan === "FREE" ? (
                        <>
                          <li className="text-muted wrong-list">{item.private}</li>
                          <li className="text-muted wrong-list">{item.phone}</li>
                          <li className="text-muted wrong-list">{item.subdomain}</li>
                          <li className="text-muted wrong-list">{item.report}</li>
                          <button class="btn btn-primary button-plan" type="button" disabled>Button</button>
                        </>
                      ) : item.plan === "PLUS" ? (
                        <>
                          <li>{item.private}</li>
                          <li>{item.phone}</li>
                          <li>{item.subdomain}</li>
                          <li className="text-muted wrong-list">{item.report}</li>
                          <button class="btn btn-primary button-plan" type="button" disabled>Button</button>
                        </>
                      ) : (
                        <>
                        <li>{item.private}</li>
                        <li>{item.phone}</li>
                        <li>{item.subdomain}</li>
                        <li>{item.report}</li>
                        <button class="btn btn-primary button-plan" type="button">Button</button>
                      </>
                      )}
                    </ol>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
