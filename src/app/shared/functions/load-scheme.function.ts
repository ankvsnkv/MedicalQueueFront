
export function loadScheme(schemePath:string) {
    var styleTable = document.createElement("link");
    styleTable.setAttribute("rel", "stylesheet");
    styleTable.setAttribute("href", schemePath);
    let head = document.getElementsByTagName("head")[0];
    head.appendChild(styleTable);
  }