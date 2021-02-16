// antlr4nim js helpers for nim visitor/listener

import CSVListener from "./CSVListener.mjs"

function getListener(grammar){
  return new CSVListener();
}
