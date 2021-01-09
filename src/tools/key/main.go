package main

import (
	"fmt"
	"github.com/ggdream/crypto/rsa"
)


func main(){
	pri, pub := rsa.GenerateKey(1024)
	fmt.Println(rsa.SetPrivateKeyToPem(pri))
	fmt.Println(rsa.SetPublicKeyToPem(pub))
}
