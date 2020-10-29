package main

import (
    "fmt"
    "bufio"
    "os"
)

func main() {
    s := bufio.NewScanner(os.Stdin)
    fmt.Println("Hello, World.")
    for s.Scan() {
        fmt.Println(s.Text())
    }
}