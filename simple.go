package main

import (
	"fmt"
	"net/http"
)

func all(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello api from online server !\n")
}
func main() {
	http.HandleFunc("/api", all)
	panic(http.ListenAndServe(":19090", nil))
}
