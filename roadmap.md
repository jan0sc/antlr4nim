## roadmap

DONE  run toJson from nimscript as external process (staticExec)

implement CSV listener (interpret)
implement CSV visitor (interpret)
implement Fonc visitor (compile)

allow preprocessing (string) and postprocessing (json) procs ( e.g. dent/undent ) in nimscript before compilation

interpret mode => visitor proc returns object
compile mode => visitor proc returns NimNode?
